//Movement Animation to happen
const card=document.querySelector('.card');
const container = document.querySelector('.container');

//items
const title = document.querySelector('.title');
const picture = document.querySelector('.picture img');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

// moving animation event
container.addEventListener('mousemove',(e) => {
    console.log(e.pageX, e.pageY);
     let xAxis = ((window.innerWidth / 2 - e.pageX)/25 );
     let yAxis = ((window.innerHeight / 2 - e.pageY)/25 );

     card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


//Animate in
container.addEventListener('mouseenter', e=>{
    card.style.transition='none';
    //popoup
    title.style.transform = "translateZ(150px)";
    picture.style.transform = "translateZ(150px) rotateZ(10deg)";
    purchase.style.transform = "translateZ(150px)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
});


//Animate out
container.addEventListener("mouseleave", (e) => {
    card.style.transition='all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popBack
    title.style.transform = "translateZ(0px)";
    picture.style.transform = "translateZ(0px) rotateZ(0deg)";
    purchase.style.transform = "translateZ(0px)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
});
