const reels = [
    {
        username: "Jhon Nezz",
        isFollowed: false,
        video: "./reels/video5.mp4",
        img:"https://images.pexels.com/photos/15393590/pexels-photo-15393590.jpeg",
        description: "Where the river sings, the mountains listen.",
        likeCount: 200,
        isLiked: false,
        commentCount: 50,
        shareCount: 30
    },
    {
        username: "Sara Khan",
        isFollowed: true,
        video: "./reels/video3.mp4",
        img:"https://images.pexels.com/photos/18006815/pexels-photo-18006815.jpeg",
        description: "The forest breathes softly where the sunrise meets the mist.",
        likeCount: 540,
        isLiked: true,
        commentCount: 82,
        shareCount: 45
    },
    {
        username: "Ali Raza",
        isFollowed: false,
        video: "./reels/video4.mp4",
        img:"https://images.pexels.com/photos/31738712/pexels-photo-31738712.jpeg",
        description: "Chasing waterfalls and quiet valleys.",
        likeCount: 1200,
        isLiked: false,
        commentCount: 140,
        shareCount: 96
    },
    {
        username: "Ayesha Noor",
        isFollowed: true,
        video: "./reels/video2.mp4",
        img:"https://images.pexels.com/photos/29852852/pexels-photo-29852852.jpeg",
        description: "Twilight on the cliffs, peace in every breeze.",
        likeCount: 320,
        isLiked: true,
        commentCount: 27,
        shareCount: 12
    },
    {
        username: "Hamza Malik",
        isFollowed: false,
        video: "./reels/video1.mp4",
        img:"https://images.pexels.com/photos/26989514/pexels-photo-26989514.jpeg",
        description: "Morning dew and a long road ahead.",
        likeCount: 760,
        isLiked: false,
        commentCount: 63,
        shareCount: 38
    }
];
let reelCover = document.querySelector(".reel-cover")
function reelData(){
    let sum = ''
reels.forEach(function(elem,idx){
    sum = sum + `<div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>

                    <div class="bottom">
                        <div class="user">
                              <img class="pro-img" src="${elem.img}" alt="">
                        <h3>${elem.username}</h3>
                        <button class="f-btn">${elem.isFollowed ? "Following" : "Follow"}</button>

                        </div>
                        <p>${elem.description}</p>
                      
                        
                    </div>
                    <div class="right">
                        <div id=${idx}  class="like">
                            <h4  class="like-icon">${elem.isLiked ? `<i class=" love ri-heart-3-fill"></i>` :  `<i class="  ri-heart-3-fill"></i>`}</h4>
                            <h5>${elem.likeCount}</h5>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-message-line"></i></h4>
                            <h5>50</h5>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                            <h5>30</h5>
                        </div>
                        <div class="dot">
                            <h4 class="dot-icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                    

                </div>`

})

reelCover.innerHTML = sum;
}
reelData();

reelCover.addEventListener("click",function(dets){
    if(!(reels[dets.target.id].isLiked)){
        reels[dets.target.id].likeCount++;
    reels[dets.target.id].isLiked = true

    }else{
         reels[dets.target.id].likeCount--;
         reels[dets.target.id].isLiked = false
    }
    

    reelData();
})




