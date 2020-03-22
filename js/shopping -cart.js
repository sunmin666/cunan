    //获取所有按钮
    var btns=document.querySelectorAll(".td-g >button");
    //console.log(btns);
    for(var btn of btns){
      //给按钮绑定事件  
        btn.onclick=function(){
        var input=this.parentNode.children[1];
        var num=parseInt(input.value);
        if(this.innerHTML=="+"){
            num++;
        }else if(num>0){
            num--;
        }
        //修改数量
       input.setAttribute("value", num);
       //获取单价  计算小计
       var pric=parseFloat(this.parentNode.previousElementSibling.children[0].innerHTML);
       console.log(pric);
       var xpric=this.parentNode.nextElementSibling.children[0];
       console.log(xpric);
       var xjpric=pric*num;
       xpric.innerHTML=`${xjpric.toFixed(2)}`;
       //总价
       var zong=document.querySelector(".two-bort span strong");
       var allpic=document.querySelectorAll(".td-h b");
       var zuo=0;
      for(var pic of allpic){
          zuo+=parseFloat(pic.innerHTML);
         }
        zong.innerHTML=`￥${zuo.toFixed(2)}` 
     }
}