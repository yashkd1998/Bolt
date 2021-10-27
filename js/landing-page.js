let dest=new Date("30 jan,2022 00:00:00").getTime();

let x=setInterval(()=>{
let now=new Date().getTime();
let difference=dest - now;
console.log(difference);
let days=Math.floor(difference/(24*60*60*1000));
console.log(days);
let hours=Math.floor((difference% (1000 *60*60*24)) / (1000*60*60));
console.log(hours);
let minutes=Math.floor((difference% (1000 *60*60)) / (1000 *60));
console.log(minutes);
let seconds=Math.floor((difference% (1000 *60)) / (1000));
console.log(seconds);

document.getElementById('days').innerHTML=days;
document.getElementById('hours').innerHTML=hours;
document.getElementById('minutes').innerHTML=minutes;
document.getElementById('seconds').innerHTML=seconds;
},1000);

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});

const toggle=()=>{
   const nav=document.getElementById('navigation-list');
   if(nav.style.display === 'flex'){
           nav.style.display='none';
   }else{
    nav.style.display='flex';
   } 
}