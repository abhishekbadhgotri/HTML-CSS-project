const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");

checkbox.disabled = true;   //checkbox disabled
submitBtn.disabled = true;  //submit button disabled

const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("SelectColor");

//Assign color to elements
var temp = 0;
elements.forEach(function(element){
    temp++;
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.innerHTML = color;
    if(temp===Math.floor(Math.random()*9)){
        selectColor.innerHTML = color;
    }else{
        if(selectColor.innerHTML.length==0){
            selectColor.innerHTML = color;
        }
    }
});
temp = 0;

//Generate Random hexadecimal color code
function getRandomColor(){
    const letter = "0123456789ABCDEF";
    let color = "#";
    for(let i=0;i<6;i++){
        color += letter[Math.floor(Math.random()*16)];
    }
    return color;
}

//check if right color
elements.forEach(function(element){
    element.addEventListener('click',function(){
        if(element.innerHTML===selectColor.innerHTML){
            checkbox.checked = true;
            submitBtn.disabled = false;
            submitBtn.classList.remove("btn-light");
            submitBtn.classList.add("btn-success");
            alert("You're a human.");
        }else{
            alert("Please verify that you're a human!");
            location.reload(true);
        }
    })
})
