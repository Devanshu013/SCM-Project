//product 1 js
var t1;
if (t1==undefined) {
    t1=" ";
}else{
    t1;
}
var t2;
if (t2==undefined) {
    t2=" ";
}else{
    t2;
}
var t3;
if (t3==undefined) {
    t3=" ";
}else{
    t3;
}
var t4;
if (t4==undefined) {
    t4=" ";
}else{
    t4;
}
var t5;
if (t5==undefined) {
    t5=" ";
}else{
    t5;
}
var t6;
if (t6==undefined) {
    t6=" ";
}else{
    t6;
}

function funcm1(){
    
    num1=document.getElementById("n1").innerText;
    num2=document.getElementById("s1").innerText;
    // num3=document.getElementById("s11").innerText;
    // num4=Number(document.getElementById("h1s").innerText);
    document.getElementById("p1p").innerHTML=count;
    num3=count;
    // if ($("#plus1").click()) {
    //     num3=num3+1;
    // }
    // if ($("#sub1").click()) {
    //     if (num3>1) {
    //         num3=num3-1;
    //     }else{
    //         num3=" ";
    //     }
    // }
   
    
    document.getElementById("p1").innerHTML=num2+"-"+num1;
//     document.getElementById("p1p").innerHTML=num3;
     t1="/"+num2+"-"+num1+"quantity-"+ num3+"/";
//     var f9=String(document.getElementById("n1").innerText);
//    var f99=f9.slice(3,8);
//    var f999=Number(f99);

   
   
//     if (document.getElementById("total").innerHTML==0) {
//         document.getElementById("total").innerHTML=f999;
//     }
//     else{
//         var val9=Number(document.getElementById("total").innerHTML);
//         var val99=(val9)+Number(f999);
//         document.getElementById("total").innerHTML=val99;
        
//        }
    
    
  

};
// function func11(){
//     document.getElementById("p1").innerHTML=" ";
//     document.getElementById("p1p").innerHTML=" ";
//     t1=' ';
//     num3=0;
// }
    
function funcm2(){
    
    num1=document.getElementById("n2").innerText;
    num2=document.getElementById("s2").innerText;
    document.getElementById("p2p").innerHTML=count;
    num3=count;
    if ($("#plus2").click()) {
        num3=num3+1;
    }
    // num3=document.getElementById("s11").innerText;
    // num4=Number(document.getElementById("h1s").innerText);
    t2="/"+num2+"-"+num1+"quantity-"+ num3 + "/";
   
    
    document.getElementById("p2").innerHTML=num2+"-"+num1;
}

function funcm3(){
    
    num1=document.getElementById("n3").innerText;
    num2=document.getElementById("s3").innerText;
    document.getElementById("p3p").innerHTML=count;
    num3=count;
    if ($("#plus3").click()) {
        num3=num3+1;
    }
    // num3=document.getElementById("s11").innerText;
    // num4=Number(document.getElementById("h1s").innerText);
    t2="/"+num2+"-"+num1+"quantity-"+ num3 + "/";
   
    
    document.getElementById("p3").innerHTML=num2+"-"+num1;}

    function funcm4(){
    
        num1=document.getElementById("n4").innerText;
        num2=document.getElementById("s4").innerText;
        document.getElementById("p4p").innerHTML=count;
        num3=count;
        if ($("#plus4").click()) {
            num3=num3+1;
        }
        // num3=document.getElementById("s11").innerText;
        // num4=Number(document.getElementById("h1s").innerText);
        t2="/"+num2+"-"+num1+"quantity-"+ num3 + "/";
       
        
        document.getElementById("p4").innerHTML=num2+"-"+num1;}
        function funcm5(){
    
            num1=document.getElementById("n5").innerText;
            num2=document.getElementById("s5").innerText;
            document.getElementById("p5p").innerHTML=count;
            num3=count;
            if ($("#plus5").click()) {
                num3=num3+1;
            }
            // num3=document.getElementById("s11").innerText;
            // num4=Number(document.getElementById("h1s").innerText);
            t2="/"+num2+"-"+num1+"quantity-"+ num3 + "/";
           
            
            document.getElementById("p5").innerHTML=num2+"-"+num1;}

            function funcm6(){
    
                num1=document.getElementById("n6").innerText;
                num2=document.getElementById("s6").innerText;
                document.getElementById("p6p").innerHTML=count;
                num3=count;
                if ($("#plus6").click()) {
                    num3=num3+1;
                }
                // num3=document.getElementById("s11").innerText;
                // num4=Number(document.getElementById("h1s").innerText);
                t2="/"+num2+"-"+num1+"quantity-"+ num3 + "/";
               
                
                document.getElementById("p6").innerHTML=num2+"-"+num1;}

                function send_handle(){

                    let mobilenumber=document.getElementById("mbn").value;
                    
                   
                    
                    var win = window.open(`https://wa.me/7419041303?text=order: ${t1} ${t2} ${t3} ${t4} ${t5} ${t6} <>contactNumber:${mobilenumber}`, '_blank');
                }
