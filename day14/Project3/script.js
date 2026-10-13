const persons = [
    {
        fullname: "Ali Khan",
        profession: "Web Developer",
        img: "https://randomuser.me/api/portraits/men/1.jpg",
        description: "Builds fast and responsive websites using React and Node.js.",
        tags: ["React", "Node.js", "Frontend"]
    },
    {
        fullname: "Sara Ahmed",
        profession: "UI/UX Designer",
        img: "https://randomuser.me/api/portraits/women/2.jpg",
        description: "Designs clean and user-friendly interfaces for web and mobile apps.",
        tags: ["Figma", "UI", "UX"]
    },
    {
        fullname: "Usman Tariq",
        profession: "Graphic Designer",
        img: "https://randomuser.me/api/portraits/men/3.jpg",
        description: "Creates logos, posters, and brand identities that stand out.",
        tags: ["Logo", "Branding", "Photoshop"]
    },
    {
        fullname: "Ayesha Malik",
        profession: "Content Writer",
        img: "https://randomuser.me/api/portraits/women/4.jpg",
        description: "Writes engaging blogs and website copy that connect with readers.",
        tags: ["Writing", "SEO", "Blogging"]
    },
    {
        fullname: "Hamza Raza",
        profession: "Video Editor",
        img: "https://randomuser.me/api/portraits/men/5.jpg",
        description: "Edits reels, YouTube videos, and promos with smooth transitions.",
        tags: ["Premiere Pro", "Reels", "Editing"]
    }
];

let sum = 0;
let main = document.querySelector("main")
persons.forEach(function(elem){
   sum = sum + `<div class="card">
            <div class="imgbox"><img src="${elem.img}" alt=""></div>
            <h2>${elem.fullname}</h2>
            <h4>${elem.profession}</h4>
            <p>${elem.description}</p>
        </div>`

})
main.innerHTML = sum;