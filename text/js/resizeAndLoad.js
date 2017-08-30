(function(){
    let oHeader=document.querySelector('header');
    let oMain=document.querySelector('main');
    let oFooter=document.querySelector('footer');
    //获取每个内容   （返回按钮，动画函数）
    let aSection=oMain.querySelectorAll('section');
    // 获取页尾
    let oScrollUp=oFooter.querySelector('.scroll-up');
    //可视窗的高度
    let oBodyHeight=document.documentElement.clientHeight;
    //动画相关

    // 文字运动效果调用的div
    let aText=oMain.querySelectorAll('.section_text');
    //我的技能的div  效果从俩侧向中间走
    let aSkillBoxfl=aSection[1].querySelectorAll('.fl');
    let aSkillBoxfr=aSection[1].querySelectorAll('.fr');        
    //我的作品的div  效果从放大
    let aWorksBoxfl=aSection[2].querySelectorAll('.fl');
    let oNav=oMain.querySelector('nav');
   
    //nav导航条的高度
    let oNavReplace=oMain.querySelector('.nav_Replace');
    //导航条下的按钮
    let oNavBtn=oNav.querySelector('.nav_btn');
    let aNavBtnA=oNavBtn.querySelectorAll('a');


    //
    let iNt = 0;


    let isonarr=[];
    for(let i=0;i<=aNavBtnA.length;i++){
        isonarr.push(false);
    };

    let Sisonarr=[];
    for(let i=0;i<=aNavBtnA.length;i++){
        Sisonarr.push(false);
    };

    resizeAndLoad();
    window.onresize=function(){
        resizeAndLoad();
    }



    //页面加载和页面缩放时执行的  响应式和导航条 页面动画
    function resizeAndLoad(){
        // 响应式布局字体
        document.documentElement.style.fontSize=document.documentElement.clientWidth*20/1366+'px';
        //头部控制
        let oBodyWidth=document.documentElement.clientWidth;
        let oBodyHeight=document.documentElement.clientHeight;
        //初始滚动条的位置
        let oScroll=document.body.scrollTop||document.documentElement.scrollTop;
        oHeader.style.Width=oBodyWidth+'px';
        oHeader.style.height=oBodyHeight+'px';
        //判断返回顶部按钮是否出现
        if(oScroll>=oNav.offsetHeight+oScrollUp.offsetHeight+20){
            oScrollUp.style.display='block';
        }else{
            oScrollUp.style.display='none';
        }
        //导航条下的字体颜色
        let topJson={}
        for(let i=0;i<aNavBtnA.length;i++){


        }

        //导航条控制
        document.body.onscroll=function(ev){
            //滚动条的高度
            let oScroll=document.body.scrollTop||document.documentElement.scrollTop;

            console.log(oScroll)
            console.log(isonarr)
            console.log(Sisonarr)
            for(let i=0;i<Sisonarr.length;i++){
                if(oScroll>getPos(aSection[i]).top-70&&oScroll<getPos(aSection[i+1]).top-70){
                    Sisonarr[i]=true;
                }else{
                    Sisonarr[i]=false;
                }

            }
            
            for(let i = 0; i<aNavBtnA.length;i++){
                aNavBtnA[i].style.color = ''
                if(Sisonarr[i]==true){
                    aNavBtnA[i].style.color = 'red'
                }
               
            }
            // if(oScroll>getPos(aSection[0]).top&&oScroll<getPos(aSection[1]).top){
            //        alert(1)
            // }
            //判断返回顶部按钮是否出现
            // for(let i = 0; i<aNavBtnA.length;i++){
            //     aNavBtnA[i].style.color = ''
            // }
            if(oScroll>=oNav.offsetHeight+oScrollUp.offsetHeight+20){
                oScrollUp.style.display='block';
            }else{
                oScrollUp.style.display='none';
            }
            //判断导航条是否出现
            if(oBodyHeight<=oScroll){
                oNav.style.position='fixed';
                oNav.style.backgroundColor = '#ccc';
                oNavReplace.style.display='block';
                for(let i = 0; i<aNavBtnA.length;i++){
                    // aNavBtnA[i].style.color = '#fff';
                    aNavBtnA[i].style.fontWeight = '700';
                }
            }else {
                oNav.style.position='relative';
                oNavReplace.style.display='none';
                oNav.style.backgroundColor = '#fff';
                for(let i = 0; i<aNavBtnA.length;i++){
                    // aNavBtnA[i].style.color = '#000';
                    aNavBtnA[i].style.fontWeight = '300';
                }
            }

            // 鼠标点击返回某处
            for(let i=0;i<aNavBtnA.length;i++){
                i==aNavBtnA.length-1?goToObj(aNavBtnA[i],oFooter,oScroll,i):goToObj(aNavBtnA[i],aSection[i],oScroll,i);
            };
            // for(iNt=0;iNt<aNavBtnA.length;iNt++){
            //     iNt==aNavBtnA.length-1?goToObj(aNavBtnA[iNt],oFooter,oScroll,iNt):goToObj(aNavBtnA[iNt],aSection[iNt],oScroll,iNt);
            // };
            
            goToObj(oScrollUp,oHeader,oScroll,(Sisonarr.length-1));


            // 运动特效调用
            atransform(aText,'translateY(0)','1s',200,oScroll);  
            atransform(aSkillBoxfl,'translateX(0)','1s',0,oScroll);  
            atransform(aSkillBoxfr,'translateX(0)','1s',0,oScroll); 
            atransform(aWorksBoxfl,'scale(1)','1s',0,oScroll);                  
        }
    }

    //封装 点击obj 返回 到 指定obj处
    function goToObj(clickObj,goToObj,oScroll,index){
        clickObj.onclick=function(){
            
            if(isonarr[index]){
                return ;
            };

            console.log(index)

            let oP = clickObj.parentElement || clickObj.parentNode
            
            for(let i=0;i<isonarr.length;i++){
                isonarr[i]=false;
            }
            for(let i = 0; i<oP.children.length; i++){  
                oP.children[i].style.color = ''
            }
            isonarr[index]=true;
            for(let i = 0; i<isonarr.length;i++){
                if(isonarr[i]==true){ 
                    
                    // aNavBtnA[i].style.color = 'red'         
                    clickObj.style.color = 'red';
                }
            }
            console.log(isonarr)
            console.log(Sisonarr)
            console.log(getPos(goToObj).top)
            console.log(oScroll)
            // console.log(isonarr);
            // this.style.color = 'red'
            let timer=null;
            clearInterval(timer);
            //移动速度
            let oSpeed=Math.abs(oScroll-getPos(goToObj).top)/50;
            //衰减速率
            let orate=(oSpeed-10)/100;
            timer=setInterval(function(){
                if(getPos(goToObj).top-oScroll<=0){
                    for(let i=0;i<isonarr.length;i++){
                       
                        Sisonarr[i] =false;
                    }
                    //控制滚动条的位移
                    oScroll-=(oSpeed=(oSpeed>=10?(oSpeed-=orate):10));
                    //是否到达指定位置
                    if(oScroll<=getPos(goToObj).top){
                        // isonarr[index]=false;
                        oScroll=getPos(goToObj).top;
                        clearInterval(timer); 

                    }
                }else{
                    for(let i=0;i<isonarr.length;i++){
                       
                        Sisonarr[i] =false;
                    }
                    oScroll+=(oSpeed=(oSpeed>=10?(oSpeed-=orate):10));
                    //是否到达指定位置
                    if(oScroll>=getPos(goToObj).top){
                        // isonarr[index]=false;
                        oScroll=getPos(goToObj).top;
                        clearInterval(timer); 
                    }
                };

                document.body.scrollTop=oScroll;

            },10)                        
        }           
    }  


    //页面整体的动画
    function atransform(obj,otransform,time='0.7s',initTop=100,oScroll){
        if(obj.length===1||obj.length===undefined){
            if(oScroll>=getPos(obj).top-oBodyHeight&&oScroll<=getPos(obj).top+obj.offsetHeight+initTop){
                obj.style.transition=time;
                obj.style.transform=otransform;
            }
        }else if(obj.length>1){
            for(let i=0;i<obj.length;i++){
                if(oScroll>=getPos(obj[i]).top-oBodyHeight&&oScroll<=getPos(obj[i]).top+obj[i].offsetHeight+initTop){
                    obj[i].style.transition=time;
                    obj[i].style.transform=otransform; 
               }                    
            }
        }
    }

}

)()