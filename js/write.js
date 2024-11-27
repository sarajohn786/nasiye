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



// Adding rich text editor related js
// let toolbaroptions = [
//     ["bold", "italic", "underline", "strike"],
//     [ {header:[1,2,3,4,5,6,false]}],
//     [{list:"ordered",list:"bullet"}],
//     [{script:"sub"},{script:"super"}],
//     [{indent:"+1"},{indent:"-1"}],
//     [{size:["small","large","huge", false]}],
//     [{align:[]}],
//     ["image","link","video","formula"],
//     [{color:[]},{background:[]}],
//     [{font:[]}],
//     ["code-block", "blockquote"]

// ]

// let quill = new Quill('#editor', {
//     modules: {
//         toolbar: toolbaroptions,
//     },
//     theme: 'snow'
// });




// :: dhbic kusoo bandhig toolpar ka oo qurxi i.a