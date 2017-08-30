
//我的话下的加载条
function loadStrip(jsonArr){
    console.log("2222222");
    let oMain=document.querySelector('main');

    let aSection=oMain.querySelectorAll('section');



    let oloadStripColumn=aSection[3].querySelector('.myColumn');
    let oRhesisBox=oloadStripColumn.querySelector('.rhesis_box');

    //加载条
    let oloadStrip=oloadStripColumn.querySelector('i');
    //图片
    let oRhesisBoxImg=oRhesisBox.querySelector('.rhesis_box_img');
    let oRhesisImg=oRhesisBoxImg.querySelector('img');
    //文字
    let oRhesisText=oRhesisBox.querySelector('.rhesis_box_text');
    
    let oRhesisBoxWidth=oRhesisBox.offsetWidth;
    //加载条的宽度
    let oloadStripWidth=0;
    //加载条移动的速度
    let oloadStripTime=oRhesisBoxWidth/10/300;
    //当前显示的第几条
    let ison=0;

    // 进入页面应该有一个语句
    oRhesisText.innerHTML='<p>'+jsonArr[ison].sentence+'</p><span>'+jsonArr[ison].author+'</span>';

    setInterval(function(){
        if(oloadStripWidth>=oRhesisBoxWidth){
            ison++;
            if(ison>=jsonArr.length){ison=0}
            oRhesisText.innerHTML='<p>'+jsonArr[ison].sentence+'</p><span>'+jsonArr[ison].author+'</span>';
            oloadStripWidth=0;
            oRhesisImg.src='img/item-'+(ison+1)+'.jpg';

        }else{
            oloadStripWidth+=1;
        }
        oloadStrip.style.width=oloadStripWidth+'px';
    },10);
};