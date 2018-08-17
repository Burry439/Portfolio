
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
'Angular Social', 

'is a Single-Page-App That Enables Users to join events in there area or create events For others to join. It is Built on the MEAN stack and uses several free API’s including Google maps and Angular Material. ', 

'The classic simon says game . Web-app that uses the Angular.js frontend  framework to  create an fun and interactive game. The app uses JavaScript/HTML5/CSS3/Angularjs', 

'Traveler​ is a SPA (Single-Page-App) That enables travelers around the world to connect to other  travelers and join them on location based events.The app uses various google api to make it    interactive and visually attractive. React.js is used as the front-end framework with HTML5/CSS3/ Bootstrap.The back-end  is built with Node.js and Express using the MongoDb database. ',

 ' is a full-stack web app that helps students in the class to schedule  help request  from the teaching assistance.The project uses JavaScript/HTML5/CSS3/Jquery for the client side  for the server side the project use Node.js/Express with MongoDb as a database,and Socket.io  for the communication between the users.'
]


var modal = document.getElementById('myModal');

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


var p = document.getElementById("modalText");


// When the user clicks on the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
//     p.innerHTML = "yoyoyoy"
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

openModal = (index)=>{
    modal.style.display = "block";
    p.innerHTML = modalText[index]
}