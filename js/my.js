// JavaScript Document




/*
二级下拉菜单
*/
var nav1=document.getElementsByClassName("nav_list")[0].children[0];
var lis = nav1.getElementsByTagName('li');
for (var i = 0; i < lis.length; i++) {
    (function (i) {
      lis[i].addEventListener('mouseover', function () {
          var erji=lis[i].getElementsByTagName('ul')[0];
          if(erji){
              erji.style='visibility: visible;'; 
          }
      }, false);
      lis[i].addEventListener('mouseout', function () {
          var erji=lis[i].getElementsByTagName('ul')[0];
          if(erji){
              erji.style='visibility: hidden;'; 
          }
      }, false);
    }(i))
}

/* 移动版 展开隐藏菜单1 */
var T0=document.getElementsByClassName("nav_sm")[0].children[0];
var m_nav=document.getElementsByClassName("nav_sm")[0].children[1];
      T0.addEventListener('click', function () {
		  if(m_nav.style.length>1){
			  m_nav.style='visibility:hidden;';
		  }else{
			  m_nav.style='visibility: visible;left:0%;'; 
		  }
      }, false);
/* 移动版 展开隐藏菜单2 */
var T1=document.getElementsByClassName("nav_list")[0];
var m_nav1=T1.getElementsByTagName('ul');
      T1.addEventListener('click', function () {
		  if(m_nav1[0].style.display=="block"){
			  m_nav1[0].style='display:none;'; 
		  }else{
			  m_nav1[0].style='display:block;'; 
		  }
      }, false);
window.onresize = function(){
	m_nav.style=''; 
	m_nav1[0].style=''; 
}






/*****

图片滚动、跑马灯特效

*****/
function scroll(){
    var speed=30;
    var tab=document.getElementById("scroll1");
    var tab1=document.getElementById("scroll3");
    var tab2=document.getElementById("scroll4");
    tab2.innerHTML=tab1.innerHTML;
    function Marquee(){
        if(tab2.offsetWidth-tab.scrollLeft<=0){
            tab.scrollLeft-=tab1.offsetWidth
        }else{
            tab.scrollLeft++;
        }
    }
    var MyMar=setInterval(Marquee,speed);
    tab.onmouseover=function() {clearInterval(MyMar)};
    tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};
}