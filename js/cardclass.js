/*
*Card构造函数
 */
function Card(cardStyle,greyCard,box,cards,text) {
    this.cardStyle=cardStyle; //多彩多色的卡片样式
    this.greyCard=greyCard; //灰色的卡片样式
    this.record=true;   //记录是否是一次匹配行为的第一次点击，true表示一次匹配行为中的第一次点击，false表示第二次
    this.box=box;   //外面的ul
    this.cards=cards;   //一系列的卡片
    this.lastone={}; //记录上一个点击的卡片对象
    this.moves=0;//记录已经点击的次数
    this.text=text;
    this.overturn=0;//记录所有卡片是否被成功翻转，一开始只有0张牌翻转
}

Card.prototype.overturnGrey=overturnGrey;


/*
*全部翻转成灰色面
 */
function overturnGrey(time,cardIns) {
    cardIns.overturn=0;
    cardIns.lastone={};
    setTimeout(function () {
        for (var i = 0; i < cardIns.cards.length; i++) {
            cardIns.cards[i].className = cardIns.greyCard + " animated flipInX";
        }
    }, time);

}


/*
*具体的检查函数，检查是否与上一个牌面匹配，如果不匹配，则全部牌面翻转成灰色
* 还要检查一下是否是点击在ul上，点击ul为无效
 */
function check() {
    var event = event || window.event;
    var target = event.target;
    if(target.tagName.toLowerCase()!="ul"){
             // console.log(target.tagName.toLowerCase());
            var id = parseInt($(target).index());
            var lastone = this.lastone;

            //move的变化
            this.moves++;
            // console.log(this.moves);
            starStyle(this.moves);
            this.text.innerHTML=this.moves.toString();

            target.className = this.cardStyle[id] + " animated flipInY";

            if (this.record) {
                this.lastone = target;
                this.record = false;
            }
            else {
                if (target.className == lastone.className) {
                    this.overturn+=2;
                    // console.log("overturn is"+this.overturn);

                }
                else {
                    target.className += "animated shake";
                    this.lastone.className += "animated shake";

                    overturnGrey(1000,this);
                 }

                this.record = true;

            }
                //overturn值的改变，当overturn值等于16时，表示16张卡片都翻转了过来
                if(this.overturn==2){
                    localStorage.setItem("time1",time[0].toString());
                    localStorage.setItem("moves1",this.moves.toString());
                    console.log("16 steps");
                    window.open("success.html",'_self');
                }
        }

}

//改变星星的样式
function starStyle(moves) {
    var top=document.getElementById('top');
    var stars=document.getElementsByTagName('span');
    switch (moves){
        case 8:
            stars[2].setAttribute("class","fa fa-star-o");
            localStorage.setItem("stars","2");
            break;
        case 16:
            stars[1].setAttribute("class","fa fa-star-o");
            localStorage.setItem("stars","1");
            break;
        case 24:
            stars[0].setAttribute("class","fa fa-star-o");
            localStorage.setItem("stars1","0");
            break;
        default:
            localStorage.setItem("stars1","0");
    }
}