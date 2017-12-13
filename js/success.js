window.onload=function(){
    var restartB;
    if (restartB) {
        restartB.addEventListener('click', function (e) {
            window.open('index.html', '_self');
        })
    }
    else console.log('unsuccess');
};