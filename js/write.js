const story = document.getElementById('story')
const form = document.querySelector('form')
const ptitle = document.getElementById('title')
const pdesc = document.getElementById('desc')
const pxogo = document.getElementById('text-area') 
const publish = document.getElementById('publish')
const contentImage = document.getElementById('content-image')



function calling() {
    let info = {
        title: ptitle.value,
        // desc: pdesc.value,
        xog: pxogo.value,
        // photo: contentImage.getAttribute(src)



    }
    console.log(info)

    const localDate = JSON.parse(localStorage.getItem('info')) || []

    localDate.push(info)

    localStorage.setItem('info', JSON.stringify(localDate))

}
// function write(){

// }

// write()
// const posts = info.map((post) => title)
// function addLocal() {
//     const localDate = JSON.parse(localStorage.getItem('info')) || []

//     localDate.push()

//     localStorage.setItem('info', JSON.stringify(localDate))
// }
// console.log()


// story.innerHTML = ` `
form.addEventListener('submit', function(event){
    event.preventDefault();

    calling()
    // addLocal()
})

