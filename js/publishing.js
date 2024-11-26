const articles = document.getElementById('articles')
const tit = document.getElementById('title')
const pdescr = document.querySelector('#desc')
const publishNow = document.getElementById('Publish-now')
document.addEventListener('DOMContentLoaded', function () {
    displayPost()
})


function displayPost() {
    const publishPosts = getlocalData()
    console.log(publishPosts)
    for (let publishPost of publishPosts){
        console.log(publishPost.xog)
        console.log(publishPost.desc)
        tit.textContent = publishPost.title
        pdescr.value = publishPost.desc
    }

    // console.log(publishPosts)
    // articles.innerHTML = ''
    // publishPost.forEach((article) => {
    // });

}
// updateLocal = (id, edit) => {
//     const up = getlocalData()
// }
publishNow.addEventListener('click',() =>{
    window.location.href = '../index.html'
})

// localStorage
function getlocalData() {
    const localDate = JSON.parse(localStorage.getItem('info')) || []
    return localDate

}
