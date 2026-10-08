'use strict';
// Content is rendered into each HTML file; JavaScript only enhances navigation.
const toggle=document.querySelector('.nav-toggle');
const navigation=document.getElementById('main-nav');
function closeNavigation(focus=false){if(!navigation||!toggle)return;navigation.classList.remove('open');toggle.setAttribute('aria-expanded','false');if(focus)toggle.focus();}
if(toggle&&navigation){
  toggle.addEventListener('click',()=>{const open=navigation.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&navigation.classList.contains('open'))closeNavigation(true);});
  document.addEventListener('click',event=>{if(!navigation.contains(event.target)&&!toggle.contains(event.target))closeNavigation();});
  navigation.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>closeNavigation()));
  window.matchMedia('(min-width:681px)').addEventListener('change',event=>{if(event.matches)closeNavigation();});
}
