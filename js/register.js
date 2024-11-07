
// cancel the page  or go back

const cancel = document.getElementById('close')
const sign = document.getElementById('sign-in-google')

cancel.addEventListener('click', close)
function close() {
    window.location.href = "first.html"
}

// getting what i need from html document

const outhTitle = document.getElementById('outh-title')
const userName = document.getElementById('user-name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPass = document.getElementById('confirm-pass')
const signInBtn = document.getElementById('sign-in')
const authSwitch = document.getElementById('authSwitch')
const switchForm = document.getElementById('switchForm')
const outhForm = document.querySelector('#outh-form')

//  swiching sign in and sign up

let signIn = true;
document.body.addEventListener('click', function(e){
    if (e.target.id != 'switchForm') return;

    signIn = !signIn
    if(!signIn){
        outhTitle.innerHTML = 'Register '
        signInBtn.textContent = 'Register'
        authSwitch.innerHTML = `Already have an account in<span>Nasiye</span>
                    <a href="#" id="switchForm">Log in</a>`
        userName.style.display = 'block'
        confirmPass.style.display = 'block'

    }else{
        outhTitle.innerHTML = 'Log in'
        signInBtn.textContent = 'Log in'
        authSwitch.innerHTML = `New to<span>Nasiye</span>
                    <a href="#" id="switchForm">Register now</a>`

        userName.style.display = "none"
        confirmPass.style.display = "none"

        userName.value = ''
        confirmPass.value = ''
    }
   
})

// storing Data to local storage

outhForm.addEventListener('submit', (e)=>{

    e.preventDefault()

    const user = {
        userName: signIn ? undefined : userName.value,
        email:email.value,
        password:password.value,
        confirmPass: signIn ? undefined :  confirmPass.value
    }

    if(confirmPass.value !== password.value){
        alert('password mismatch');
        return;
    }
    if(userName.value == ''){
        alert('please inter username')
        return;
    }

    // if i am in sign in page
    if(signIn){

    }
    // if i am in registration side
    else{

        const users = JSON.parse(localStorage.getItem('users'))   || []
        users.push(user)

        localStorage.setItem('users', JSON.stringify(users))
    }

    
})

