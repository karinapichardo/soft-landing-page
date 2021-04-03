window.onscroll = () => {
    const nav = document.querySelector('#nav-bar');
    if (this.scrollY <= 10) nav.className = '';
    else nav.className = 'scroll';
};

function responsiveSection(responsive) {
    document.querySelector('#responsive').style.display = 'block';
    document.querySelector('#mobile').style.display = 'none';
    document.querySelector('#support').style.display = 'none';
}

function mobileSection(mobile) {
    document.querySelector('#responsive').style.display = 'none';
    document.querySelector('#support').style.display = 'none';
    document.querySelector('#mobile').style.display = 'block';
}

function supportSection(support) {
    document.querySelector('#support').style.display = 'block';
    document.querySelector('#responsive').style.display = 'none';
    document.querySelector('#mobile').style.display = 'none';
}
