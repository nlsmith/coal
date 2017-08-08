//MASTER JQUERY SCRIPT FOR COAL: A LOVE STORY.
//the script below calls the visualNav plugin for the nav/scrolling
$(document).ready(function(){

$('.mainNav').visualNav();
//$('.mainNav').removeClass("inview");
//$('.mainNav').children().removeClass("inview");

//keep nav centered
function RepositionNav(){
        var windowHeight = $(window).height();
        var navHeight = $('.mainNav').height() / 2;
        var windowCenter = (windowHeight / 2);
        var newtop = windowCenter - navHeight;
        $('.mainNav').css({"top": newtop});
    }

RepositionNav();

//the script below sets up the parallax movement of the backgrounds
var $window = $(window);
var windowHeight = $window.height();

//use the inview plugin to attach "inview" class to divs in the viewport.
/*$('#section-0, #section-1, #section-2, #section-2b, #section-3, #section-4, #section-5, #section-6, #section-7, #section-7b, #section-8, #section-9, #section-10').bind('inview', function (event, visible) {
	var navTarget = "#" + $(this).attr('id') + "-m";
	
	if (visible == true) {
	    $(this).addClass("inview");
	    $(navTarget).addClass("customActive");
	    } else {
	    $(this).removeClass("inview");
	    $(navTarget).removeClass("customActive");
	}
	//set up an if statement to deal with two visible divs. highlight only one nav button.
	/*if($(this).siblings().hasClass("inview")){
			var indexString = $(this).attr('id');
			var sibString = $(this).siblings(".inview").attr('id');
			var indexStringList = indexString.split('-');
			var sibStringList = sibString.split('-');
			//alert(sibString);
			//alert(sibStringList[1]);
			if(indexStringList[1] < sibStringList[1]) {
            	$(navTarget).addClass("customActive");
            	$(navTarget).siblings().removeClass("customActive");
             } else {
             	$(navTarget).removeClass("customActive");
             	}
			//alert(indexStringList[1]);
	    	}*/
	    	/*if($("#section-0").hasClass("inview")){
               
               $(".logo").addClass("invisible");
               $(".logo").removeClass("visible");
               
               } else{
                       $(".logo").removeClass("invisible");
               $(".logo").addClass("visible");
               };
});*/


/*if($('div.content').hasClass("inview")){
                       $("#" + $('div.content.inview').attr('id') + "-m").addClass("customActive");
               }
               if($('div.content.inview').siblings().hasClass("inview") && $('div.content.inview').siblings().hasClass("content")){
                       var navTarget2 = "#" + $('div.content.inview').attr('id') + "-m";
                       var indexString = $('div.content.inview').attr('id');
                       //alert(indexString);
                       var sibString = $('div.content.inview').siblings(".inview.content").attr('id');
                       var indexStringList = indexString.split('-');
                       var sibStringList = sibString.split('-');
                       //alert(sibString);
                       //alert(sibStringList[1]);
                       if(indexStringList[1] < sibStringList[1]) {
                   $(navTarget2).addClass("customActive");
                   $(navTarget2).siblings().removeClass("customActive");
            } else {
                    $(navTarget2).removeClass("customActive");
                    }*/


$window.resize(function(){
	RepositionNav();
});

//jQuery rollover tooltips
$(".mainNav ul li").hover(
        function(){
            $(this).find("span").attr({
                "style": 'display:inline'
            });
            $(this).find("span").animate({opacity: 1, right: "-30"}, {queue:false, duration:400});
        }, 
        function(){
            $(this).find("span").animate({opacity: 0, right: "-20"}, {queue:false, duration:400, complete: function(){
                                $(this).attr({"style": 'display:none'});
                            }
                        }
            );
        });

//credits pop up on hover
/*$(".credits").hover(
	function(){
		//alert("hovering!");
 		$(this).find(".creditpage").attr({
 			"style": 'display:inline'
 			});	
 		},
 	function(){
	//alert("done hovering!");
 		$(this).find(".creditpage").attr({
 			"style": 'display:none'
 			});	
 });*/
 
 //sources pop up on hover
/*$(".sources").hover(
	function(){
		//alert("hovering!");
 		$(this).find(".sourcespage").attr({
 			"style": 'display:inline'
 			});	
 		},
 	function(){
	//alert("done hovering!");
 		$(this).find(".sourcespage").attr({
 			"style": 'display:none'
 			});	
 });*/
 
 //spanish/english switch for chicago video.
 $(".spanish").click(function(){
 		alert("en españolll!");
 });
 	
//colorbox code below

	$(".next").click(function(){
		$(this).colorbox.close();
		var thisContent = $(this).parent().parent().attr('id');
		var thisContentList = thisContent.split('-');
		var newUrlNumber = Number(thisContentList[2])+1;
		//alert(newUrlNumber);
		var newUrl = "#section-"+newUrlNumber;
		//alert($(this).parent().parent().attr('id'));
		//$.scrollTo(newUrl,800);
		if(thisContentList[1] == 2) { 
			var compContent = "#section-"+thisContentList[2]+"b"; 
			//alert(compContent);
			$.scrollTo(compContent,800);
			} else if(thisContentList[1] == 8) {
			var compContent = "#section-"+thisContentList[2]+"c";
			$.scrollTo(compContent,800);
			} else {
			$.scrollTo(newUrl,800);
			} 
       		
		//var thisUrl = window.location.hash;
		//alert(thisUrl);
		//if(thisUrl == ""){ 					  window.location.replace("http://www.poweringanation.org/coal/index.html#section-1")
	});

	$(".contentTag").colorbox({inline:true, scrolling:false});
	$(".contentTag").colorbox.resize();
	
	
//whenever colorbox closes, clear sources/credits screens.
$(document).bind('cbox_closed', function(){
    $('.creditpage').css({"display":"none"});
    $('.sourcespage').css({"display":"none"});    
});
	
//vimeo api for autoplay
	$(".contentTag").click(function(){
		//evt.stopPropagation();
		//alert("lightbox OPEN!");
		//var thisUrl = $(this).attr('href');
		//alert(thisUrl);
		//var thisUrlSplit = thisUrl.split('-');
		//var vimeoID = "content"+thisUrlSplit[1];
		//alert(vimeoID);
		//$f(vimeoID).play();
	});
	
	$(".sidebarTag").colorbox({inline:true, width: "765px", scrolling:false});
	$(".sidebarTag").colorbox.resize();
	

	/*$(".contentTag2").colorbox({inline:true, href:"#content-2-2"});
	$(".contentTag2").colorbox.resize();
	$(".contentTag2").click(function(){evt.stopPropagation();});
	
	$(".contentTag3").colorbox({inline:true, href:"#content-3-2b"});
	$(".contentTag3").colorbox.resize();
	$(".contentTag3").click(function(){evt.stopPropagation();});
	
	$(".contentTag4").colorbox({inline:true, href:"#content-4-3"});
	$(".contentTag4").colorbox.resize();
	$(".contentTag4").click(function(){evt.stopPropagation();});*/
	
	$("#click").click(function(){ 
				$('#click').css({"background-color":"#f00", "color":"#fff", "cursor":"inherit"}).text("Open this window again and this message will still be here.");
				return false;
			});
	
	function shareClick(){
		var thisUrl = window.location.hash;
		var thisUrlSplit = thisUrl.split('-');
		if(thisUrlSplit[0] == "#content") {
			var url = "http://www.poweringanation.org/coal/index.html#section-"+thisUrlSplit[2];
			window.location.replace(url)
			var cbUrl = "#content-"+thisUrlSplit[1]+"-"+thisUrlSplit[2];
			$.colorbox({href:cbUrl, open:true, inline:true});
		}
	}
	
	shareClick();

});