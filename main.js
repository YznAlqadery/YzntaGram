const mainDiv = document.getElementById("main-div");

const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];

function render(users) {
  let allPosts = "";
  for (let i = 0; i < users.length; i++) {
    let userAvatar = users[i].avatar;
    let userName = users[i].name;
    let userLocation = users[i].location;
    let userPost = users[i].post;
    let userAccount = users[i].username;
    let likes = "images/icon-heart.png";
    let comment = "images/icon-comment.png";
    let dm = "images/icon-dm.png";
    let userComment = users[i].comment;
    let userLikes = users[i].likes;
    allPosts += `<section>
    <img class='user-pfp-post' src='${userAvatar}'>
    <div class='name-loc'>
    <p class='bold username'>${userName}</p>
    <p class='location'>${userLocation}</p>
    </div>
    <img class='pic-post' src='${userPost}'>
    <div class='icons-div'>
    <img class='icon' src='${likes}'>
    <img class='icon' src='${comment}'>
    <img class='icon' src='${dm}'>
    </div>
    <p class='bold'>${userLikes} likes</p>
    <p class='bold'>${userAccount} <span>${userComment}</span></p>
    </section>
    `;
  }
  mainDiv.innerHTML += allPosts;
}
render(posts);
