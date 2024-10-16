
var e = document.querySelectorAll('.drum');
for ( var i = 0; i < e.length; i++) {
    
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        var innerHtml = this.innerHTML;
        makeSound(innerHtml);
        addAnimation(innerHtml);
    })
}

document.addEventListener('keydown', function(event) {
    makeSound(event.key)
    addAnimation(event.key);
});
function makeSound(key) {
    switch (key) {
        case 'w':
            var aud1 = new Audio('sounds/crash.mp3');
            aud1.play(); 
        break;
        case 'a':
            var aud2 = new Audio('sounds/kick-bass.mp3');
            aud2.play(); 
        break;
        case 's':
            var aud2 = new Audio('sounds/snare.mp3');
            aud2.play(); 
        break;
        case 'd':
            var aud2 = new Audio('sounds/tom-1.mp3');
            aud2.play(); 
        break;
        case 'j':
            var aud2 = new Audio('sounds/tom-2.mp3');
            aud2.play(); 
        break;
        case 'k':
            var aud2 = new Audio('sounds/tom-3.mp3');
            aud2.play(); 
        break;
        case 'l':
            var aud2 = new Audio('sounds/tom-4.mp3');
            aud2.play(); 
        break;
    
        default:
            console.log(key);
            break;
    }
}
function addAnimation(currentKey) {
    var pressedKey = document.querySelector('.'+ currentKey);
    pressedKey.classList.add('pressed');
    setTimeout(function(){
        pressedKey.classList.remove('pressed');
    }, 1000);
    
    console.log(pressedKey);
}