const header=document.getElementById('header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20));
const menu=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menu.addEventListener('click',()=>{
  const open=menu.getAttribute('aria-expanded')==='true';
  menu.setAttribute('aria-expanded',String(!open));
  if(!open){
    nav.style.display='flex'; nav.style.position='absolute'; nav.style.top='72px'; nav.style.left='0'; nav.style.right='0';
    nav.style.flexDirection='column'; nav.style.background='#f7f7f4'; nav.style.padding='22px 5.5%'; nav.style.borderBottom='1px solid #ddd';
  }else nav.style.display='';
});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.style.display='';menu.setAttribute('aria-expanded','false')}));
