var sair = document.getElementById('exit');
var main = document.getElementById('main');
main.style.display = 'none'

sair.addEventListener('click', function() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none'
    main.style.display = 'block'
});