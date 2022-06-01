
//Constants-------------------------------------/


//Variables-------------------------------------/


//Cached elements-------------------------------/
const input = document.querySelector('input')
const submitBtn = document.querySelector('#submit-button')
const list = document.querySelector('#todo-list')


//Event listeners-------------------------------/
submitBtn.addEventListener('click', userClick)


//Functions-------------------------------------/
function userClick(evt) {
    if (input.value !== "") {
        const item = document.createElement('li')
        item.textContent = input.value
        list.appendChild(item)
        input.value = ""
    } else {
        return
    } 
}
