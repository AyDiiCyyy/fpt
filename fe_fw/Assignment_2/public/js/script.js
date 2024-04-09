// const navContainer = document.querySelector('.nav-container');
// const submenus = document.querySelectorAll('.sub-menu');
// const arrows = document.querySelectorAll('.arrow');

// const navMenuDefault = () => {
//     submenus.forEach(sub => {
//         sub.classList.remove('active');
//     });

//     arrows.forEach(arr => {
//         arr.innerHTML = '<i class="fa-solid fa-chevron-right text-secondary"></i>';
//     });

// };

// navContainer.addEventListener('click', e => {
//     const clicked = e.target.closest('.nav_tab');
//     if (!clicked) return;

//     let dataTab = clicked.dataset.tab;

//     let arrow = document.querySelector(`.arrow--${dataTab}`);
//     let submenu = document.querySelector(`.sub_menu--${dataTab}`);

//     if (!submenu.classList.contains('active')) {

//         navMenuDefault();

//         submenu.classList.add('active');
//         arrow.innerHTML = '<i class="fa-solid fa-chevron-down text-secondary"></i>';
//     }
//     else {
//         navMenuDefault();
//     }

// })
