const story = document.getElementById('story')
const form = document.querySelector('form')
const ptitle = document.getElementById('title')
const pdesc = document.getElementById('desc')
const pxogo = document.getElementById('text-area') 
const publish = document.getElementById('publish')
const contentImage = document.getElementById('content-image')



function write() {
    let info = {
        id: Date.now(), 
        title: ptitle.value,
        desc: pdesc.value,
        xog: pxogo.value,
        // outhor:onlineUser.username
        // photo: contentImage.getAttribute(src)
    }
    // console.log(info)

    
    const article = getlocalData()
    article.push(info)
    localStorage.setItem('info', JSON.stringify(article))

    // console.log(article)

}


// story.innerHTML = ` `
form.addEventListener('submit', function(event){
    event.preventDefault();

    // write()


    // addLocal()
})

publish.addEventListener('click', function () {
    write()
    getlocalData()
    // addToLocal()
    window.location.href = '../html/publishing.html'
})


// localStorage
function getlocalData() {
    const localDate = JSON.parse(localStorage.getItem('info')) || []
    return localDate
    
}