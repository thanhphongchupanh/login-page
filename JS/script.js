const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');

const iconClose = document.querySelector('.icon-close');


// == Changing from Login form to Register form and reverse ==
registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
}); 

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

// Changing from Login form to Register form and reverse 


// == Pop up form-box ==
 btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
 });

 iconClose.addEventListener('click', ()=>{
    wrapper.classList.remove('active-popup');
 });
// Pop up form-box 















// const menu = document.querySelector(".navigation");
// const menuButton = document.querySelector(".navbar_icons");
// const overlay = document.querySelector("#overlay");


// làm cho nút button nghe được động tác Click của User
// tạo class mới để qua Css lại để hiển thị lên màn hình
//toggle: chuyển đổi, classList: tạo class
// menuButton.addEventListener('click', ()=>{
//     menu.classList.toggle("navigation_open");
//     menuButton.classList.toggle("open");
//     overlay.classList.toggle("show");
// })

// overlay.addEventListener('click', ()=>{
//     menu.classList.toggle("navigation_open");
//     menuButton.classList.toggle("open");
//     overlay.classList.toggle("show");
// })

