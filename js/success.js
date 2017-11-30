window.onload=function(){
    var restartB;

    restartB = document.getElementById('success');

    if (restartB) {
        restartB.addEventListener('click', function (e) {
            console.log("aha~");
            window.open('index.html', '_self');
        })
    }
    else console.log('unsuccess');
};