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



    //slider2
let slide2count=0
let count2=0
function slideright2(id,i){
let slider=document.getElementById(id)
if(count2<i-1){
    count2=count2+1;
    slide2count=slide2count-300
slider.style.translate=slide2count+"px"
document.getElementById("slide2btnl").style.opacity="100%"

}
else{
    document.getElementById("slide2btnr").style.opacity="30%"
}
}

function slideleft2(id){
    let slider=document.getElementById(id)

    if(count2>0){
        count2=count2-1
slide2count=slide2count+300
    slider.style.translate=slide2count+"px"
    document.getElementById("slide2btnr").style.opacity="100%"
    }
    else{
        document.getElementById("slide2btnl").style.opacity="30%"

    }
    
    }







    //slider3
let slide3count=0
let count3=0
function slideright3(id,i){
let slider=document.getElementById(id)
if(count3<i-1){
    count3=count3+1;
    slide3count=slide3count-200
slider.style.translate=slide3count+"px"
document.getElementById("slide3btnl").style.opacity="100%"

}
else{
    document.getElementById("slide3btnr").style.opacity="30%"
}
}

function slideleft3(id){
    let slider=document.getElementById(id)

    if(count3>0){
        count3=count3-1
slide3count=slide3count+200
    slider.style.translate=slide3count+"px"
    document.getElementById("slide3btnr").style.opacity="100%"
    }
    else{
        document.getElementById("slide3btnl").style.opacity="30%"

    }
    
    }