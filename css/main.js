const switchElement = document.querySelector('.switch');
let mapImg = document.querySelector('#map-img');
let githubImg = document.querySelector('#github-img');
let linkedImg = document.querySelector('#linkedin-img');
let gitImg = document.querySelector('#git-img');
let tastyImg = document.querySelector('#tasty-img');
let adminImg = document.querySelector('#admin-img');



let toggle = true;

//when clicking toggle-button
switchElement.addEventListener('click', () =>{
    //toggles light mode
    document.body.classList.toggle('light');

    //toggles imgs 
    toggle = !toggle;
    if(toggle){
        mapImg.src = './assests/imgs/map_light.png';
        githubImg.src = './assests/imgs/imgs/github_white.png';
        linkedImg.src = './assets/imgs/linkedin_white.png';
        gitImg.src = './assests/imgs/git_white.png';
        
    }else{
        mapImg.src = './assets/imgs/map.png';
        githubImg.src = './assets/imgs/github_.png';
        linkedImg.src = './assets/imgs/linkedin.png';
        gitImg.src = './assets/imgs/git_white.png';
    }
})

//Switches Pages
window.onload = () => {
    const tab_switchers = document.querySelectorAll('[data-switcher');

    for (let i = 0; i < tab_switchers.length; i++) {
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;

        tab_switcher.addEventListener('click', () => {
            document.querySelector('.tabs .tab.active').classList.remove('active');
            tab_switcher.parentNode.classList.add('active');

            Switchpage(page_id);
        });

    }

}
//Switches Pages
function Switchpage (page_id){
    const current_page = document.querySelector('.pages .page.active');
    current_page.classList.remove('active');

    const next_page = document.querySelector(`.pages .page[data-page="${page_id}"]`)
    next_page.classList.add('active');

}


//Send Email function
Email.send({
    Host : "smtp.yourisp.com",
    Username : "dangelo.watson1212@gmail.com",
    Password : "Jaida137#!",
    To : 'dangelo.watson1212@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "And this is the body"
}).then(
  message => alert(message)
);

