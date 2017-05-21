
var h = document.documentElement.clientHeight;//获取浏览器窗口可视化高度

var wrapper = document.querySelector('#wrapper');
var content = document.querySelector('#content');
var boxes = document.querySelectorAll('.box');
var description = document.querySelectorAll('.description');
var img = content.querySelectorAll('img');

content.style.height = h + 'px';


//食物图片
for (var i = 0; i < img.length; i++) {

	img[i].addEventListener('mouseover', function (el) {

		var e = el.srcElement || el.target;
		e.className =  'on';
	}, false)

	img[i].addEventListener('mouseout', function (el) {

		var e = el.srcElement || el.target;
		e.className = 'off';
	}, false)
}

//弹出面板。。。。。。。。。。。。
var show = document.querySelectorAll('.show');
var out = document.querySelectorAll('.out');

function cover(){
    //获取页面的高度和宽度
    var sWidth = document.body.scrollWidth;
    var sHeight = document.body.scrollHeight;
    
    //获取页面的可视区域高度
    var wHeight = document.documentElement.clientHeight;
    var cover = document.createElement("div");

        cover.id = "cover";
        cover.style.height = sHeight + "px";
        cover.style.width = sWidth +"px";

        document.body.appendChild(cover);

        for (var i = 0; i < out.length; i++) {
        	out[i].addEventListener('click', function () {
        	
        		document.documentElement.style.overflow = 'auto';
        		document.body.removeChild(cover);

		    	for (var i = 0; i < show.length; i++) {
		    		show[i].style.display = 'none';
		    	}
			}, false);


			out[i].addEventListener('mouseover', function () {
				for (var i = 0; i < show.length; i++) {
		    		out[i].className = 'outRotate';
		    	}				
			}, false);

			out[i].addEventListener('mouseout', function () {
				for (var i = 0; i < show.length; i++) {
		    		out[i].className = 'outrotate';
		    	}				
			}, false);
        }    
}



boxes[0].onclick = function () {
		show[0].style.display = 'block';
		document.documentElement.style.overflow = 'hidden';
		cover();
}

boxes[2].onclick = function () {
		show[1].style.display = 'block';
		document.documentElement.style.overflow = 'hidden';
		cover();
}

boxes[4].onclick = function () {
		show[2].style.display = 'block';
		document.documentElement.style.overflow = 'hidden';
		cover();
}

boxes[7].onclick = function () {
		show[3].style.display = 'block';
		document.documentElement.style.overflow = 'hidden';
		cover();
}

boxes[9].onclick = function () {
		show[4].style.display = 'block';
		document.documentElement.style.overflow = 'hidden';
		cover();
}

boxes[11].onclick = function () {
		show[5].style.display = 'block';
		document.documentElement.style.overflow = 'hidden';
		cover();
}


//轮播图
var w = document.body.clientWidth;//获取浏览器窗口可视化宽度
var rotation = document.querySelector('.rotation');
var img = document.querySelector('.img');
var imgs = img.querySelector('img');
rotation.style.height = 2*w/5 + 'px';

function circle () {
    w = document.body.clientWidth;//保证浏览器窗口大小改变时，图片能滑动正确的距离
    rotation.style.height = 2*w/5 + 'px';//保证浏览器窗口大小改变时，图片高度同比缩放
    var index = 0;

    function go () {
        if (parseInt(img.style.left) >= -3*w-50 && parseInt(img.style.left) <= -3*w+50) {
            img.style.left = '0px';
        }else if (parseInt(img.style.left) >= -w-25 && parseInt(img.style.left) <= -w+25) {
        	img.style.left = -w + 'px';
        }else if (parseInt(img.style.left) >= -2*w-25 && parseInt(img.style.left) <= -2*w+25) {
        	img.style.left = -2*w + 'px';
        }
        
        if (index !== 20) {
            index += 1;
            img.style.left = parseInt(img.style.left) - w/20-0.3 + 'px';

            setTimeout(go, 20);
        }
        
    }
    go();

    setTimeout(circle, 3000);
}

setTimeout(circle, 3000);

//小圆点的变化
var dots = document.querySelector('.dots');
var spans = dots.querySelectorAll('span');
var index = 0;

function changeDots () {
    
    for (var i = 0; i < spans.length; i++) {
        if (spans[i].className == "on"){
            spans[i].className = " off";
            break;
        }
    }
    index += 1;
    if (index === 3) {
        index = 0;
    }
    spans[index].setAttribute("class","on");


    setTimeout(changeDots, 3000);
}

setTimeout(changeDots, 3000);





