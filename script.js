const shapeContainer = document.querySelector(".shape-container");
const shapes = document.querySelector(".shape");
const btn =document.querySelectorAll("button")



btn[0].addEventListener("click",changeColor);


function genarateColor(){
  let color =Math.floor(Math.random()*255);
  return color;
}

function changeColor(){
  let color = `rgb(${genarateColor()},${genarateColor()},${genarateColor()})`;
  shapeContainer.style.backgroundColor=color;
}

btn[1].addEventListener("click",changeShape);

function changeShape(){
  let shapeArray =["polygon(50% 0%, 0% 100%, 100% 100%)","polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)","polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)","polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)","polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)","polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)","polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)","polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)","polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)","polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)","polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)","polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)","circle(50% at 50% 50%)","polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)"];

  let idx = Math.floor(Math.random()*shapeArray.length);
  shapes.style.clipPath = shapeArray[idx];
}
console.log(btn);