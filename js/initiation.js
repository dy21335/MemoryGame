window.onload = function () {

    window.card_style = [],//多彩card图
    window.card_grey;//灰色card图
    window.lastone;//记录上一个点击的card元素，方便做对比
    window.record = true;//true表示一次配对行为的第一次点击，false表示第二次点击

    card_style = [" ", "a_overturn_1 fa fa-bomb",
        "a_overturn_2 fa fa-building",
        "a_overturn_3 fa fa-car",
        "a_overturn_4 fa fa-codepen",
        "a_overturn_5 fa  fa-cube",
        "a_overturn_6 fa fa-cubes",
        "a_overturn_7 fa fa-database",
        "a_overturn_8 fa fa-delicious",
        "a_overturn_1 fa fa-bomb",
        "a_overturn_2 fa fa-building",
        "a_overturn_3 fa fa-car",
        "a_overturn_4 fa fa-codepen",
        "a_overturn_5 fa  fa-cube",
        "a_overturn_6 fa fa-cubes",
        "a_overturn_7 fa fa-database",
        "a_overturn_8 fa fa-delicious"];


    window.card_grey = "b_overturn";

    window.box = document.getElementById('box');
    window.cards = box.getElementsByTagName('li');
    initiate();
};