const posts = [
    // {
    //     name: "Vincent van Gogh",
    //     username: "vincey1853",
    //     location: "Zundert, Netherlands",
    //     avatar: "images/avatar-vangogh.jpg",
    //     post: "images/post-vangogh.jpg",
    //     comment: "just took a few mushrooms lol",
    //     likes: 21
    // },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
let containerEl = document.getElementById("container")
for (let i = 0; i < posts.length; i++){
    let post = document.createElement("post")
    post.classList.add("vertical-flex")

    let post_section = document.createElement("post_section")
    post_section.classList.add("horizontal-flex")

    let avatarEl = document.createElement("img")
    avatarEl.src = posts[i].avatar
    avatarEl.classList.add("user-avatar")

    let poster_info = document.createElement("poster_info")

    
    let user_name = document.createElement("span")
    user_name.classList.add("strong")
    user_name.textContent = posts[i].name

    let location = document.createElement("span")
    location.textContent = posts[i].location

    poster_info.appendChild(user_name)
    poster_info.appendChild(location)

    post.appendChild(post_section)
    post_section.appendChild(avatarEl)
    post_section.appendChild(poster_info)

    post.appendChild(new Image()).src = posts[i].post

    let iconsEl = document.createElement("icons")
    iconsEl.classList.add("horizontal-flex")
    iconsEl.appendChild(new Image()).src = "images/icon-heart.png"
    iconsEl.appendChild(new Image()).src = "images/icon-comment.png"
    iconsEl.appendChild(new Image()).src = "images/icon-dm.png"

    let likesCountEl = document.createElement("like_count")
    likesCountEl.classList.add("strong")
    likesCountEl.textContent = `${posts[i].likes} likes`

    let usernameCaptionEl = document.createElement("username_caption")
    let usernameEl = document.createElement("span")
    usernameEl.textContent = posts[i].username
    usernameEl.classList.add("strong")

    usernameCaptionEl.appendChild(usernameEl)
    usernameCaptionEl.innerHTML += ` ${posts[i].comment}`

    let post_body = document.createElement("post_section")
    post_body.appendChild(iconsEl)
    post_body.appendChild(likesCountEl)
    post_body.append(usernameCaptionEl)
    
    post.appendChild(post_body)
    
    containerEl.append(post)

}
// window.alert("hello")