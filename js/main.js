// getting everything i need from the document
const write = document.getElementById('write')
const userAcount = document.querySelector('#online-user')
const postData = document.getElementById('post')
const title = document.getElementById('title')
const desc = document.getElementById('desc')
const adding = document.getElementById('classic')
const conent = document.getElementById('content')




// all methods
// all about writing and going the page that allows users to write everything they want

function goPage() {
    window.location.href = "./html/write.html"
}
write.addEventListener('click', goPage)

// online user account information
function userData() {
    const userData = JSON.parse(localStorage.getItem('onlineUser'))
    const userName = userData.userName
    console.log(userName)
}

// posts reading 



function addTaskToDom() {

    const writtens = getlocalData()
    console.log(writtens)


    // adding.innerHTML = ''
    for (let write of writtens) {
        // console.log(write.xog)
        const div = document.createElement('div')
        // div.className = 'posts'
        // div.className = 'content'
        div.dataset.id = write.id
        div.innerHTML = ` <div class="posts" id="post">
            <div class="content" id="content">
                <div class="user">
                    <i class="bi bi-person-circle" id="online-user" itemid="profile"></i>
                    <p id="user-info"></p>
                </div>
                <div class="info">
                    <h2 id="title">${write.title}</h2>
                    <p id="desc">${write.desc}</p>
                </div>
                <div class="additional">
                    <span id="date"></span>
                    <div class="like">
                        &#x1F44F
                        <span id="count">456</span>
                    </div>
                    <div class="comment">
                        <i class="bi bi-chat-fill"></i>
                        <span id="comment-counter">45</span>
                    </div>
                </div>
            </div>
            <!-- <div class="post-image"><img src="" alt=""></div> -->
            <div class="content-image" id="content-image">
                <img src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*G2L3gIWKVvtqTOTW9-vSCw@2x.jpeg" alt="">
            </div>
        </div>
        <hr id="line">
        `
        adding.appendChild(div)

        // getting the id to navigate another page
        function showMe() {
            const stroies = getlocalData()
            console.log(stroies)

            const findIndex = stroies.find((info) => info.id == div.dataset.id)
            // console.log(info.id)
            console.log(findIndex)

            if (findIndex) {

                // console.log(info.id)
                // localStorage.setItem('articleId',)
                window.location.href = `./html/read.html?id=${findIndex.id}`

            }
        }
        div.addEventListener('click', () => {
            showMe()
            // const r = div.dataset.id
            // console.log(r)
            // if (e.target.id == div.dataset.id){
            //     window.location.href = './html/read.html'
            // }
            //  
            // window.location.href = './html/read.html'
        })

    }


}


// all events


userAcount.addEventListener('click', function () {
    userData()

})




getlocalData = () => {
    const localDate = JSON.parse(localStorage.getItem('info')) || [];
    return localDate;
    // console.log(localDate)
}
document.addEventListener('DOMContentLoaded', () => {
    addTaskToDom()
})