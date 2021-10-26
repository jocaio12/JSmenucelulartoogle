/*function abrirmenu() {
    if(document.querySelector('#menu-area').classList == 'open') {
    document.querySelector('#menu-area').classList.remove('open')
    document.querySelector('#menu-area').classList.add('close');
    } else {
    document.querySelector('#menu-area').classList.remove('close');
    document.querySelector('#menu-area').classList.add('open');
    }    
}
*/

function abrirmenu() {
    let menuArea = document.querySelector('#menu-area');

    if(menuArea.classList.contains('open') == true) {
        menuArea.classList.remove('open');
    } else {
       menuArea.classList.add('open');
    }
}
