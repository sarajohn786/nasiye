const article = document.getElementById('article')
const like = document.getElementById('like')
const likeCounter = document.getElementById('count')

const params = new URLSearchParams(window.location.search);
const id = params.get("id");


function stories(id) {
    const stories = getLocalDate()
  

    const findIndex = stories.find((info) => info.id == id)
    // console.log(findIndex)
    return findIndex
}



AddTaskToDom = () => {

    // displaying article to the dom by using the id of the article was clicked
    const story = stories(id)
    const div = document.createElement('div')
    div.dataset.id = story.id
    div.innerHTML = `
            <div class="article" id="article">
                <h1>${story.title}</h1>
                <p>${story.desc}</p>
                <div class="user">
                    <i class="bi bi-person-circle" id="online-user" itemid="profile"></i>
                </div>
                <textarea readonly>${story.xog}</textarea>

            </div>
        `
    console.log(div)
    article.appendChild(div)
}


// liking the article

let count = 0
like.addEventListener('click', function(){
    count++;
    likeCounter.textContent = count
    
})

function likes(){
    let count = 0

}










getLocalDate = () => {
    const articles = JSON.parse(localStorage.getItem('info')) || [];
    // console.log(articles)
    return articles
}


document.addEventListener('DOMContentLoaded', () => {

    AddTaskToDom()
})