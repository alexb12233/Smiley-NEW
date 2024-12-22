var x=0;
console.log(x)
function sad(){
    x=x+1
    console.log(x)
    document.getElementById("count").innerHTML=x;
    document.getElementById("sad").src="https://st2.depositphotos.com/1001911/7684/v/600/depositphotos_76840879-stock-%20%20%20%20%20%20%20%20%20%20%20%20illustration-depressed-emoticon.jpg";
}
function smile(){
    sad()
    document.getElementById("sad").src="https://st.depositphotos.com/1001911/1554/v/600/depositphotos_15540341-stock-illustration-thumb-up-emoticon.jpg";
}
function randomise(){
    var random=Math.random()
    console.log(random)
    if(random>0.6)
        {smile()}
    else
    {sad()}
}
function reset(){
    sad()
    document.getElementById("count").innerHTML="__";
    x=0;
}
