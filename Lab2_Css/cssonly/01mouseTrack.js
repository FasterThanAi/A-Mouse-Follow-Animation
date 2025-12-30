let mouseX=0;
let mouseY=0;
const cordinate=document.querySelector('#coordinates')
const pointer=document.querySelector('.pointer');

document.addEventListener('mousemove',(e)=>{
    mouseX=e.clientX;
    mouseY=e.clientY;
    // console.log(mouseX,mouseY);
    if(cordinate){
        cordinate.innerText=`x: ${mouseX} y: ${mouseY}`
    }
    pointer.style.setProperty('--mouseX',`${mouseX}px`)
    pointer.style.setProperty('--mouseY',`${mouseY}px`)
});
const button=document.querySelector('.btn')
button.addEventListener('mouseenter',()=>{
    pointer.classList.add('pointer-large')
})
button.addEventListener('mouseleave',()=>{
    pointer.classList.remove('pointer-large')
})


