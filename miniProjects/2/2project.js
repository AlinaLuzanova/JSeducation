const registeredUsers = [
    ['admin', 'KoI18'],
    ['manager', 'SuperMe108'],
    ['editor', '12345'],
];

const inputs = document.querySelectorAll('input')
const form = document.querySelector('form')
const login = document.querySelector('[name=login]');
const password = document.querySelector('[name=password]')

inputs.forEach(input => input.addEventListener('keypress', handleEvent))
form.addEventListener('submit',handleSubmit);

function handleEvent(event){
    console.log(event.key)
    console.dir(event.target)
    if(event.key === "Enter"){
        event.preventDefault()
        event.target.nextElementSibling.focus()
    }
}

function handleSubmit(event){
    event.preventDefault()
    console.log('submit')
   if(!validateLength()){
       console.log("all fields are required!")
   }
   if(!validateNumber()){
       console.log('incorrect login or password')
   }
   else{
       form.reset()
   }
}

function validateLength() {
    let isValid = true;
    if (!login.value.trim() || !password.value.trim()) {
        isValid = false;
        console.log("all fields are required!")
    }
    return isValid;
}
 function validateNumber(){
    for(let elem of registeredUsers) {
        if(login.value === elem[0] && password.value === elem[1]){
            return true
            }
        }

}

