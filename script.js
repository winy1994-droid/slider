let slideIndex = 1;

function setSlide(input, index) {
  slideIndex = index;
  let item = document.querySelector(`#${input}`);

  let slides = [...document.querySelector(".slides").children];

  slides.forEach((element) => {
    element.classList.remove("active");
  });
  item.classList.add("active");
}
 

setInterval(()=>{
  slideIndex+=1;
  if(slideIndex==6){
     slideIndex=1
  }
  setSlide(`slide${slideIndex}`,slideIndex);
},2000)