window.onload=function(){
    var restartB,
        moves,
        stars,
        time;
    restartB=document.getElementById('success');
    moves=document.getElementById('moves');
    stars=document.getElementById('stars');
    time=document.getElementById('time');
    moves.innerHTML=localStorage.getItem("moves1");
    stars.innerHTML=localStorage.getItem("stars1");
    time.innerHTML=localStorage.getItem("time1");
    if (restartB) {
        restartB.addEventListener('click', function (e) {
            window.open('index.html', '_self');
        })
    }
    else console.log('unsuccess');
};