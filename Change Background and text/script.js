let h1Element=document.createElement("h1");
h1Element.textContent="Web Applications";

let cont=document.getElementById("container");
cont.appendChild(h1Element);

let backgroundButton =document.createElement("button");
backgroundButton.textContent="Change Background";
cont.appendChild(backgroundButton);

let changeText= document.createElement("button");
changeText.textContent="Change Text";
cont.appendChild(changeText);

backgroundButton.onclick=function()
{
    let body=document.getElementById("body");
    body.style.backgroundColor="Red";
}

changeText.onclick=function()
{
    
    h1Element.textContent="AR and VR";
    h1Element.classList.add("cont");
  
}


let backgroundRemover =document.createElement("button");
backgroundRemover.textContent="Remove Background";
cont.appendChild(backgroundRemover);
backgroundRemover.onclick=function()
{
    let body=document.getElementById("body");
    body.style.backgroundColor="white";
}

let removeStyle = document.createElement("button");
removeStyle.textContent="Remove Styles"
cont.appendChild(removeStyle);

removeStyle.onclick=function()
{
    h1Element.classList.remove("cont");
}
