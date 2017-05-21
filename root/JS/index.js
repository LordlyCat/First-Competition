var wrapper = document.querySelector('#wrapper');
var lines = wrapper.querySelectorAll('div');
var mainbox = document.querySelector('#main').querySelectorAll('div');
var a = document.querySelectorAll('a');



var w = document.body.clientWidth; //浏览器可视化宽度
var h = document.documentElement.clientHeight;//浏览器可视化高度

//横线长度
lines[6].style.top = 13*h/4 + 'px';
lines[7].style.top = 14*h/4 + 'px';
lines[8].style.top = 15*h/4 + 'px';

for (var i = 0; i < 6; i++) {
    lines[i].style.height = 5*h + 'px';
}

//网页的平滑移动
$('a').click(function(){

    $('html, body').animate({

        scrollTop: $( $.attr(this, 'href') ).offset().top

    }, 2000);

    return false;

});

//Chrome: 1520 26 1520 26 1536 759 0 0 0 0 1920 1920 1040 1920
//IE:   1904 18 1904 18 1904 18 0 0 109 0 1920 1920 1040 1920

//每个板块的高度
for (var i = 0; i < mainbox.length; i++) {
    mainbox[i].style.height = h + 'px';
}

//页面移动及其变化函数
function goFirst () {
    a[0].style.backgroundColor = 'white';
    a[1].style.backgroundColor = a[2].style.backgroundColor = a[3].style.backgroundColor 
    =a[4].style.backgroundColor = 'gray';

    function moveLines () {
        lines[0].style.left = '31%';
        lines[1].style.left = '38%';
        lines[2].style.left = '45%';
        lines[3].style.left = '52%';
        lines[4].style.left = '59%';
        lines[5].style.left = '66%';
        lines[6].style.width = lines[7].style.width = lines[8].style.width = '0px';
    }

    setTimeout(moveLines, 1000);
                
}

function goSecond () {
    a[1].style.backgroundColor = 'white';
    a[0].style.backgroundColor = a[2].style.backgroundColor = a[3].style.backgroundColor 
    =a[4].style.backgroundColor = 'gray';

    function moveLines () {
        lines[0].style.left = '0px';
        lines[1].style.left = w/5 + 'px';
        lines[2].style.left = 2*w/5 + 'px';
        lines[3].style.left = 3*w/5 + 'px';
        lines[4].style.left = 4*w/5 + 'px';
        lines[5].style.left = w-0.9 + 'px';
        lines[6].style.width = lines[7].style.width = lines[8].style.width = '0px';
    }

    setTimeout(moveLines, 1000);
    
}

function goThird () {
    a[2].style.backgroundColor = 'white';
    a[0].style.backgroundColor = a[1].style.backgroundColor = a[3].style.backgroundColor 
    =a[4].style.backgroundColor = 'gray';

    function moveLines (){
        lines[0].style.left = w/7 + 'px';
        lines[1].style.left = 2*w/7 + 'px';
        lines[2].style.left = 3*w/7 + 'px';
        lines[3].style.left = 4*w/7 + 'px';
        lines[4].style.left = 5*w/7 + 'px';
        lines[5].style.left = 6*w/7 + 'px';
        lines[6].style.width = lines[7].style.width = lines[8].style.width = '0px';
    }

    setTimeout(moveLines, 1000);

    
}

function goFourth () {
    a[3].style.backgroundColor = 'white';
    a[0].style.backgroundColor = a[1].style.backgroundColor = a[2].style.backgroundColor 
    =a[4].style.backgroundColor = 'gray';

    function moveLines (){
        lines[0].style.left = lines[1].style.left = w/4 + 'px';
        lines[2].style.left = lines[3].style.left = 2*w/4 + 'px';
        lines[4].style.left = lines[5].style.left = 3*w/4 + 'px';
        lines[6].style.width = lines[7].style.width = lines[8].style.width = w  + 'px';
    }

    setTimeout(moveLines, 1000);
    
}

function goFifth () {
    a[4].style.backgroundColor = 'white';
    a[0].style.backgroundColor = a[1].style.backgroundColor = a[2].style.backgroundColor 
    =a[3].style.backgroundColor = 'gray';

    function moveLines (){
        lines[0].style.left = lines[1].style.left = lines[2].style.left = '0px';
        lines[3].style.left = lines[4].style.left = lines[5].style.left = w - 0.9 + 'px';
        lines[6].style.width = lines[7].style.width = lines[8].style.width = '0px';
    }

    setTimeout(moveLines, 1000);
    
}

//给导航栏绑定函数
a[0].onclick = goFirst;
a[1].onclick = goSecond;
a[2].onclick = goThird;
a[3].onclick = goFourth;
a[4].onclick = goFifth;


var scrollFunc = function (e) {

        e = e || window.event;
        var height = window.pageYOffset;//获取浏览器滚动条距顶部的高度

        if (e.wheelDelta || e.detail) {

            //鼠标滑轮下滑 
            if ((e.wheelDelta < 0 || e.detail > 0) && height === 0 && a[1].style.backgroundColor != 'white') { 

                a[1].click();
            }
            
            else if ((e.wheelDelta < 0 || e.detail > 0) && height >= h-10 && height <= h+10 && a[2].style.backgroundColor != 'white') { //当滑轮向下滚动时
                console.log(height);
                a[2].click();  
            }
            else if ((e.wheelDelta < 0 || e.detail > 0) && height >= 2*h-10 && height <= 2*h+10 && a[3].style.backgroundColor != 'white') {

                a[3].click();
            }
            else if ((e.wheelDelta < 0 || e.detail > 0) && height >= 3*h-20 && height <= 3*h+20 && a[4].style.backgroundColor != 'white') {

                a[4].click();
            }


            //鼠标滑轮上滑
            if ((e.wheelDelta > 0 || e.detail < 0) && height >= h-10 && height <= h+10  && a[0].style.backgroundColor != 'white') { 

                a[0].click();
            }
            
            else if ((e.wheelDelta > 0 || e.detail < 0) && height >= 2*h-10 && height <= 2*h+10 && a[1].style.backgroundColor != 'white') {

                a[1].click(); 
            }
            else if ((e.wheelDelta > 0 || e.detail < 0) && height >= 3*h-10 && height <= 3*h+10 && a[2].style.backgroundColor != 'white') {

                a[2].click();
            }
            else if ((e.wheelDelta > 0 || e.detail < 0) && height >= 4*h-20 && height <= 4*h+20 && a[3].style.backgroundColor != 'white') {
                
                a[3].click();
            }      
            
        }
    }

    //给页面绑定滑轮滚动事件  
    if (document.addEventListener) {//firefox  
        document.addEventListener('DOMMouseScroll', scrollFunc, false);  
    }  
    //滚动滑轮触发scrollFunc方法  //ie 谷歌  
    window.onmousewheel = document.onmousewheel = scrollFunc;


var img = document.querySelectorAll('img');

function flashing () {
    for (var i = 0; i < img.length; i++) {

        //img[i].style.opacity = 0.9;
        if (img[i].style.display === 'inline-block') {
        img[i].style.display = 'none';
        }
        else{
            img[i].style.display = 'inline-block';
        }
        //img[i].style.opacity -= 0.4;
    }
    setTimeout(flashing, 1000);
}

flashing();

var three = document.querySelector('#three');
var four = document.querySelector('#four');
var five = document.querySelector('#five');

function jumpPage (event) {

    event = event ? event : window.event; 
    var e = event.srcElement ? event.srcElement : event.target; 

    if (e.className === 'box_3' || e.parentNode.className === 'box_3') {
        window.location = 'food.html';
    }
    else if (e.className === 'box_4' || e.parentNode.className === 'box_4') {
        window.location = 'fashion.html';
    }
    else if(e.className === 'box_5' || e.parentNode.className === 'box_5') {
        window.location = 'rest.html';
    }
}
    


var url = ['food.html', 'fashion.html', 'rest.html'];

three.onclick = jumpPage;
four.onclick = jumpPage;
five.onclick = jumpPage;




