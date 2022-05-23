var q=document.querySelector('#submit');
q.addEventListener("click",function(event){
    event.preventDefault();
    
    var num1=document.getElementById("b1").value;
    var num2=document.getElementById("b2").value;
    console.log(num1);
    console.log(num2);

    
    if (num2=="spicy" && num1>200) {
        document.getElementById("j1").innerText="MANCHURIAN and/or Momos";

    }else if (num1<=100 && num2=="spicy") {
        document.getElementById("j1").innerText=" Momos";
    }else if (num1>200 && num2=="sweet") {
        document.getElementById("j1").innerText="misthi doi /or/ sandesh /or/ kheer";
    }else if (num1<=100 && num2=="sweet") {
        document.getElementById("j1").innerText=" kheer";
    }else if(num<=100 && num2=="itallic" ){
        document.getElementById("j1").innerText="pasta/or/small pizza";
    }else{
        document.getElementById("j1").innerText="No Result Found!!";
    }
    
    });
    
    
    
        
    


