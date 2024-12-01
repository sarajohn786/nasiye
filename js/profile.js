
const userAcount = document.getElementById('online-user')
const user = document.getElementById('user-name')
const email = document.getElementById('email')
const nameAcc = document.getElementById('userNameText')
function userData() {
    const users = getLocalData()
    const userName = users.userName
    const userEmail = users.email
    // console.log(userName)
    
    user.textContent = userName
    email.textContent = userEmail

    // user.classList.add('user-information')
    toggleMenu()
}

let subMenu = document.getElementById('subMenu')
function toggleMenu() {
    subMenu.classList.toggle("open-menu");

}
userAcount.addEventListener('click', function () {
    userData()
    toggleMenu()

})
nameAcc.textContent = userName
document.addEventListener('DOMContentLoaded',function(){
    // userData()
    
})


function getLocalData(){
    const online = JSON.parse(localStorage.getItem('onlineUser'))
    // console.log(online)
    return online
}



function getPosts(){
    const posts = JSON.parse(localStorage.getItem('info'))
    console.log(posts)
}
getPosts()