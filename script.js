window.onscroll = () => {
    const nav = document.querySelector('#nav-bar');
    if (this.scrollY <= 10) nav.className = '';
    else nav.className = 'scroll';
};
