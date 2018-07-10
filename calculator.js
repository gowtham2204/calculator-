var box = document.getElementById("display");

function addtoscreen(x){
    box.value+=x;
    if(x=='c')
    {
        box.value="";
    }
}

function answer(){
    x=box.value;
    x=eval(x);
    box.value=x;
}

function backspace(){
    var number=box.value;
    var len = number.length-1;
    var newnumber = number.substring(0,length)
    box.value = newnumber;
}

function squareroot(){
    x = box.value;
    var sqrt = Math.sqrt(x);
    box.value = sqrt;
}

function power(){
    x=box.value;
    x=Math.pow(X,Y);
    box.value = x;
}

function abs(){
    x=box.value;
    x=Math.abs(x);
    box.value = x;
}

function celi(){
    x=box.value;
    x=Math.celi(x);
    box.value = x;
}

function floor(){
    x=box.value;
    x=Math.floor(x);
    box.value =x;
}

function exp(){
    x=box.value;
    x=Math.exp(x);
    box.value =x;
}

function log(){
    x=box.value;
    x=Math.log(x);
    box.value =x;
}

function round(){
    x=box.value;
    x=Math.round(x);
    box.value =x;
}