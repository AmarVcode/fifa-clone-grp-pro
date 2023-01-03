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



// slide function js

//slider1
let slide1count=0
let count1=0
function slideright(id,i){
let slider=document.getElementById(id)
if(count1<i-1){
    count1=count1+1;
    slide1count=slide1count-300
slider.style.translate=slide1count+"px"
document.getElementById("slide1btnl").style.opacity="100%"

}
else{
    document.getElementById("slide1btnr").style.opacity="30%"
}
}

function slideleft(id){
    let slider=document.getElementById(id)

    if(count1>0){
        count1=count1-1
slide1count=slide1count+300
    slider.style.translate=slide1count+"px"
    document.getElementById("slide1btnr").style.opacity="100%"
    }
    else{
        document.getElementById("slide1btnl").style.opacity="30%"

    }
    
    }