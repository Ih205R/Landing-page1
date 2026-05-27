const btnHome = document.getElementById('btn-home');
const btnAbout = document.getElementById('btn-about');
const btnServcies = document.getElementById('btn-services');
const btnContact = document.getElementById('btn-contact');
const btnFacebook = document.querySelector('.btn-facebook');
const btnLinkedin = document.querySelector('.btn-linkedin');
const btnInstagram = document.querySelector('.btn-instagram');

btnAbout.onmouseover = function(el) {
    el.target.classList.add('true');
    el.target.classList.remove('false');
}

btnAbout.onmouseout = function(el) {
    el.target.classList.remove('true');
    el.target.classList.add('false');
}

btnServcies.onmouseover = function(el) {
    el.target.classList.add('true');
    el.target.classList.remove('false');
}

btnServcies.onmouseout = function(el) {
    el.target.classList.remove('true');
    el.target.classList.add('false');
}

btnContact.onmouseover = function(el) {
    el.target.classList.add('true');
    el.target.classList.remove('false');
}

btnContact.onmouseout = function(el) {
    el.target.classList.remove('true');
    el.target.classList.add('false');
}

btnFacebook.onmouseover = function(el) {
    console.log(el.target.classList.add('hovered'));
}