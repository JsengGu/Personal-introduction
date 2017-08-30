

(function(){
    let oFooter=document.querySelector('footer');
    let oScrollUp=oFooter.querySelector('.scroll-up');
    let oHeader=document.querySelector('header');
    let oMain=document.querySelector('main');
    let aSection=oMain.querySelectorAll('section');
    //头部控制
    let oNav=oMain.querySelector('nav');
    //导航条下的按钮
    let oNavBtn=oNav.querySelector('.nav_btn');
    let aNavBtnA=oNavBtn.querySelectorAll('a');
    //控制不能点击多次
    let isonarr=false;

    let oScroll=document.body.scrollTop||document.documentElement.scrollTop;   
    document.body.onscroll=function(ev){
        oScroll=document.body.scrollTop||document.documentElement.scrollTop; 
        // 执行返回锚点按钮
        for(let i=0;i<aNavBtnA.length;i++){
            i==0?goToObj(aNavBtnA[0],oHeader,oScroll,isonarr):goToObj(aNavBtnA[i],aSection[i-1],oScroll,isonarr);
        };
        goToObj(oScrollUp,oHeader,oScroll,isonarr);
        //封装 点击obj 返回 到 指定obj处
        function goToObj(clickObj,goToObj,oScroll,ison){
            clickObj.onclick=function(){
                if(ison){
                    return ;
                };
                ison=true;
                let timer=null;
                clearInterval(timer);
                //移动速度
                let oSpeed=Math.abs(oScroll-getPos(goToObj).top)/50;
                //衰减速率
                let orate=(oSpeed-10)/100;
                timer=setInterval(function(){
                    if(getPos(goToObj).top-oScroll<=0){
                        //控制滚动条的位移
                        oScroll-=(oSpeed=(oSpeed>=10?(oSpeed-=orate):10));
                        //是否到达指定位置
                        if(oScroll<=getPos(goToObj).top){
                            ison=false;
                            oScroll=getPos(goToObj).top;
                            clearInterval(timer); 
                        }
                    }else{
                        oScroll+=(oSpeed=(oSpeed>=10?(oSpeed-=orate):10));
                        //是否到达指定位置
                        if(oScroll>=getPos(goToObj).top){
                            ison=false;
                            oScroll=getPos(goToObj).top;
                            clearInterval(timer); 
                        }
                    };
                    document.body.scrollTop=oScroll;
                },10)                        
            }           
        }  
    }
        

    
})()