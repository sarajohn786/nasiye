// API
const accessKey = "X3QWVMt9MkRwG6S2p365l5ehIthsaoVZ6cQJvXVPi5A"

const form = document.getElementById('form')
const searchInput = document.getElementById('search-input')
const photos = document.getElementById('search-results')

// let keyWord = " "
let page = 1;
const query = 'office'
keyWord = searchInput.value
async function fetchImages(){

    const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${accessKey}&per_page= 12`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new error(`http response: ${response.status}`)
        }
        const data = await response.json()
        const results = data.results
        console.log(results)
        if(!Array.isArray(results)){
            throw new error('not expected')
        }
        
        results.map(photo => {
            const image = document.createElement("img")
            
            image.src = photo.urls.small
            photos.appendChild(image)
            // console.log(photo.urls.small)

            

        });
        searchInput.value = ""

    } catch (error) {
        console.log(error)
    }

}
// function searchImage(){
//     const query = document.getElementById('search-input').value
//     fetchImages(query)
// }

form.addEventListener('submit', (event) => {
    event.preventDefault()
    page = 1;

    fetchImages()

})









// const form = document.getElementById('form')
// const searchInput = document.getElementById('search-input')
// const searchResult = document.querySelector('search-result')
// const showMore = document.getElementById('show-more')
// const showMore = document.getElementById('')


// let inputData = "" 
// let page = 1

// async function searchImages(){
//     inputData = searchInput
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    // 200 OK
// Link: <https://api.unsplash.com/search/photos?page=1&query=office>; rel="first", <https://api.unsplash.com/search/photos?page=1&query=office>; rel="prev", <https://api.unsplash.com/search/photos?page=3&query=office>; rel="last", <https://api.unsplash.com/search/photos?page=3&query=office>; rel="next"
// X-Ratelimit-Limit: 1000
// X-Ratelimit-Remaining: 999

    // const response = await fetch(url)
    // const data = await response.json()

    // const results = data.results
    // console.log(results)

    // if(page == 1){
    //     searchResult.innerHTML = ''
    // }

    // searchResult.innerHTML = ''
    // results.map((results) => {
    //     const imageWrapper = document.createElement('div')
    //     imageWrapper.classList.add('search-results')
    //     const image = document.createElement('img')
    //     image.src = results.urls.small
    //     image.alt = results.alt_discription
    //     const imageLink = document.createElement('a')
    //     imageLink.href = results.links.html
    //     imageLink.target = "_blank"
    //     imageLink.textContent = results.alt_discription

    //     imageWrapper.appendChild(image)
    //     imageWrapper.appendChild(imageLink)
    //     // searchResult.appendChild(imageWrapper)  


    // })

    // page++;
    // if(page > 1){
    //     showMore.style.display = 'block'
    // }

// }

// form.addEventListener('submit',(event) => {
//     event.preventDefault()
//     page = 1;

//     searchImages()

// })

// // showMore.addEventListener('submit', (e) => {
// //     searchImages()
// // })







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
    // for (let publishPost of publishPosts){
    //     console.log(publishPost.xog)
    //     console.log(publishPost.desc)
        
    // }

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