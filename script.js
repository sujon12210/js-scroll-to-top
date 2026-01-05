const btn = document.getElementById('topBtn');

window.addEventListener('scroll', ()=>{
  if(window.scrollY > 300){
    btn.style.display = 'block';
  }else{
    btn.style.display = 'none';
  }
});

function goTop(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
