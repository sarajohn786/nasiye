const article = document.getElementById('article')
const container = document.getElementsByClassName('container')
const params = new URLSearchParams(window.location.search);
const id = params.get("id");


function stories(id) {
    const stories = getLocalDate()
  

    const findIndex = stories.find((info) => info.id == id)
    // console.log(findIndex)
    return findIndex
}



AddTaskToDom = () => {
    // const stroies = getLocalDate()
    // console.log(stroies)

    const story = stories(id)
    // function showMe(){

    // }

    // for (let story of stroies){
    //     // console.log(story)
    //     const hold = document.createElement('article')
    //     hold.className = 'article'
    //     hold.dataset.id = stroies[0].id
    //     hold.innerHTML = `<h1></h1>
    //         <p></p>

    //         <textarea></textarea>

    //     `
    //     // for (const key in story) {
    //     //     console.log(story[key])
    //     // }
    // }



    // const hold = document.createElement('div')
    // hold.dataset.id = stroies[0].id

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

    // stroies.forEach(story => {



    // })
    // for (let story of stroies) {
    //     // console.log(story.id)
    //     const div = document.createElement('div')
    //     div.dataset.id = story.id
    //     div.innerHTML = `
    //         <div class="article" id="article">
    //             <h1>${story.title}</h1>
    //             <p>${story.desc}</p>
    //             <div class="user">
    //                 <i class="bi bi-person-circle" id="online-user" itemid="profile"></i>
    //             </div>
    //             <p>${story.xog}</p>

    //         </div>
    //     `
    //     console.log(div)
    //     article.appendChild(div)


    // }
}




getLocalDate = () => {
    const articles = JSON.parse(localStorage.getItem('info')) || [];
    // console.log(articles)
    return articles
}


document.addEventListener('DOMContentLoaded', () => {

    AddTaskToDom()
})