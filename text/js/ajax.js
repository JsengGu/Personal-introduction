function json2str(json){
    json.t=Math.random();
    var arr=[];
    for(var name in json){
        arr.push(name+'='+json[name]);
    }
    return arr.join('&');
}
//ajax
//json.url      路径
//json.data     数据
//json.type     传输方式get post
//json.fnSucc   成功的函数
//json.fnFaild  失败的函数
function ajax(json){
    json=json||{};
    if(!json.url){
        alert('必须传url');
        return ;
    }
    json.data=json.data||{};
    json.type=json.type||'GET';
    //判断是否是ie6
    if(window.XMLHttpRequest){
        var oAjax=new XMLHttpRequest();
    }else{
        var oAjax=new ActiveXObject('Microsoft');
    };
    if(json.type.toUpperCase()=='GET'){
        //建立连接
        oAjax.open('GET',json.url+'?'+json2str(json.data),true)
        //发送请求
        oAjax.send();

    }else if(json.type.toUpperCase()=='POST'){
        oAjax.open('POST',json.url,true)
        //发送请求
        oAjax.setRequestHeader('Content-Type','application/x-www-from-urlencoded');
        oAjax.send(json2str(json.data));
    }
    //接受数据
    //监控加载情况
    oAjax.onreadystatechange=function(){
        //判断通信状态
        if(oAjax.readyState==4){
            //判断http的状态码
            if((oAjax.status>=200)&&(oAjax.status<300)||(oAjax.status==304)){
                //给数据
               json.fnSucc&&json.fnSucc(oAjax.responseText)
            }else{
                //获取数据失败
                json.fnFaild&&json.fnFaild(oAjax.status);
            };
        };
    };
};


