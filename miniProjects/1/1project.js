const btn = document.querySelector('button')
const inputs = document.querySelectorAll('input')
const form = document.querySelector('form')
inputs.forEach(input => input.addEventListener('keypress', handleEvent))
form.addEventListener('submit',handleSubmit)
//btn.addEventListener('click', handleEvent);


function handleEvent(event){
    console.log(event);
    console.dir(event.target)

    if(event.key === "Enter"){
        event.preventDefault()
        event.target.nextElementSibling.focus()
    }
}

function handleSubmit(event){
    event.preventDefault() //удаление события по умолчанию
    console.log('submit')
    if (validate()){
        //submit
        form.reset()
    }else {
        alert('fix me');
    }
}

function validate(){
    let isValid = true;
    inputs.forEach(input=>{
        if(!input.value.trim()){
            input.style.borderColor ='red'
            isValid = false;
        }else{
            input.style.borderColor ='black'
        }
    })
    return isValid;
}

//При обработке события, event.target предоставляет ссылку на элемент,
// на котором произошло событие.