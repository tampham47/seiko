/* jshint -W071, -W074 */
/* global jQuery:false */

/* Disabled options are:
 * W071: This function has too many statements
 * W074: This function's cyclomatic complexity is too high
 */

/*
 *	jQuery ezPlus 1.1.20
 *	Demo's and documentation:
 *	http://igorlino.github.io/elevatezoom-plus/
 *
 *	licensed under MIT license.
 *	http://en.wikipedia.org/wiki/MIT_License
 *
 */
"function"!=typeof Object.create&&(Object.create=function(o){function e(){}return e.prototype=o,new e}),function(o,e,i,t){var n={init:function(e,i){function t(){var o=(new Date).getTime(),e="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var i=(o+16*Math.random())%16|0;return o=Math.floor(o/16),("x"==e?i:3&i|8).toString(16)});return e}var n,s=this;s.elem=i,s.$elem=o(i),s.options=o.extend({},o.fn.ezPlus.options,s.responsiveConfig(e||{})),s.imageSrc=s.$elem.data(s.options.attrImageZoomSrc)?s.$elem.data(s.options.attrImageZoomSrc):s.$elem.attr("src"),s.options.enabled&&(s.options.tint&&(s.options.lensColour="none",s.options.lensOpacity="1"),"inner"===s.options.zoomType&&(s.options.showLens=!1),-1===s.options.zoomId&&(s.options.zoomId=t()),s.$elem.parent().removeAttr("title").removeAttr("alt"),s.zoomImage=s.imageSrc,s.refresh(1),n=o(s.options.gallery?"#"+s.options.gallery:s.options.gallerySelector),n.on("click.zoom",s.options.galleryItem,function(e){return s.options.galleryActiveClass&&(o(s.options.galleryItem,n).removeClass(s.options.galleryActiveClass),o(this).addClass(s.options.galleryActiveClass)),"A"===this.tagName&&e.preventDefault(),o(this).data(s.options.attrImageZoomSrc)?s.zoomImagePre=o(this).data(s.options.attrImageZoomSrc):s.zoomImagePre=o(this).data("image"),s.swaptheimage(o(this).data("image"),s.zoomImagePre),"A"===this.tagName?!1:void 0}))},refresh:function(o){var e=this;setTimeout(function(){e.fetch(e.imageSrc,e.$elem,e.options.minZoomLevel)},o||e.options.refresh)},fetch:function(o,e,i){var t=this,n=new Image;n.onload=function(){n.width/e.width()<=i?t.largeWidth=e.width()*i:t.largeWidth=n.width,n.height/e.height()<=i?t.largeHeight=e.height()*i:t.largeHeight=n.height,t.startZoom(),t.currentImage=t.imageSrc,t.options.onZoomedImageLoaded(t.$elem)},t.setImageSource(n,o)},setImageSource:function(o,e){o.src=e},startZoom:function(){function e(){return"overflow: hidden;background-position: 0px 0px;text-align:center;background-color: "+String(s.options.zoomWindowBgColour)+";width: "+String(s.options.zoomWindowWidth)+"px;height: "+String(s.options.zoomWindowHeight)+"px;float: left;background-size: "+s.largeWidth/s.currentZoomLevel+"px "+s.largeHeight/s.currentZoomLevel+"px;display: none;z-index:100;border: "+String(s.options.borderSize)+"px solid "+s.options.borderColour+";background-repeat: no-repeat;position: absolute;"}function i(){var o=s.$elem.css("border-left-width");return"overflow: hidden;margin-left: "+String(o)+";margin-top: "+String(o)+";background-position: 0px 0px;width: "+String(s.nzWidth)+"px;height: "+String(s.nzHeight)+"px;float: left;display: none;cursor:"+s.options.cursor+";border: "+String(s.options.borderSize)+"px solid "+s.options.borderColour+";background-repeat: no-repeat;position: absolute;"}function t(){return s.nzHeight<s.options.zoomWindowHeight/s.heightRatio?s.lensHeight=s.nzHeight:s.lensHeight=String(s.options.zoomWindowHeight/s.heightRatio),s.largeWidth<s.options.zoomWindowWidth?s.lensWidth=s.nzWidth:s.lensWidth=String(s.options.zoomWindowWidth/s.widthRatio),"background-position: 0px 0px;width: "+String(s.options.zoomWindowWidth/s.widthRatio)+"px;height: "+String(s.options.zoomWindowHeight/s.heightRatio)+"px;float: right;display: none;overflow: hidden;z-index: 999;opacity:"+s.options.lensOpacity+";filter: alpha(opacity = "+100*s.options.lensOpacity+"); zoom:1;width:"+s.lensWidth+"px;height:"+s.lensHeight+"px;background-color:"+s.options.lensColour+";cursor:"+s.options.cursor+";border: "+s.options.lensBorderSize+"px solid "+s.options.lensBorderColour+";background-repeat: no-repeat;position: absolute;"}function n(o){(s.lastX!==o.clientX||s.lastY!==o.clientY)&&(s.setPosition(o),s.currentLoc=o),s.lastX=o.clientX,s.lastY=o.clientY}var s=this;s.nzWidth=s.$elem.width(),s.nzHeight=s.$elem.height(),s.isWindowActive=!1,s.isLensActive=!1,s.isTintActive=!1,s.overWindow=!1,s.options.imageCrossfade&&(s.zoomWrap=s.$elem.wrap('<div style="height:'+s.nzHeight+"px;width:"+s.nzWidth+'px;" class="zoomWrapper" />'),s.$elem.css("position","absolute")),s.zoomLock=1,s.scrollingLock=!1,s.changeBgSize=!1,s.currentZoomLevel=s.options.zoomLevel,s.nzOffset=s.$elem.offset(),s.$elem.closest(".product-slider-wrapper").length?s.nzOffsetLeft=s.nzOffset.left-o(".product-slider-wrapper").offset().left:s.nzOffsetLeft=s.nzOffset.left,s.widthRatio=s.largeWidth/s.currentZoomLevel/s.nzWidth,s.heightRatio=s.largeHeight/s.currentZoomLevel/s.nzHeight,"window"===s.options.zoomType&&(s.zoomWindowStyle=e()),"inner"===s.options.zoomType&&(s.zoomWindowStyle=i()),"window"===s.options.zoomType&&(s.lensStyle=t()),s.tintStyle="display: block;position: absolute;background-color: "+s.options.tintColour+";filter:alpha(opacity=0);opacity: 0;width: "+s.nzWidth+"px;height: "+s.nzHeight+"px;",s.lensRound="","lens"===s.options.zoomType&&(s.lensStyle="background-position: 0px 0px;float: left;display: none;border: "+String(s.options.borderSize)+"px solid "+s.options.borderColour+";width:"+String(s.options.lensSize)+"px;height:"+String(s.options.lensSize)+"px;background-repeat: no-repeat;position: absolute;"),"round"===s.options.lensShape&&(s.lensRound="border-top-left-radius: "+String(s.options.lensSize/2+s.options.borderSize)+"px;border-top-right-radius: "+String(s.options.lensSize/2+s.options.borderSize)+"px;border-bottom-left-radius: "+String(s.options.lensSize/2+s.options.borderSize)+"px;border-bottom-right-radius: "+String(s.options.lensSize/2+s.options.borderSize)+"px;"),s.zoomContainer=o('<div class="zoomContainer" uuid="'+s.options.zoomId+'"style="position:absolute;left:'+s.nzOffset.left+"px;top:"+s.nzOffset.top+"px;height:"+s.nzHeight+"px;width:"+s.nzWidth+"px;z-index:"+s.options.zIndex+'"></div>'),s.$elem.attr("id")&&s.zoomContainer.attr("id",s.$elem.attr("id")+"-zoomContainer"),o(s.options.zoomContainerAppendTo).append(s.zoomContainer),s.options.containLensZoom&&"lens"===s.options.zoomType&&s.zoomContainer.css("overflow","hidden"),"inner"!==s.options.zoomType&&(s.zoomLens=o('<div class="zoomLens" style="'+s.lensStyle+s.lensRound+'">&nbsp;</div>').appendTo(s.zoomContainer).click(function(){s.$elem.trigger("click")}),s.options.tint&&(s.tintContainer=o("<div/>").addClass("tintContainer"),s.zoomTint=o('<div class="zoomTint" style="'+s.tintStyle+'"></div>'),s.zoomLens.wrap(s.tintContainer),s.zoomTintcss=s.zoomLens.after(s.zoomTint),s.zoomTintImage=o('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: '+s.nzWidth+"px; height: "+s.nzHeight+'px;" src="'+s.imageSrc+'">').appendTo(s.zoomLens).click(function(){s.$elem.trigger("click")})));var a=isNaN(s.options.zoomWindowPosition)?"body":s.zoomContainer;s.zoomWindow=o('<div style="z-index:999;left:'+s.windowOffsetLeft+"px;top:"+s.windowOffsetTop+"px;"+s.zoomWindowStyle+'" class="zoomWindow">&nbsp;</div>').appendTo(a).click(function(){s.$elem.trigger("click")}),s.zoomWindowContainer=o("<div/>").addClass("zoomWindowContainer").css("width",s.options.zoomWindowWidth),s.zoomWindow.wrap(s.zoomWindowContainer),"lens"===s.options.zoomType&&s.zoomLens.css("background-image",'url("'+s.imageSrc+'")'),"window"===s.options.zoomType&&s.zoomWindow.css("background-image",'url("'+s.imageSrc+'")'),"inner"===s.options.zoomType&&s.zoomWindow.css("background-image",'url("'+s.imageSrc+'")'),s.options.touchEnabled&&(s.$elem.bind("touchmove.ezpspace",function(o){o.preventDefault();var e=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];s.setPosition(e)}),s.zoomContainer.bind("dbltap.ezpspace",function(o){"inner"===s.options.zoomType&&s.showHideWindow("show"),s.options.showLens&&s.showHideLens("show"),o.preventDefault();var e=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];s.setPosition(e)}),s.zoomContainer.bind("touchmove.ezpspace",function(o){if(s.isWindowActive===!0||s.isLensActive===!0){"inner"===s.options.zoomType&&s.isWindowActive===!0&&s.showHideWindow("show"),o.preventDefault();var e=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];s.setPosition(e)}}),s.zoomContainer.bind("touchend.ezpspace",function(o){s.showHideWindow("hide"),s.options.showLens&&s.showHideLens("hide"),s.options.tint&&"inner"!==s.options.zoomType&&s.showHideTint("hide")}),s.$elem.bind("touchend.ezpspace",function(o){s.showHideWindow("hide"),s.options.showLens&&s.showHideLens("hide"),s.options.tint&&"inner"!==s.options.zoomType&&s.showHideTint("hide")}),s.options.showLens&&(s.zoomLens.bind("touchmove.ezpspace",function(o){o.preventDefault();var e=o.originalEvent.touches[0]||o.originalEvent.changedTouches[0];s.setPosition(e)}),s.zoomLens.bind("touchend.ezpspace",function(o){s.showHideWindow("hide"),s.options.showLens&&s.showHideLens("hide"),s.options.tint&&"inner"!==s.options.zoomType&&s.showHideTint("hide")}))),s.$elem.bind("mousemove.ezpspace",function(o){s.overWindow===!1&&s.setElements("show"),(s.lastX!==o.clientX||s.lastY!==o.clientY)&&(s.setPosition(o),s.currentLoc=o),s.lastX=o.clientX,s.lastY=o.clientY}),o("body").hasClass("touch")||(s.zoomContainer.bind("click.ezpspace touchstart.ezpspace",s.options.onImageClick),s.zoomContainer.bind("mousemove.ezpspace",function(o){s.overWindow===!1&&s.setElements("show"),n(o)}));var h=null;"inner"!==s.options.zoomType&&(h=s.zoomLens),s.options.tint&&"inner"!==s.options.zoomType&&(h=s.zoomTint),"inner"===s.options.zoomType&&(h=s.zoomWindow),h&&h.bind("mousemove.ezpspace",n),s.zoomContainer.add(s.$elem).mouseenter(function(){s.overWindow===!1&&s.setElements("show")}).mouseleave(function(){s.scrollLock||(s.setElements("hide"),s.options.onDestroy(s.$elem))}),"inner"!==s.options.zoomType&&s.zoomWindow.mouseenter(function(){s.overWindow=!0,s.setElements("hide")}).mouseleave(function(){s.overWindow=!1}),s.options.minZoomLevel?s.minZoomLevel=s.options.minZoomLevel:s.minZoomLevel=2*s.options.scrollZoomIncrement,s.options.scrollZoom&&s.zoomContainer.add(s.$elem).bind("wheel DOMMouseScroll MozMousePixelScroll",function(e){s.scrollLock=!0,clearTimeout(o.data(this,"timer")),o.data(this,"timer",setTimeout(function(){s.scrollLock=!1},250));var i=e.originalEvent.deltaY||-1*e.originalEvent.detail;if(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault(),0==i)return!1;if(i/120>0){var t=parseFloat(s.currentZoomLevel)-s.options.scrollZoomIncrement;t>=parseFloat(s.minZoomLevel)&&s.changeZoomLevel(t)}else if(!s.fullheight&&!s.fullwidth||!s.options.mantainZoomAspectRatio){var t=parseFloat(s.currentZoomLevel)+s.options.scrollZoomIncrement;s.options.maxZoomLevel?t<=s.options.maxZoomLevel&&s.changeZoomLevel(t):s.changeZoomLevel(t)}return!1})},destroy:function(){var e=this;e.$elem.unbind("ezpspace"),o(e.zoomContainer).remove(),e.options.loadingIcon&&e.spinner&&e.spinner.length&&(e.spinner.remove(),delete e.spinner)},getIdentifier:function(){var o=this;return o.options.zoomId},setElements:function(e){var i=this;return i.options.zoomEnabled?("show"===e&&i.isWindowSet&&("inner"===i.options.zoomType&&i.showHideWindow("show"),"window"===i.options.zoomType&&i.showHideWindow("show"),i.options.showLens&&!o("body").hasClass("touch")&&i.showHideLens("show"),i.options.tint&&"inner"!==i.options.zoomType&&i.showHideTint("show")),void("hide"===e&&("window"===i.options.zoomType&&i.showHideWindow("hide"),i.options.tint||i.showHideWindow("hide"),i.options.showLens&&i.showHideLens("hide"),i.options.tint&&i.showHideTint("hide")))):!1},setPosition:function(o){var e=this;if(!e.options.zoomEnabled)return!1;if(e.nzHeight=e.$elem.height(),e.nzWidth=e.$elem.width(),e.nzOffset=e.$elem.offset(),e.options.tint&&"inner"!==e.options.zoomType&&e.zoomTint.css({top:0,left:0}),e.options.responsive&&!e.options.scrollZoom&&e.options.showLens){e.nzHeight<e.options.zoomWindowWidth/e.widthRatio?e.lensHeight=e.nzHeight:e.lensHeight=String(e.options.zoomWindowHeight/e.heightRatio),e.largeWidth<e.options.zoomWindowWidth?e.lensWidth=e.nzWidth:e.lensWidth=e.options.zoomWindowWidth/e.widthRatio,e.widthRatio=e.largeWidth/e.nzWidth,e.heightRatio=e.largeHeight/e.nzHeight,"lens"!==e.options.zoomType&&(e.nzHeight<e.options.zoomWindowWidth/e.widthRatio?e.lensHeight=e.nzHeight:e.lensHeight=String(e.options.zoomWindowHeight/e.heightRatio),e.nzWidth<e.options.zoomWindowHeight/e.heightRatio?e.lensWidth=e.nzWidth:e.lensWidth=String(e.options.zoomWindowWidth/e.widthRatio),e.zoomLens.css({width:e.lensWidth,height:e.lensHeight}),e.options.tint&&e.zoomTintImage.css({width:e.nzWidth,height:e.nzHeight})),"lens"===e.options.zoomType&&e.zoomLens.css({width:String(e.options.lensSize)+"px",height:String(e.options.lensSize)+"px"})}if(e.zoomContainer.css({top:e.nzOffset.top,left:e.nzOffsetLeft,width:e.nzWidth,height:e.nzHeight}),e.mouseLeft=parseInt(o.pageX-e.nzOffset.left),e.mouseTop=parseInt(o.pageY-e.nzOffset.top),"window"===e.options.zoomType){var i=e.zoomLens.height()/2,t=e.zoomLens.width()/2;e.Etoppos=e.mouseTop<0+i,e.Eboppos=e.mouseTop>e.nzHeight-i-2*e.options.lensBorderSize,e.Eloppos=e.mouseLeft<0+t,e.Eroppos=e.mouseLeft>e.nzWidth-t-2*e.options.lensBorderSize}return"inner"===e.options.zoomType&&(e.Etoppos=e.mouseTop<e.nzHeight/2/e.heightRatio,e.Eboppos=e.mouseTop>e.nzHeight-e.nzHeight/2/e.heightRatio,e.Eloppos=e.mouseLeft<0+e.nzWidth/2/e.widthRatio,e.Eroppos=e.mouseLeft>e.nzWidth-e.nzWidth/2/e.widthRatio-2*e.options.lensBorderSize),e.mouseLeft<0||e.mouseTop<0||e.mouseLeft>e.nzWidth||e.mouseTop>e.nzHeight?void e.setElements("hide"):(e.options.showLens&&(e.lensLeftPos=String(Math.floor(e.mouseLeft-e.zoomLens.width()/2)),e.lensTopPos=String(Math.floor(e.mouseTop-e.zoomLens.height()/2))),e.Etoppos&&(e.lensTopPos=0),e.Eloppos&&(e.windowLeftPos=0,e.lensLeftPos=0,e.tintpos=0),"window"===e.options.zoomType&&(e.Eboppos&&(e.lensTopPos=Math.max(e.nzHeight-e.zoomLens.height()-2*e.options.lensBorderSize,0)),e.Eroppos&&(e.lensLeftPos=e.nzWidth-e.zoomLens.width()-2*e.options.lensBorderSize)),"inner"===e.options.zoomType&&(e.Eboppos&&(e.lensTopPos=Math.max(e.nzHeight-2*e.options.lensBorderSize,0)),e.Eroppos&&(e.lensLeftPos=e.nzWidth-e.nzWidth-2*e.options.lensBorderSize)),"lens"===e.options.zoomType&&(e.windowLeftPos=String(-1*((o.pageX-e.nzOffset.left)*e.widthRatio-e.zoomLens.width()/2)),e.windowTopPos=String(-1*((o.pageY-e.nzOffset.top)*e.heightRatio-e.zoomLens.height()/2)),e.zoomLens.css("background-position",e.windowLeftPos+"px "+e.windowTopPos+"px"),e.changeBgSize&&(e.nzHeight>e.nzWidth?("lens"===e.options.zoomType&&e.zoomLens.css("background-size",e.largeWidth/e.newvalueheight+"px "+e.largeHeight/e.newvalueheight+"px"),e.zoomWindow.css("background-size",e.largeWidth/e.newvalueheight+"px "+e.largeHeight/e.newvalueheight+"px")):("lens"===e.options.zoomType&&e.zoomLens.css("background-size",e.largeWidth/e.newvaluewidth+"px "+e.largeHeight/e.newvaluewidth+"px"),e.zoomWindow.css("background-size",e.largeWidth/e.newvaluewidth+"px "+e.largeHeight/e.newvaluewidth+"px")),e.changeBgSize=!1),e.setWindowPosition(o)),e.options.tint&&"inner"!==e.options.zoomType&&e.setTintPosition(o),"window"===e.options.zoomType&&e.setWindowPosition(o),"inner"===e.options.zoomType&&e.setWindowPosition(o),e.options.showLens&&(e.fullwidth&&"lens"!==e.options.zoomType&&(e.lensLeftPos=0),e.zoomLens.css({left:e.lensLeftPos+"px",top:e.lensTopPos+"px"})),void 0)},showHideZoomContainer:function(o){var e=this;"show"===o&&e.zoomContainer&&e.zoomContainer.show(),"hide"===o&&e.zoomContainer&&e.zoomContainer.hide()},showHideWindow:function(o){var e=this;"show"===o&&!e.isWindowActive&&e.zoomWindow&&(e.options.onShow(e),e.options.zoomWindowFadeIn?e.zoomWindow.stop(!0,!0,!1).fadeIn(e.options.zoomWindowFadeIn):e.zoomWindow.show(),e.isWindowActive=!0),"hide"===o&&e.isWindowActive&&(e.options.zoomWindowFadeOut?e.zoomWindow.stop(!0,!0).fadeOut(e.options.zoomWindowFadeOut,function(){e.loop&&(clearInterval(e.loop),e.loop=!1)}):e.zoomWindow.hide(),e.isWindowActive=!1)},showHideLens:function(o){var e=this;"show"===o&&(e.isLensActive||(e.zoomLens&&(e.options.lensFadeIn?e.zoomLens.stop(!0,!0,!1).fadeIn(e.options.lensFadeIn):e.zoomLens.show()),e.isLensActive=!0)),"hide"===o&&e.isLensActive&&(e.zoomLens&&(e.options.lensFadeOut?e.zoomLens.stop(!0,!0).fadeOut(e.options.lensFadeOut):e.zoomLens.hide()),e.isLensActive=!1)},showHideTint:function(o){var e=this;"show"===o&&!e.isTintActive&&e.zoomTint&&(e.options.zoomTintFadeIn?e.zoomTint.css("opacity",e.options.tintOpacity).animate().stop(!0,!0).fadeIn("slow"):(e.zoomTint.css("opacity",e.options.tintOpacity).animate(),e.zoomTint.show()),e.isTintActive=!0),"hide"===o&&e.isTintActive&&(e.options.zoomTintFadeOut?e.zoomTint.stop(!0,!0).fadeOut(e.options.zoomTintFadeOut):e.zoomTint.hide(),e.isTintActive=!1)},setLensPosition:function(o){},setWindowPosition:function(e){var i=this;if(isNaN(i.options.zoomWindowPosition))i.externalContainer=o(i.options.zoomWindowPosition),i.externalContainer.length||(i.externalContainer=o("#"+i.options.zoomWindowPosition)),i.externalContainerWidth=i.externalContainer.width(),i.externalContainerHeight=i.externalContainer.height(),i.externalContainerOffset=i.externalContainer.offset(),i.windowOffsetTop=i.externalContainerOffset.top,i.windowOffsetLeft=i.externalContainerOffset.left;else switch(i.options.zoomWindowPosition){case 1:i.windowOffsetTop=i.options.zoomWindowOffsetY,i.windowOffsetLeft=+i.nzWidth;break;case 2:i.options.zoomWindowHeight>i.nzHeight?(i.windowOffsetTop=-1*(i.options.zoomWindowHeight/2-i.nzHeight/2),i.windowOffsetLeft=i.nzWidth):o.noop();break;case 3:i.windowOffsetTop=i.nzHeight-i.zoomWindow.height()-2*i.options.borderSize,i.windowOffsetLeft=i.nzWidth;break;case 4:i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=i.nzWidth;break;case 5:i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=i.nzWidth-i.zoomWindow.width()-2*i.options.borderSize;break;case 6:i.options.zoomWindowHeight>i.nzHeight?(i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=-1*(i.options.zoomWindowWidth/2-i.nzWidth/2+2*i.options.borderSize)):o.noop();break;case 7:i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=0;break;case 8:i.windowOffsetTop=i.nzHeight,i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize);break;case 9:i.windowOffsetTop=i.nzHeight-i.zoomWindow.height()-2*i.options.borderSize,i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize);break;case 10:i.options.zoomWindowHeight>i.nzHeight?(i.windowOffsetTop=-1*(i.options.zoomWindowHeight/2-i.nzHeight/2),i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize)):o.noop();break;case 11:i.windowOffsetTop=i.options.zoomWindowOffsetY,i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize);break;case 12:i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=-1*(i.zoomWindow.width()+2*i.options.borderSize);break;case 13:i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=0;break;case 14:i.options.zoomWindowHeight>i.nzHeight?(i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=-1*(i.options.zoomWindowWidth/2-i.nzWidth/2+2*i.options.borderSize)):o.noop();break;case 15:i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=i.nzWidth-i.zoomWindow.width()-2*i.options.borderSize;break;case 16:i.windowOffsetTop=-1*(i.zoomWindow.height()+2*i.options.borderSize),i.windowOffsetLeft=i.nzWidth;break;default:i.windowOffsetTop=i.options.zoomWindowOffsetY,i.windowOffsetLeft=i.nzWidth}if(i.isWindowSet=!0,i.windowOffsetTop=i.windowOffsetTop+i.options.zoomWindowOffsetY,i.windowOffsetLeft=i.windowOffsetLeft+i.options.zoomWindowOffsetX,i.zoomWindow.css({top:i.windowOffsetTop,left:i.windowOffsetLeft}),"inner"===i.options.zoomType&&i.zoomWindow.css({top:0,left:0}),i.windowLeftPos=String(-1*((e.pageX-i.nzOffset.left)*i.widthRatio-i.zoomWindow.width()/2)),i.windowTopPos=String(-1*((e.pageY-i.nzOffset.top)*i.heightRatio-i.zoomWindow.height()/2)),i.Etoppos&&(i.windowTopPos=0),i.Eloppos&&(i.windowLeftPos=0),i.Eboppos&&(i.windowTopPos=-1*(i.largeHeight/i.currentZoomLevel-i.zoomWindow.height())),i.Eroppos&&(i.windowLeftPos=-1*(i.largeWidth/i.currentZoomLevel-i.zoomWindow.width())),i.fullheight&&(i.windowTopPos=0),i.fullwidth&&(i.windowLeftPos=0),"window"===i.options.zoomType||"inner"===i.options.zoomType)if(1===i.zoomLock&&(i.widthRatio<=1&&(i.windowLeftPos=0),i.heightRatio<=1&&(i.windowTopPos=0)),"window"===i.options.zoomType&&(i.largeHeight<i.options.zoomWindowHeight&&(i.windowTopPos=0),i.largeWidth<i.options.zoomWindowWidth&&(i.windowLeftPos=0)),i.options.easing){i.xp||(i.xp=0),i.yp||(i.yp=0);var t=16;Number.isInteger(parseInt(i.options.easing))&&(t=parseInt(i.options.easing)),i.loop||(i.loop=setInterval(function(){i.xp+=(i.windowLeftPos-i.xp)/i.options.easingAmount,i.yp+=(i.windowTopPos-i.yp)/i.options.easingAmount,i.scrollingLock?(clearInterval(i.loop),i.xp=i.windowLeftPos,i.yp=i.windowTopPos,i.xp=-1*((e.pageX-i.nzOffset.left)*i.widthRatio-i.zoomWindow.width()/2),i.yp=-1*((e.pageY-i.nzOffset.top)*i.heightRatio-i.zoomWindow.height()/2),i.changeBgSize&&(i.nzHeight>i.nzWidth?("lens"===i.options.zoomType&&i.zoomLens.css("background-size",i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px"),i.zoomWindow.css("background-size",i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px")):("lens"!==i.options.zoomType&&i.zoomLens.css("background-size",i.largeWidth/i.newvaluewidth+"px "+i.largeHeight/i.newvalueheight+"px"),i.zoomWindow.css("background-size",i.largeWidth/i.newvaluewidth+"px "+i.largeHeight/i.newvaluewidth+"px")),i.changeBgSize=!1),i.zoomWindow.css("background-position",i.windowLeftPos+"px "+i.windowTopPos+"px"),i.scrollingLock=!1,i.loop=!1):Math.round(Math.abs(i.xp-i.windowLeftPos)+Math.abs(i.yp-i.windowTopPos))<1?(clearInterval(i.loop),i.zoomWindow.css("background-position",i.windowLeftPos+"px "+i.windowTopPos+"px"),i.loop=!1):(i.changeBgSize&&(i.nzHeight>i.nzWidth?("lens"===i.options.zoomType&&i.zoomLens.css("background-size",i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px"),i.zoomWindow.css("background-size",i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px")):("lens"!==i.options.zoomType&&i.zoomLens.css("background-size",i.largeWidth/i.newvaluewidth+"px "+i.largeHeight/i.newvaluewidth+"px"),i.zoomWindow.css("background-size",i.largeWidth/i.newvaluewidth+"px "+i.largeHeight/i.newvaluewidth+"px")),i.changeBgSize=!1),i.zoomWindow.css("background-position",i.xp+"px "+i.yp+"px"))},t))}else i.changeBgSize&&(i.nzHeight>i.nzWidth?("lens"===i.options.zoomType&&i.zoomLens.css("background-size",i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px"),i.zoomWindow.css("background-size",i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px")):("lens"===i.options.zoomType&&i.zoomLens.css("background-size",i.largeWidth/i.newvaluewidth+"px "+i.largeHeight/i.newvaluewidth+"px"),i.largeHeight/i.newvaluewidth<i.options.zoomWindowHeight?i.zoomWindow.css("background-size",i.largeWidth/i.newvaluewidth+"px "+i.largeHeight/i.newvaluewidth+"px"):i.zoomWindow.css("background-size",i.largeWidth/i.newvalueheight+"px "+i.largeHeight/i.newvalueheight+"px")),i.changeBgSize=!1),i.zoomWindow.css("background-position",i.windowLeftPos+"px "+i.windowTopPos+"px")},setTintPosition:function(o){var e=this,i=e.zoomLens.width(),t=e.zoomLens.height();e.nzOffset=e.$elem.offset(),e.tintpos=String(-1*(o.pageX-e.nzOffset.left-i/2)),e.tintposy=String(-1*(o.pageY-e.nzOffset.top-t/2)),e.Etoppos&&(e.tintposy=0),e.Eloppos&&(e.tintpos=0),e.Eboppos&&(e.tintposy=-1*(e.nzHeight-t-2*e.options.lensBorderSize)),e.Eroppos&&(e.tintpos=-1*(e.nzWidth-i-2*e.options.lensBorderSize)),e.options.tint&&(e.fullheight&&(e.tintposy=0),e.fullwidth&&(e.tintpos=0),e.zoomTintImage.css({left:e.tintpos+"px",top:e.tintposy+"px"}))},swaptheimage:function(e,i){var t=this,n=new Image;if(t.options.loadingIcon&&!t.spinner){var s="background: url('"+t.options.loadingIcon+"') no-repeat center;height:"+t.nzHeight+"px;width:"+t.nzWidth+"px;z-index: 2000;position: absolute; background-position: center center;";"inner"===t.options.zoomType&&(s+="top: 0px;"),t.spinner=o('<div class="ezp-spinner" style="'+s+'"></div>'),t.$elem.after(t.spinner)}else t.spinner&&t.spinner.show();t.options.onImageSwap(t.$elem),n.onload=function(){t.largeWidth=n.width,t.largeHeight=n.height,t.zoomImage=i,t.zoomWindow.css("background-size",t.largeWidth+"px "+t.largeHeight+"px"),t.swapAction(e,i)},t.setImageSource(n,i)},swapAction:function(e,i){var t=this,n=t.$elem.width(),s=t.$elem.height(),a=new Image;if(a.onload=function(){t.nzHeight=a.height,t.nzWidth=a.width,t.options.onImageSwapComplete(t.$elem),t.doneCallback()},t.setImageSource(a,e),t.currentZoomLevel=t.options.zoomLevel,t.options.maxZoomLevel=!1,"lens"===t.options.zoomType&&t.zoomLens.css("background-image",'url("'+i+'")'),"window"===t.options.zoomType&&t.zoomWindow.css("background-image",'url("'+i+'")'),"inner"===t.options.zoomType&&t.zoomWindow.css("background-image",'url("'+i+'")'),t.currentImage=i,t.options.imageCrossfade){var h=t.$elem,d=h.clone();if(t.$elem.attr("src",e),t.$elem.after(d),d.stop(!0).fadeOut(t.options.imageCrossfade,function(){o(this).remove()}),t.$elem.width("auto").removeAttr("width"),t.$elem.height("auto").removeAttr("height"),h.fadeIn(t.options.imageCrossfade),t.options.tint&&"inner"!==t.options.zoomType){var p=t.zoomTintImage,r=p.clone();t.zoomTintImage.attr("src",i),t.zoomTintImage.after(r),r.stop(!0).fadeOut(t.options.imageCrossfade,function(){o(this).remove()}),p.fadeIn(t.options.imageCrossfade),t.zoomTint.css({height:s,width:n})}t.zoomContainer.css({height:s,width:n}),"inner"===t.options.zoomType&&(t.options.constrainType||(t.zoomWrap.parent().css({height:s,width:n}),t.zoomWindow.css({height:s,width:n}))),t.options.imageCrossfade&&t.zoomWrap.css({height:s,width:n})}else t.$elem.attr("src",e),t.options.tint&&(t.zoomTintImage.attr("src",i),t.zoomTintImage.attr("height",s),t.zoomTintImage.css("height",s),t.zoomTint.css("height",s)),t.zoomContainer.css({height:s,width:n}),t.options.imageCrossfade&&t.zoomWrap.css({height:s,width:n});if(t.options.constrainType){if("height"===t.options.constrainType){var l={height:t.options.constrainSize,width:"auto"};t.zoomContainer.css(l),t.options.imageCrossfade?(t.zoomWrap.css(l),t.constwidth=t.zoomWrap.width()):(t.$elem.css(l),t.constwidth=n);var m={height:t.options.constrainSize,width:t.constwidth};"inner"===t.options.zoomType&&(t.zoomWrap.parent().css(m),t.zoomWindow.css(m)),t.options.tint&&(t.tintContainer.css(m),t.zoomTint.css(m),t.zoomTintImage.css(m))}if("width"===t.options.constrainType){var g={height:"auto",width:t.options.constrainSize};t.zoomContainer.css(g),t.options.imageCrossfade?(t.zoomWrap.css(g),t.constheight=t.zoomWrap.height()):(t.$elem.css(g),t.constheight=s);var w={height:t.constheight,width:t.options.constrainSize};"inner"===t.options.zoomType&&(t.zoomWrap.parent().css(w),t.zoomWindow.css(w)),t.options.tint&&(t.tintContainer.css(w),t.zoomTint.css(w),t.zoomTintImage.css(w))}}},doneCallback:function(){var o=this;o.options.loadingIcon&&o.spinner&&o.spinner.length&&o.spinner.hide(),o.nzOffset=o.$elem.offset(),o.nzWidth=o.$elem.width(),o.nzHeight=o.$elem.height(),o.currentZoomLevel=o.options.zoomLevel,o.widthRatio=o.largeWidth/o.nzWidth,o.heightRatio=o.largeHeight/o.nzHeight,"window"===o.options.zoomType&&(o.nzHeight<o.options.zoomWindowHeight/o.heightRatio?o.lensHeight=o.nzHeight:o.lensHeight=String(o.options.zoomWindowHeight/o.heightRatio),o.nzWidth<o.options.zoomWindowWidth?o.lensWidth=o.nzWidth:o.lensWidth=o.options.zoomWindowWidth/o.widthRatio,o.zoomLens&&o.zoomLens.css({width:o.lensWidth,height:o.lensHeight}))},getCurrentImage:function(){var o=this;return o.zoomImage},getGalleryList:function(){var e=this;return e.gallerylist=[],e.options.gallery?o("#"+e.options.gallery+" a").each(function(){var i="";o(this).data(e.options.attrImageZoomSrc)?i=o(this).data(e.options.attrImageZoomSrc):o(this).data("image")&&(i=o(this).data("image")),i===e.zoomImage?e.gallerylist.unshift({href:""+i,title:o(this).find("img").attr("title")}):e.gallerylist.push({href:""+i,title:o(this).find("img").attr("title")})}):e.gallerylist.push({href:""+e.zoomImage,title:o(this).find("img").attr("title")}),e.gallerylist},changeZoomLevel:function(o){var e=this;e.scrollingLock=!0,e.newvalue=parseFloat(o).toFixed(2);var i=e.newvalue,t=e.largeHeight/(e.options.zoomWindowHeight/e.nzHeight*e.nzHeight),n=e.largeWidth/(e.options.zoomWindowWidth/e.nzWidth*e.nzWidth);"inner"!==e.options.zoomType&&(i>=t?(e.heightRatio=e.largeHeight/t/e.nzHeight,e.newvalueheight=t,e.fullheight=!0):(e.heightRatio=e.largeHeight/i/e.nzHeight,e.newvalueheight=i,e.fullheight=!1),i>=n?(e.widthRatio=e.largeWidth/n/e.nzWidth,e.newvaluewidth=n,e.fullwidth=!0):(e.widthRatio=e.largeWidth/i/e.nzWidth,e.newvaluewidth=i,e.fullwidth=!1),"lens"===e.options.zoomType&&(i>=t?(e.fullwidth=!0,e.newvaluewidth=t):(e.widthRatio=e.largeWidth/i/e.nzWidth,e.newvaluewidth=i,e.fullwidth=!1))),"inner"===e.options.zoomType&&(t=parseFloat(e.largeHeight/e.nzHeight).toFixed(2),n=parseFloat(e.largeWidth/e.nzWidth).toFixed(2),i>t&&(i=t),i>n&&(i=n),i>=t?(e.heightRatio=e.largeHeight/i/e.nzHeight,i>t?e.newvalueheight=t:e.newvalueheight=i,e.fullheight=!0):(e.heightRatio=e.largeHeight/i/e.nzHeight,i>t?e.newvalueheight=t:e.newvalueheight=i,e.fullheight=!1),i>=n?(e.widthRatio=e.largeWidth/i/e.nzWidth,i>n?e.newvaluewidth=n:e.newvaluewidth=i,e.fullwidth=!0):(e.widthRatio=e.largeWidth/i/e.nzWidth,e.newvaluewidth=i,e.fullwidth=!1));var s=!1;"inner"===e.options.zoomType&&(e.nzWidth>=e.nzHeight&&(e.newvaluewidth<=n?s=!0:(s=!1,e.fullheight=!0,e.fullwidth=!0)),e.nzHeight>e.nzWidth&&(e.newvaluewidth<=n?s=!0:(s=!1,e.fullheight=!0,e.fullwidth=!0))),"inner"!==e.options.zoomType&&(s=!0),s&&(e.zoomLock=0,e.changeZoom=!0,e.options.zoomWindowHeight/e.heightRatio<=e.nzHeight&&(e.currentZoomLevel=e.newvalueheight,"lens"!==e.options.zoomType&&"inner"!==e.options.zoomType&&(e.changeBgSize=!0,e.zoomLens.css("height",String(e.options.zoomWindowHeight/e.heightRatio)+"px")),("lens"===e.options.zoomType||"inner"===e.options.zoomType)&&(e.changeBgSize=!0)),e.options.zoomWindowWidth/e.widthRatio<=e.nzWidth&&("inner"!==e.options.zoomType&&e.newvaluewidth>e.newvalueheight&&(e.currentZoomLevel=e.newvaluewidth),"lens"!==e.options.zoomType&&"inner"!==e.options.zoomType&&(e.changeBgSize=!0,e.zoomLens.css("width",String(e.options.zoomWindowWidth/e.widthRatio)+"px")),("lens"===e.options.zoomType||"inner"===e.options.zoomType)&&(e.changeBgSize=!0)),"inner"===e.options.zoomType&&(e.changeBgSize=!0,e.nzWidth>e.nzHeight?e.currentZoomLevel=e.newvaluewidth:e.nzHeight>=e.nzWidth&&(e.currentZoomLevel=e.newvaluewidth))),e.setPosition(e.currentLoc)},closeAll:function(){var o=this;o.zoomWindow&&o.zoomWindow.hide(),o.zoomLens&&o.zoomLens.hide(),o.zoomTint&&o.zoomTint.hide()},changeState:function(o){var e=this;"enable"===o&&(e.options.zoomEnabled=!0),"disable"===o&&(e.options.zoomEnabled=!1)},responsiveConfig:function(e){return e.respond&&e.respond.length>0?o.extend({},e,this.configByScreenWidth(e)):e},configByScreenWidth:function(i){var t=o(e).width(),n=o.grep(i.respond,function(o){var e=o.range.split("-");return t>=e[0]&&t<=e[1]});return n.length>0?n[0]:i}};o.fn.ezPlus=function(e){return this.each(function(){var i=Object.create(n);i.init(e,this),o.data(this,"ezPlus",i)})},o.fn.ezPlus.options={attrImageZoomSrc:"data-zoom-image",borderColour:"#888",borderSize:4,constrainSize:!1,constrainType:!1,containLensZoom:!1,cursor:"inherit",debug:!1,easing:!1,easingAmount:12,enabled:!0,gallery:!1,galleryActiveClass:"zoomGalleryActive",gallerySelector:!1,galleryItem:"a",imageCrossfade:!1,lensBorderColour:"#000",lensBorderSize:1,lensColour:"white",lensFadeIn:!1,lensFadeOut:!1,lensOpacity:.4,lensShape:"square",lensSize:200,lenszoom:!1,loadingIcon:!1,mantainZoomAspectRatio:!1,maxZoomLevel:!1,minZoomLevel:1.01,onComplete:o.noop,onDestroy:o.noop,onImageClick:o.noop,onImageSwap:o.noop,onImageSwapComplete:o.noop,onShow:o.noop,onZoomedImageLoaded:o.noop,preloading:1,respond:[],responsive:!0,scrollZoom:!1,scrollZoomIncrement:.1,showLens:!0,tint:!1,tintColour:"#333",tintOpacity:.4,touchEnabled:!0,zoomActivation:"hover",
zoomContainerAppendTo:"body",zoomId:-1,zoomLevel:1,zoomTintFadeIn:!1,zoomTintFadeOut:!1,zoomType:"window",zoomWindowAlwaysShow:!1,zoomWindowBgColour:"#fff",zoomWindowFadeIn:!1,zoomWindowFadeOut:!1,zoomWindowHeight:400,zoomWindowOffsetX:0,zoomWindowOffsetY:0,zoomWindowPosition:1,zoomWindowWidth:400,zoomEnabled:!0,zIndex:999}}(jQuery,window,document);