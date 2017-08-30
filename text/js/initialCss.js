(function(){
    let oMain=document.querySelector('main');
    let aSection=oMain.querySelectorAll('section');
    let aText=oMain.querySelectorAll('.section_text');
    let aSkillBoxfl=aSection[1].querySelectorAll('.fl');
    let aSkillBoxfr=aSection[1].querySelectorAll('.fr');        
    let aWorksBoxfl=aSection[2].querySelectorAll('.fl');


    //页面初始状态
    initialCss(aText,'translateY(200px)');
    initialCss(aSkillBoxfl,'translateX(-300px)');
    initialCss(aSkillBoxfr,'translateX(300px)');  
    initialCss(aWorksBoxfl,'scale(0)');       

    //页面初始整体的动画
    function initialCss(obj,otransform){
        if(obj.length===1||obj.length===undefined){
            obj.style.transform=otransform;
        }else if(obj.length>1){
            for(let i=0;i<obj.length;i++){
                obj[i].style.transform=otransform;
            }
        }
    }

})()
