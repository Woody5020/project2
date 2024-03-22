window.addEventListener("DOMContentLoaded", function(){
	let n=0; 
	let wint=0; 
	let t=0; 
	let topPos=0; 

	let desktop=document.getElementById("desktop");
	let desktopList=desktop.firstElementChild.children;

	let mobile=document.getElementById("mobile");
	let mobileList=mobile.firstElementChild.children;

	let header=document.querySelector("header");
	let tab=document.getElementById("tab");
	let dim=document.querySelector(".dim");

	let start=document.querySelector(".start");
	let section=this.document.querySelectorAll("section");
	let pageList=[];

	// pageList[0]=start;

	for(let i=0; i < section.length; i++){
		pageList.push(section[i]);
	}
	console.log(pageList);
    let mainvideo=document.getElementById("main_video");
    mainvideo.muted=true;
    mainvideo.addEventListener("loadeddata", function(){
        mainvideo.play(); 
    });
    mainvideo.addEventListener("ended", function(){
        mainvideo.play(); 
    });
	let subvideo=document.getElementById("sub_video");
    subvideo.muted=true;
    subvideo.addEventListener("loadeddata", function(){
        subvideo.play();
    });
    subvideo.addEventListener("ended", function(){
        sub_video.play();  
    });
	this.window.addEventListener("scroll",function(){ 
			wint = document.documentElement.scrollTop; 
			if(wint > 50){ 
				if(header.classList.contains("fixed") === false){ 
					header.classList.add("fixed"); 
					tab.classList.add("fixed");
				}
			}
			else {
				if(header.classList.contains("fixed") === true){ 
					header.classList.remove("fixed"); 
					tab.classList.remove("fixed");
				}
			}
			t=window.scrollY;
			if(t<pageList[1].offsetTop){
				n=0; 
			}
			else if (t<pageList[2].offsetTop){
				n=1;
				}
				else if(t<pageList[3].offsetTop){
					n=2; 
					}
					else if(t<pageList[4].offsetTop){
					n=3; 
						}
						else if(t<pageList[5].offsetTop){
						n=4; 
						}
						else if(t<pageList[6].offsetTop){
						n=5; 
						}
						else if(t<pageList[7].offsetTop){
						n=6;
						}
						else if(t<pageList[8].offsetTop){
						n=7; 
							if(window.innerHeight+t == document.body.scrollHeight){
							n=8;
							}
						}
						else{
						n=8; 
					}
});
	for(let i=0; i<desktopList.length; i++){
		desktopList[i].addEventListener("click",function(e){
			e.preventDefault();
			n=i;
			topPos=pageList[n].offsetTop-120;
			gsap.to(window,{scrollTo:topPos,duration:0.4});
		});
	}
	for (let i = 0; i < mobileList.length; i++) {
			mobileList[i].addEventListener("click", function (e) { 
				e.preventDefault();
				n = i;
				topPos = pageList[n].offsetTop-120;
				gsap.to(window, { scrollTo: topPos, duration: 0.4 });
				dim.classList.remove("active");
				tab.classList.remove("close");
				tab.classList.add("open");
				mobile.classList.remove("active");
			});
		}
$(function(){
	var swiper=new Swiper(".mySwiper", {
		direction: 'vertical', 
		loop:true,
		slidesPerView: 2,
		spaceBetween: 35,
		mousewheel: true,
		breakpoints: {
			720: {
				slidesPerView: 3
			}
		}
	});
	tab.addEventListener("click",function(e){
		e.preventDefault();
		if(tab.classList.contains("open")){
			tab.classList.remove("open");
			tab.classList.add("close");
			mobile.classList.add("active");
			dim.classList.add("active");
			document.body.classList.add("fixed");
		}
		else {
			tab.classList.remove("close");
			tab.classList.add("open");
			mobile.classList.remove("active");
			dim.classList.remove("active");
			document.body.classList.remove("fixed");
		}
	});
	let winw;
	$(window).resize(function(){
		winw=$(window).width(); 
		if(winw > 720) { 
			if($("#tab").hasClass("close")===true){ 
				$("body").removeClass("fixed"); 
				$("#mobile").removeClass("active"); 
				$("#tab").removeAttr("class"); 
				$("#tab").addClass("open"); 
				$(".dim").removeClass("active");
			}
		}
	});
	

});

});