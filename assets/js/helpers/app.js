document.addEventListener('DOMContentLoaded', ()=>{
    const swictherTheme = document.querySelector('.navbar__toggle--darkmode-input');
    const root = document.documentElement;

    if(root.getAttribute('data-theme') === 'dark'){
        swictherTheme.checked = true;
    }

    swictherTheme.addEventListener('click', toogletheme);

    function toogletheme() {
        const setTheme = swictherTheme.checked ? 'dark' : 'light' ;

        root.setAttribute('data-theme', setTheme);
        localStorage.setItem('theme', setTheme);
    }
});