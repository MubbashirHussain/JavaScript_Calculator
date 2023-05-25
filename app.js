var Dispaly = document.getElementById("display");
function Getting_Value(num){
    Dispaly.value += num;
}
function ClaCulate_Value(){
    Dispaly.value = eval(Dispaly.value)
}
function CLearAll(){
    Dispaly.value = "";
}
function MinusOne(){
   Dispaly.value =  Dispaly.value.slice(0,Dispaly.value.length-1)    
}
function m2(){
    Dispaly.value = (Dispaly.value) * (Dispaly.value)
}
