// all about writing
const write = document.getElementById('write')
function goPage() {
    window.location.href = "./html/write.html"
}
write.addEventListener('click',goPage)

// online user account information
const userAcount = document.querySelector('#online-user')

// document.addEventListener('')

function userData(){
    const userData = JSON.parse(localStorage.getItem('onlineUser'))
    const userName = userData.userName
    console.log(userName)
}
userAcount.addEventListener('click', function(){
    userData()
})

// posts reading 
const postData = document.getElementById('post')

