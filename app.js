//movement animation
const card = document.querySelector('.card')
const container = document.querySelector('.container')

//items
const title = document.querySelector('.title');
const profile = document.querySelector('.profile img');
const contact = document.querySelector('.contact button');
const titleskills = document.querySelector('.info h2');
const description = document.querySelector('.info h3');
const skills = document.querySelector('.skills');


//moving animation event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerWidth / 2 - e.pageY) / 25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//animate in
container.addEventListener('mouseenter', (e) =>{
    card.style.transition = 'none';
    //popout
    title.style.transform = 'translateZ(150px)';
    profile.style.transform = 'translateZ(200px) rotateZ(-45deg)';
    description.style.transform = 'translateZ(125px)';
    titleskills.style.transform = 'translateZ(100px)';
    skills.style.transform = 'translateZ(100px)';
    contact.style.transform = 'translateZ(75px)';
})


//animate out
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    title.style.transform = 'translateZ(0px)';
    profile.style.transform = 'translateZ(0px) rotateZ(0deg)';
    description.style.transform = 'translateZ(0px)';
    titleskills.style.transform = 'translateZ(0px)';
    skills.style.transform = 'translateZ(0px)';
    contact.style.transform = 'translateZ(0px)';
})