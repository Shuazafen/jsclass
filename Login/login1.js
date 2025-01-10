const tann = document.querySelector('.tann');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click',()=> {
	tann.classList.add('active');
});

loginlink.addEventListener('click',()=> {
	tann.classList.remove('active');
});
