function showdata(i){
console.log(i)
let div =document.getElementById(i);
if(div.classList.contains("onhover")){
    div.classList.remove("onhover")
}
else{
    div.classList.add("onhover")
}
}


function menu(i){
    console.log(i)
    let div =document.getElementById(i);
    if(div.classList.contains("bottomhover")){
        div.classList.remove("bottomhover")
    }
    else{
        div.classList.add("bottomhover")
    }
    }