/**
 * 首页东阿新闻栏目
 */
var Path = window.location.href;
// 栏目切换
$().ready(
		function() {
			Path = Path.substr(0, Path.indexOf("index.htm"));
			$("#dongexinwen_t1").mouseenter(
					function() {
						$(".dongexinwen_div").css("display", "none");
						$("#dongexinwen_div1").css("display", "block");
						$(".dongexinwen_t_active").addClass("dongexinwen_t")
								.removeClass("dongexinwen_t_active");
						$(this).removeClass("dongexinwen_t").addClass(
								"dongexinwen_t_active");
						$(".dongexinwenReadMore").attr("href",
								Path + "news.htm");
					});
			$("#dongexinwen_t2").mouseenter(
					function() {
						$(".dongexinwen_div").css("display", "none");
						$("#dongexinwen_div2").css("display", "block");
						$(".dongexinwen_t_active").addClass("dongexinwen_t")
								.removeClass("dongexinwen_t_active");
						$(this).removeClass("dongexinwen_t").addClass(
								"dongexinwen_t_active");
						$(".dongexinwenReadMore").attr("href",
								Path + "zibuyangsheng.htm");
					});
			$("#dongexinwen_t3").mouseenter(
					function() {
						$(".dongexinwen_div").css("display", "none");
						$("#dongexinwen_div3").css("display", "block");
						$(".dongexinwen_t_active").addClass("dongexinwen_t")
								.removeClass("dongexinwen_t_active");
						$(this).removeClass("dongexinwen_t").addClass(
								"dongexinwen_t_active");
						$(".dongexinwenReadMore").attr("href",
								Path + "tender/zhaobiao.htm");
					});

		});
/**
 * 传统中药栏目切换
 */
var timer;// 定时器
var itemWidth;// 图片的宽度
var currentIndex = 1;// 当前显示
var durTime = 1000;// 动画时间
var delayTime = 3000;// 动画延迟时间
var isRunning=false;
function productChange(index) {
	currentIndex = index;
	// 修改顶部块的显示
	$(".gongsichanpindaohang1").removeClass("gongsichanpindaohang1").addClass(
			"gongsichanpindaohang2");
	$("#gongsichanpindaohang" + index).removeClass("gongsichanpindaohang2")
			.addClass("gongsichanpindaohang1");
	// 修改下面显示区域
	$(".gongsichanpinshow1").removeClass("gongsichanpinshow1").addClass(
			"gongsichanpinshow2");
	$("#gongsichanpindaohang" + index + "_show").removeClass(
			"gongsichanpinshow2").addClass("gongsichanpinshow1");
	clearInterval(timer);
	isRunning=false;
	if (index == 1) {
		timer = setInterval(function() {
			item1changeToLeft();
		}, delayTime);
	}
	if (index == 2) {
		timer = setInterval(function() {
			item2changeToLeft();
		}, delayTime);
	}
	if (index == 3) {
		timer = setInterval(function() {
			item3changeToLeft();
		}, delayTime);
	}

}

$().ready(function() {
	var contentWidth = parseInt($("#gongsichanpindaohang1_show").css("width"));
	itemWidth = contentWidth / 3;
	timer = setInterval(function() {
		item1changeToLeft();
	}, delayTime);
	$(".item").css("width", itemWidth);
});

function item1changeToLeft() {
	isRunning=true;
	var len = $("#content1 > div").size();
	if (len > 3) {
		var firstItem = $("#content1 > div").eq(0);
		$("#content1").animate({
			"left" : 0 - itemWidth
		}, durTime, function() {
			$(firstItem).remove();
			$("#content1").css("left", 0);
			$(firstItem).appendTo($("#content1"));
			isRunning=false;
			clearInterval(timer);
			timer = setInterval(function() {
				item1changeToLeft();
			}, delayTime);
		});
	}else{
		isRunning=false;
	}
}
function item2changeToLeft() {
	isRunning=true;
	var len = $("#content2 > div").size();
	if (len > 3) {
		var firstItem = $("#content2 > div").eq(0);
		$("#content2").animate({
			"left" : 0 - itemWidth
		}, durTime, function() {
			$(firstItem).remove();
			$("#content2").css("left", 0);
			$(firstItem).appendTo($("#content2"));
			isRunning=false;
			clearInterval(timer);
			timer = setInterval(function() {
				item1changeToLeft();
			}, delayTime);
		});
	}else{
		isRunning=false;
	}
}
function item3changeToLeft() {
	isRunning=true;
	var len = $("#content3 > div").size();
	if (len > 3) {
		var firstItem = $("#content3 > div").eq(0);
		$("#content3").animate({
			"left" : 0 - itemWidth
		}, durTime, function() {
			$(firstItem).remove();
			$("#content3").css("left", 0);
			$(firstItem).appendTo($("#content3"));
			isRunning=false;
			clearInterval(timer);
			timer = setInterval(function() {
				item1changeToLeft();
			}, delayTime);
		});
	}else{
		isRunning=false;
	}
}
function item1changeToRight() {
	isRunning=true;
	var len = $("#content1 > div").size();
	if (len > 3) {
		var lastItem = $("#content1 > div").eq(len-1);
		$(lastItem).remove();
		$(lastItem).prependTo($("#content1"));
		$("#content1").css("left",0-itemWidth);
		$("#content1").animate({
			"left" : 0 
		}, durTime, function() {
			isRunning=false;
			clearInterval(timer);
			timer = setInterval(function() {
				item1changeToLeft();
			}, delayTime);
		});
	}
}
function item2changeToRight() {
	isRunning=true;
	var len = $("#content2 > div").size();
	if (len > 3) {
		var lastItem = $("#content2 > div").eq(len-1);
		$(lastItem).remove();
		$(lastItem).prependTo($("#content2"));
		$("#content2").css("left",0-itemWidth);
		$("#content2").animate({
			"left" : 0 
		}, durTime, function() {
			isRunning=false;
			clearInterval(timer);
			timer = setInterval(function() {
				item1changeToLeft();
			}, delayTime);
		});
	}else{
		isRunning=false;
	}
}
function item3changeToRight() {
	isRunning=true;
	var len = $("#content3 > div").size();
	if (len > 3) {
		var lastItem = $("#content3 > div").eq(len-1);
		$(lastItem).remove();
		$(lastItem).prependTo($("#content3"));
		$("#content3").css("left",0-itemWidth);
		$("#content3").animate({
			"left" : 0 
		}, durTime, function() {
			isRunning=false;
			clearInterval(timer);
			timer = setInterval(function() {
				item1changeToLeft();
			}, delayTime);
		});
	}else{
		isRunning=false;
	}
}
function scroll(dir) {
	if(isRunning){
		console.log(isRunning+"-->"+dir);
		return;
	}
	if (currentIndex == 1) {
		if (dir == "left") {
			clearInterval(timer);
			item1changeToLeft();
		}else{
			clearInterval(timer);
			item1changeToRight();
		}

	}
	if (currentIndex == 2) {
		if (dir == "left") {
			clearInterval(timer);
			item2changeToLeft();
		}else{
			clearInterval(timer);
			item2changeToRight();
		}

	}
	if (currentIndex == 3) {
		if (dir == "left") {
			clearInterval(timer);
			item3changeToLeft();
		}else{
			clearInterval(timer);
			item3changeToRight();
		}
	}
}
