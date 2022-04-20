const myButton = document.querySelectorAll(".btn");

const submit = document.querySelector("#rate");

const inner = document.querySelector("#e");

let selected = null;

for (let index = 0; index < myButton.length; index++) {

    const element = myButton[index];

    element.addEventListener('click', ()=>{
        setStars(parseInt(element.innerText));

        element.style.backgroundColor = "hsl(217, 12%, 63%)"

        element.style.color = "hsl(208, 29%, 20%)";
        setTimeout(() => {

            element.style.backgroundColor = "hsl(208, 29%, 20%)";
            element.style.color = "hsl(217, 12%, 63%)";
            
        }, 4500);
    });   

}
function setStars(num) {
  selected = num;
  inner.innerHTML = selected;
}

submit.addEventListener("click", () => {

  if (selected) {
    document.getElementById("rating-container").style.display = "none";
    document.getElementById("feedback-container").style.display = "block";
    
  } else {
    alert("Please give rating first!");
  }
});
