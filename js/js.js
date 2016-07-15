window.onload = function() {
//"use strict";

	var headers = document.getElementsByClassName('header');  //храним все элементы DOM с нужным классом
	var head = [], width = [], h = [], headerCoo = [];

	for(var i=0; i<headers.length; i++) {
		head[i] = document.getElementById('header_'+(i+1));  //храним хедер (объект)
		width[i] = head[i].offsetWidth;   //узнаем ширину хедера
		h[i] = head[i].offsetTop;  //храним расстояние от верха body до хедера
	}

	var delta, current;
	current = window.pageYOffset || document.documentElement.scrollTop;

	window.onscroll = function() {
		var headers = document.getElementsByClassName('header');  //храним все элементы DOM с нужным классом
		sticky ();
	}

	window.addEventListener('resize', function(){
		resize();
	}, false );

	function sticky () {
		delta = window.pageYOffset || document.documentElement.scrollTop;  //мониторим, куда идет скролл вверх или внизх
		if(delta>current) {
			current = delta;
			resize();
		}
		if(delta<current) {
			current = delta;
			resize();
			unFixed()
		}
	}
	function fixed(width) {
		for(var i=0; i<headers.length; i++) {
		headerCoo[i] = document.getElementById('header_'+(i+1)).getBoundingClientRect();  //текущие координаты верхнего хедера
			if(headerCoo[i].top <=0) {
				head[i].className = "header_fixed header";
				head[i].style.margin = "0px 0px 0px -"+(width[i]/2)+"px";
				head[i].style.zIndex = i+1;
			}
		}
	}
	function resize() {
		for (var i=0; i<headers.length; i++) {
			width[i] = head[i].offsetWidth;
		}
		fixed(width);
	}
	function unFixed() {
		for(var i=0; i<headers.length; i++) {
			if(delta<=h[i]) {
				head[i].className = "header";
				head[i].style.margin = "auto";
			}
		}
	}
};