const userList = document.querySelectorAll(".nameList li");
const listInput = document.querySelector(".listInput");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", function(){
    const newLi = document.createElement("LI");
    const liContent = document.createTextNode(listInput.value);

    newLi.appendChild(liContent);
    userList.appendChild(newLi);
});