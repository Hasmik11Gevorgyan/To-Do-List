const input = document.getElementById("input")
const button= document.getElementById("btn")
const list = document.getElementById("list")
const list1 = document.getElementById("list1")



button.addEventListener("click",()=>{
    let li= document.createElement("li")
    li.innerText=input.value
    if (list.childElementCount<5) {
        if (input.value!=="") {
            list.appendChild(li);
        }
    }
    input.value=""  
})
