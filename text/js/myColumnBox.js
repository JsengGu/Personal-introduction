
//我的作品的div  效果从放大
(function myColumnBox(){
    let oMain=document.querySelector('main');
    let aSection=oMain.querySelectorAll('section');
    let amCBOx=aSection[2].querySelectorAll('.mCBOx');
    var oPopacity=0;
    var ft=false;
    for(var i=0;i<amCBOx.length;i++){
        amCBOx[i].onmouseover=function(){
            if(ft){
                return ;
            }
            clearInterval(timer);
            clearInterval(timer2);
            ft=true;
            var long=1;
            var oLine=this.querySelector('.line');
            var aLineDiv=oLine.querySelectorAll('div');
            oLine.style.display='block';
            var timer=setInterval(function(){
                // aLineDiv[3].style.height=long+1+'px';
                
                if(long<190){
                    aLineDiv[3].style.height=long+1+'px';
                }else if (long<511) {
                    aLineDiv[3].style.height='190px';
                    aLineDiv[2].style.width=long-190+1+'px';
                }else if (long<701) {
                    aLineDiv[3].style.height='190px';
                    aLineDiv[2].style.width='322px';
                    aLineDiv[1].style.height=long-511+1+'px';
                }else if (long<=1022) {
                    aLineDiv[3].style.height='190px';
                    aLineDiv[2].style.width='322px';
                    aLineDiv[1].style.height='190px';
                    aLineDiv[0].style.width=long-701+1+'px';
                }else{
                    aLineDiv[3].style.height='190px';
                    aLineDiv[2].style.width='322px';
                    aLineDiv[1].style.height='190px';
                    aLineDiv[0].style.width='322px';
                }
                long+=7;
            }, 5);

            //内容区块
            var oText=this.querySelector('.myColumntext');
            var oTitle=oText.querySelector('h3');
            var oP=oText.querySelector('p');
            
            var timer2=setInterval(function(){
                oTitle.style.top=oTitle.offsetTop+1+'px';
                oP.style.top=oP.offsetTop-1+'px';
                oPopacity+=(0.02);
                if(oTitle.offsetTop==65){
                    clearInterval(timer2);
                }
                oP.style.opacity=oPopacity;
            },30)
            this.onmouseleave=function(){
                clearInterval(timer3);
                clearInterval(timer);
                clearInterval(timer2);
                oLine.style.display='none';
                // alert(timer2)
                aLineDiv[3].style.height='0px';
                aLineDiv[2].style.width='0px';
                aLineDiv[1].style.height='0px';
                aLineDiv[0].style.width='0px';
                var timer3=setInterval(function(){
                    oTitle.style.top=oTitle.offsetTop-1+'px';
                    oP.style.top=oP.offsetTop+1+'px';
                    oPopacity-=(0.02);
                    if(oTitle.offsetTop<=30){
                        oPopacity=0;
                        clearInterval(timer3);
                    }
                    oP.style.opacity=oPopacity;
                },20)
                long=1;
                ft=false;
            }
        }
    }
})();