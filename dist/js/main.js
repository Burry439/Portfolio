
const menuBtn = document.querySelector('.menu-btn') 
const menu = document.querySelector('.menu') 
const menuNav = document.querySelector('.menu-nav') 
const menuBranding = document.querySelector('.menu-branding') 

const navItems = document.querySelectorAll('.nav-item')

let showMenu = false;

toggleMenu = () =>{
   if(!showMenu)
   {
       menuBtn.classList.add('close')
       menu.classList.add('show')
       menuNav.classList.add('show')
       menuBranding.classList.add('show')
       navItems.forEach(item => item.classList.add('show'))

       showMenu = true;
   }
   else
   {
    menuBtn.classList.remove('close')
    menu.classList.remove('show')
    menuNav.classList.remove('show')
    menuBranding.classList.remove('show')
    navItems.forEach(item => item.classList.remove('show'))

    showMenu = false;
   }
}

menuBtn.addEventListener('click', toggleMenu)



/////////////////////////////modal//////////////////////



modalText = [
'Angular Social is a social media SPA (Single-Page-App) built using the MEAN Stack, It uses Socket.io so users can see in real time status updates, get notified when someone comments on there post and even allows users to see who is currently online and Direct message each other', 

'Angular Events is a MEAN Stack SPA (Single-Page-App) That Enables Users to join events in there area or create events For others to join. It uses Google maps so you can Search for Events in your area', 

'Stick Adventure Demo is just the first level of 2D platformer i am currently working on, It is built with the Unity engine and is written in C#',

'Simon Says is the classic simon says game that uses the Angular.js frontend framework to create an fun and interactive game. The app uses JavaScript/HTML5/CSS3/Angularjs.', 

"Traveler​ is a SPA (Single-Page-App) That enables travelers around the world to connect to other  travelers and join them on location based events.The app uses various google api's to make it interactive and visually attractive. React.js is used as the front-end framework with HTML5/CSS3/ Bootstrap.The back-end  is built with Node.js and Express using the MongoDb database.",

 'Get Inline is a full-stack web app that helps students in the class to schedule help from the teaching assistance.The project uses JavaScript/HTML5/CSS3/Jquery for the client side for the server side the project use Node.js/Express with MongoDb as a database,and Socket.io  for the communication between the users.'
]


var modal = document.getElementById('myModal');



var span = document.getElementsByClassName("close")[0];


var p = document.getElementById("modalText");



span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

openModal = (index)=>{
    modal.style.display = "block";
    p.innerHTML = modalText[index]
}



////////////image modal/////////////////////




// var images = 
// [
//     "http://res.cloudinary.com/dude439/image/upload/c_scale,h_550,w_250/v1534509557/project%20screenshots/angular-social.png",
//     "http://res.cloudinary.com/dude439/image/upload/c_scale,h_250,w_250/v1534509558/project%20screenshots/angular-events.png",
//     "http://res.cloudinary.com/dude439/image/upload/c_scale,h_250,w_250/v1534514097/project%20screenshots/stick_adventure_demo.png",
//     "http://res.cloudinary.com/dude439/image/upload/c_scale,h_250,w_250/v1534509557/project%20screenshots/simon-says.png",
//     "http://res.cloudinary.com/dude439/image/upload/c_scale,h_250,w_250/v1534509566/project%20screenshots/traveler.png",
//     "http://res.cloudinary.com/dude439/image/upload/c_scale,h_250,w_250/v1534509558/project%20screenshots/get-in-line.png"
// ]

// var imgModal = document.getElementById('imgModal');

// var img  = document.getElementById("imgSrc")

// span.onclick = function() {
//     imgModal.style.display = "none";
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         imgModal.style.display = "none";
//     }
// }

// openImgModal = (index)=>{
//     console.log("yoyoyoy")
//     imgModal.style.display = "block";
//     img.src = images[index]
// }