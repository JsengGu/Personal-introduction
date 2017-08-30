
// 轮播图函数
(function(){
    let oHeader=document.querySelector('header');
    let oTab=oHeader.querySelector('.header_tab');
    let aTabImg=oTab.querySelectorAll('img');
    let ison1=0;
    let timer=null;
    //tab图片位置控制
    for(let i=0;i<aTabImg.length;i++){
        aTabImg[i].style.opacity=0;
    }
    aTabImg[ison1].style.opacity=1;
    aTabImg[ison1].style.transform='scale(1,1)';
    aTabImg[ison1].style.transition='1s';
    setTimeout(function(){
        aTabImg[0].style.transition='3s';
        aTabImg[0].style.transform='scale(0.8,0.8)';
    }, 100);
    
    ison1++;
    clearInterval(timer)
    timer=setInterval(function(){
        
        if(ison1>=aTabImg.length){
            ison1=0;
        }
        for(let i=0;i<aTabImg.length;i++){
           aTabImg[i].style.opacity=0;
           aTabImg[i].style.transform='scale(1,1)';

        }
        aTabImg[ison1].style.transform='scale(0.8,0.8)';
        aTabImg[ison1].style.transition='3s';
        aTabImg[ison1].style.opacity=1;
        ison1++;
    }, 6000)
})()