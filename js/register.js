
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

// all functions
function switchOuthForm() {
    signIn = !signIn
    if (!signIn) {
        outhTitle.innerHTML = 'Register '
        signInBtn.textContent = 'Register'
        authSwitch.innerHTML = `Already have an account in<span>Nasiye</span>
                    <a href="#" id="switchForm">Log in</a>`
        userName.style.display = 'block'
        confirmPass.style.display = 'block'

    } else {
        outhTitle.innerHTML = 'Log in'
        signInBtn.textContent = 'Log in'
        authSwitch.innerHTML = `New to<span>Nasiye</span>
                    <a href="#" id="switchForm">Register now</a>`

        userName.style.display = "none"
        confirmPass.style.display = "none"

        if (userName.value == '') {
            alert('please inter username')
            return;
        }
        if (confirmPass.value !== password.value) {
            alert('password mismatch');
            return;
        }
    }
    userName.value = ''
    email.value = ''
    password.value = ''
    confirmPass.value = ''
}





//  all events
//  swiching log un and registration 

let signIn = true;
document.body.addEventListener('click', function (e) {
    if (e.target.id != 'switchForm') return;

    switchOuthForm();

})

// storing Data to local storage

outhForm.addEventListener('submit', (e) => {

    e.preventDefault()

    const user = {
        userName: signIn ? undefined : userName.value,
        email: email.value,
        password: password.value,
        // confirmPass: signIn ? undefined :  confirmPass.value
    }

    // if i am in sign in page
    if (signIn) {
        // checking if the user excist before registration
        const users = JSON.parse(localStorage.getItem('users')) || []
        const existingUser = users.find((user) => user.email === email.value && user.password === password.value)

        if (existingUser) {

            const online = localStorage.setItem('onlineUser', JSON.stringify(existingUser))

            = online;
            console.log(online)
            window.location.href = '../index.html'


        } else {
            alert('Invalid Credentials');
            return;
        }

    }


    // if i am in registration side
    else {
        if (userName.value == '') {
            alert('please inter username')
            return;
        }
        if (confirmPass.value !== password.value) {
            alert('password mismatch');
            return;
        }
        const users = JSON.parse(localStorage.getItem('users')) || []

        // checking if the user excist before registration
        const existingUser = users.find((user) => user.userName === userName.value && user.email === email.value);

        if (existingUser) {
            alert(`the user ${existingUser.userName} has already registered`)
            return;
        }

        // if not
        users.push(user)

        localStorage.setItem('users', JSON.stringify(users));
        alert('User Registered Succesfully');
        switchOuthForm();
    }


})

