var p = document.getElementsByClassName('preloader-box');
p[0].style.animation = 'rotate 1.5s ease-in-out infinite';
p[1].style.animation = 'rotate 1.5s cubic-bezier(0.23, 0.03, 0.77, 1) infinite';
p[2].style.animation = ' rotate 1.5s linear infinite';


const loading = document.querySelector('.preloader');
const content = document.querySelector('#content');
content.style.display = 'none';
setTimeout(() => {
  content.style.display = 'block';
    loading.style.display = 'none';
    }, 3000)
    
