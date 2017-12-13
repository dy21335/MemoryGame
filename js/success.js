window.onload=function(){
    var restartB,
        moves,
        stars;
    restartB=document.getElementById('success');
    moves=document.getElementById('moves');
    stars=document.getElementById('stars');
    console.log(localStorage.getItem("moves1"));
    moves.innerHTML=localStorage.getItem("moves1");
    stars.innerHTML=localStorage.getItem("stars1");
    if (restartB) {
        restartB.addEventListener('click', function (e) {
            window.open('index.html', '_self');
        })
    }
    else console.log('unsuccess');
};