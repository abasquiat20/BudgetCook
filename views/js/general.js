/******************************************************
        Script: GENERAL
******************************************************/


/* ***************** CSS BROWSER SELECTOR */

/* ........................... */
function css_browser_selector(u){var ua=u.toLowerCase(),is=function(t){return ua.indexOf(t)>-1},g='gecko',w='webkit',s='safari',o='opera',m='mobile',h=document.documentElement,b=[(!(/opera|webtv/i.test(ua))&&/msie\s(\d)/.test(ua))?('ie ie'+RegExp.$1):is('firefox/2')?g+' ff2':is('firefox/3.5')?g+' ff3 ff3_5':is('firefox/3.6')?g+' ff3 ff3_6':is('firefox/3')?g+' ff3':is('gecko/')?g:is('opera')?o+(/version\/(\d+)/.test(ua)?' '+o+RegExp.$1:(/opera(\s|\/)(\d+)/.test(ua)?' '+o+RegExp.$2:'')):is('konqueror')?'konqueror':is('blackberry')?m+' blackberry':is('android')?m+' android':is('chrome')?w+' chrome':is('iron')?w+' iron':is('applewebkit/')?w+' '+s+(/version\/(\d+)/.test(ua)?' '+s+RegExp.$1:''):is('mozilla/')?g:'',is('j2me')?m+' j2me':is('iphone')?m+' iphone':is('ipod')?m+' ipod':is('ipad')?m+' ipad':is('mac')?'mac':is('darwin')?'mac':is('webtv')?'webtv':is('win')?'win'+(is('windows nt 6.0')?' vista':''):is('freebsd')?'freebsd':(is('x11')||is('linux'))?'linux':'','js']; c = b.join(' '); h.className += ' '+c; return c;}; css_browser_selector(navigator.userAgent);


/* ******************************* jQuery */

/* ................... PLUGINS */
// Cookies
(function($){$.cookie = function(key, value, options) {if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {options = $.extend({}, options);if (value === null || value === undefined) {options.expires = -1;}if (typeof options.expires === 'number') {var days = options.expires, t = options.expires = new Date();t.setDate(t.getDate() + days);}value = String(value);return (document.cookie = [encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),options.expires ? '; expires=' + options.expires.toUTCString() : '',options.path    ? '; path=' + options.path : '',options.domain  ? '; domain=' + options.domain : '',options.secure  ? '; secure' : ''].join(''));}options = value || {};var decode = options.raw ? function(s) { return s; } : decodeURIComponent;var pairs = document.cookie.split('; ');for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {if (decode(pair[0]) === key) return decode(pair[1] || '');}return null;};})(jQuery);

// Expander
(function(c){c.expander={version:"1.4.2",defaults:{slicePoint:100,preserveWords:true,widow:4,expandText:"read more",expandPrefix:"&hellip; ",expandAfterSummary:false,summaryClass:"summary",detailClass:"details",moreClass:"read-more",lessClass:"read-less",collapseTimer:0,expandEffect:"fadeIn",expandSpeed:250,collapseEffect:"fadeOut",collapseSpeed:200,userCollapse:true,userCollapseText:"read less",userCollapsePrefix:" ",onSlice:null,beforeExpand:null,afterExpand:null,onCollapse:null}};c.fn.expander=
function(l){function J(a,d){var g="span",h=a.summary;if(d){g="div";if(x.test(h)&&!a.expandAfterSummary)h=h.replace(x,a.moreLabel+"$1");else h+=a.moreLabel;h='<div class="'+a.summaryClass+'">'+h+"</div>"}else h+=a.moreLabel;return[h,"<",g+' class="'+a.detailClass+'"',">",a.details,"</"+g+">"].join("")}function K(a){var d='<span class="'+a.moreClass+'">'+a.expandPrefix;d+='<a href="#">'+a.expandText+"</a></span>";return d}function y(a,d){if(a.lastIndexOf("<")>a.lastIndexOf(">"))a=a.slice(0,a.lastIndexOf("<"));
if(d)a=a.replace(L,"");return c.trim(a)}function z(a,d){d.stop(true,true)[a.collapseEffect](a.collapseSpeed,function(){d.prev("span."+a.moreClass).show().length||d.parent().children("div."+a.summaryClass).show().find("span."+a.moreClass).show()})}function M(a,d,g){if(a.collapseTimer)A=setTimeout(function(){z(a,d);c.isFunction(a.onCollapse)&&a.onCollapse.call(g,false)},a.collapseTimer)}var v="init";if(typeof l=="string"){v=l;l={}}var o=c.extend({},c.expander.defaults,l),N=/^<(?:area|br|col|embed|hr|img|input|link|meta|param).*>$/i,
L=o.wordEnd||/(&(?:[^;]+;)?|[a-zA-Z\u00C0-\u0100]+)$/,B=/<\/?(\w+)[^>]*>/g,C=/<(\w+)[^>]*>/g,D=/<\/(\w+)>/g,x=/(<\/[^>]+>)\s*$/,O=/^<[^>]+>.?/,A;l={init:function(){this.each(function(){var a,d,g,h,m,i,p,w,E=[],t=[],q={},r=this,f=c(this),F=c([]),b=c.meta?c.extend({},o,f.data()):o;i=!!f.find("."+b.detailClass).length;var s=!!f.find("*").filter(function(){return/^block|table|list/.test(c(this).css("display"))}).length,u=(s?"div":"span")+"."+b.detailClass,G="span."+b.moreClass,P=b.expandSpeed||0,n=c.trim(f.html());
c.trim(f.text());var e=n.slice(0,b.slicePoint);if(!c.data(this,"expander")){c.data(this,"expander",true);c.each(["onSlice","beforeExpand","afterExpand","onCollapse"],function(j,k){q[k]=c.isFunction(b[k])});e=y(e);for(d=e.replace(B,"").length;d<b.slicePoint;){a=n.charAt(e.length);if(a=="<")a=n.slice(e.length).match(O)[0];e+=a;d++}e=y(e,b.preserveWords);h=e.match(C)||[];m=e.match(D)||[];g=[];c.each(h,function(j,k){N.test(k)||g.push(k)});h=g;d=m.length;for(a=0;a<d;a++)m[a]=m[a].replace(D,"$1");c.each(h,
function(j,k){var H=k.replace(C,"$1"),I=c.inArray(H,m);if(I===-1){E.push(k);t.push("</"+H+">")}else m.splice(I,1)});t.reverse();if(i){i=f.find(u).remove().html();e=f.html();n=e+i;a=""}else{i=n.slice(e.length);a=c.trim(i.replace(B,""));if(a===""||a.split(/\s+/).length<b.widow)return;a=t.pop()||"";e+=t.join("");i=E.join("")+i}b.moreLabel=f.find(G).length?"":K(b);if(s)i=n;e+=a;b.summary=e;b.details=i;b.lastCloseTag=a;if(q.onSlice)b=(g=b.onSlice.call(r,b))&&g.details?g:b;s=J(b,s);f.html(s);p=f.find(u);
w=f.find(G);p.hide();w.find("a").unbind("click.expander").bind("click.expander",function(j){j.preventDefault();w.hide();F.hide();q.beforeExpand&&b.beforeExpand.call(r);p.stop(false,true)[b.expandEffect](P,function(){p.css({zoom:""});q.afterExpand&&b.afterExpand.call(r);M(b,p,r)})});F=f.find("div."+b.summaryClass);b.userCollapse&&!f.find("span."+b.lessClass).length&&f.find(u).append('<span class="'+b.lessClass+'">'+b.userCollapsePrefix+'<a href="#">'+b.userCollapseText+"</a></span>");f.find("span."+
b.lessClass+" a").unbind("click.expander").bind("click.expander",function(j){j.preventDefault();clearTimeout(A);j=c(this).closest(u);z(b,j);q.onCollapse&&b.onCollapse.call(r,true)})}})},destroy:function(){if(this.data("expander")){this.removeData("expander");this.each(function(){var a=c(this),d=c.meta?c.extend({},o,a.data()):o,g=a.find("."+d.detailClass).contents();a.find("."+d.moreClass).remove();a.find("."+d.summaryClass).remove();a.find("."+d.detailClass).after(g).remove();a.find("."+d.lessClass).remove()})}}};
l[v]&&l[v].call(this);return this};c.fn.expander.defaults=c.expander.defaults})(jQuery);

/* ................. FUNCTIONS */
$.fn.exists         = function() {return $(this).length > 0;}

$.fn.outerHTML      = function() {return $('<div>').append(this.eq(0).clone()).html();}

$.fn.numsOnly       = function() {return this.each(function() {$(this).keydown(function(e) {var key = e.charCode || e.keyCode || 0;return (key == 8 || key == 9 || key == 16 || key == 36  || key == 46 || (key >= 37 && key <= 40) || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));});});};

$.fn.digit          = function() {return this.each(function() {$(this).text($(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));});}

$.extend({
	URLEncode: function(c){var o='';var x=0;c=c.toString();var r=/(^[a-zA-Z0-9_.]*)/;
		while(x<c.length){var m=r.exec(c.substr(x));
	    if(m!=null && m.length>1 && m[1]!=''){o+=m[1];x+=m[1].length;
	    }else{if(c[x]==' ')o+='+';else{var d=c.charCodeAt(x);var h=d.toString(16);
	    o+='%'+(h.length<2?'0':'')+h.toUpperCase();}x++;}}return o;},
	URLDecode: function(s){var o=s;var binVal,t;var r=/(%[^%]{2})/;
	  	while((m=r.exec(o))!=null && m.length>1 && m[1]!=''){b=parseInt(m[1].substr(1),16);
	    t=String.fromCharCode(b);o=o.replace(m[1],t);}return o;},
    relativeURL: function() {
        var url = window.location,
            href = url.href,
            protocol = url.protocol,
            hostname = url.hostname,
            port = url.port ? ':'+url.port : '';
        return href.replace(protocol+'//' + hostname + port, '');
    }
});

/* *************************** PREDEFINED */

/* ............ General Memory */
$.anam = {
    fn: {
        callJS: function(params) {
            switch(params.fn) {
                case 'payment':
                    var method = params.method ? params.method : null,
                        data = {url: params.url, uri: params.uri, method: method, caller: params.caller ? params.caller : null};
                    break;
                case 'access':
                    var data = {step: params && params.step ? params.step : 'login', caller: params && params.caller ? params.caller : null};
                    break;
                case 'wizard':
                    var data = params;
                    break;
            }

            var go = function() {$.anam.fn[params.fn](data); if (params && params.cb) {params.cb();}};
            
            if ($.anam.fn[params.fn]) {go();}
            else {$.getScript('/js/'+params.fn+'.js', function(script, textStatus, jqxhr) {if (textStatus == 'success' && jqxhr.status == 200) {go();}});}
        }
    },
    data: {
        tooltips: {
            active: {},
            content: {}
        },
        flags: {}
    }
}

/* ........... Calling scripts */
$.getScript('/js/tooltip.js');

/* ......... Browser detection */
var b = $.browser, v = b.version, ua = navigator.userAgent, br = null;

/* ........... Cursor position */
var moveXPos, moveYPos, curXPos = 0, curYPos = 0;

$(document).mousemove(function(e) {
	if (e.pageX > curXPos) {moveXPos = "right"} else if (e.pageX < curXPos) {moveXPos = "left"}
	if (e.pageY > curYPos) {moveYPos = "down"} else if (e.pageY < curYPos) {moveYPos = "up"}
	curXPos = e.pageX; curYPos = e.pageY;
});

/* ....... Viewport dimensions */
var vPortW, vPortH = null;

function vPortDims() {vPortW = $(window).width(); vPortH = $(window).height();}

vPortDims(); $(window).resize(function() {vPortDims();});

/* .......... Viewport Details */
var viewportResized = false; viewportPx = $(window).width() * $(window).height();

$(window).resize(function() {
	if (viewportPx != $(window).width() * $(window).height()) {
		viewportResized = true;
	}
});

/* ............... Screen Type */
var screenTypeWide;

if (vPortW > 599) {screenTypeWide = true} else {screenTypeWide = false}

$(window).resize(function() {
	if (vPortW > 599) {screenTypeWide = true} else {screenTypeWide = false}
});

/* ............ Stop Functions */
function stopEvent(e) {
   if (!e) {
      e = window.event;
   }
   if(e) {
       if (e.stopPropagation) e.stopPropagation();
       e.cancelBubble = true;
       if (e.preventDefault) e.preventDefault();
       e.returnValue = false;
   }
   return false;
}

function stopBubble(e) {
   if(!e) {
      e = window.event;
   }
   if(e) {
       if (e.stopPropagation) e.stopPropagation();
       e.cancelBubble = true;
   }
}
/* ............ Delay Function */
var delay = (function() {
	var timer = 0;
	return function(callback, ms) {
		clearTimeout (timer);
		timer = setTimeout(callback, ms);
	};
}) ();

/* ............... Device Type */
if (!$("html").hasClass("mobile")) {$("html").addClass("desktop")}

/* ................. Tap Event */
if ($("html").hasClass("mobile")) {var tap = "touchend"} else {var tap = "click"}

/* ... iPhone/iPod Address Bar */
if ($("html").hasClass("ipod") || $("html").hasClass("iphone")) {
	window.addEventListener("load", function() {setTimeout(function() {window.scrollTo(0, 1);}, 0);});
}


/* **************************** VARIABLES */

var

/* .................... Common */
ismobile = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i),

scrollTop, placeholder,

/* .................... Search */
searchModified = false, filterModified = false,

/* .............. Ajax Loading */
loadedPages = 1,

/* ........... System Response */
sys, sys_object, sys_message,

/* ............. URL Shortener */
APIlocation			= "https://www.edamam.com/shorten",
format    			= "format=jsonp",
action				= "action=shorturl",
signature			= "signature=b8d439f853",
callbackLink		= "callback=shortenedURL",

/* ............. Lightbox Flag */
lboxFlag = false,

/* .................... Mobile */
touchMoveFlag = false;

/* ...................... iPad */
// if ($("html").hasClass("ipad")) {var docScrollKb;}
var paramURL;
/* ................... Notices */
notices = new Array();
// FRONT-END MESSAGES
notices['email-empty-err'] 					= 'Please enter a valid email';
notices['email-syntax-err'] 				= 'Please enter a valid email';
notices['email-taken-err'] 					= 'This email is already registered';
notices['oldpass-empty-err'] 				= 'Please enter your current password';
notices['oldpass-wrong-err'] 				= 'Wrong password';
notices['newpass-empty-err'] 				= 'Please enter your new password';
notices['newpass-confirm-err'] 				= 'Please confirm your new password';
notices['pass-empty-err'] 					= 'Please enter a password with 6 or more characters';
notices['pass-short-err'] 					= 'Your password must be at least 6 characters long';
notices['yourpass-empty-err'] 				= 'Please enter your password';
notices['username-empty-err'] 				= 'Please enter your user name';
notices['username-syntax-err'] 				= 'The user name should be at least 5 characters long, using only letters, numbers and the "." and "_" symbols with no spaces.';
notices['username-taken-err'] 				= 'This user name is already taken';
notices['info_email_confirmed'] 			= 'Thank you for confirming your email address';
// BACK-END MESSAGES
// Invisible
notices['err_missing_param_token'] 			= 'Missing parameter: token';
notices['err_facebook_no_info'] 			= 'Problem getting data from Facebook';
notices['info_facebook_got_info'] 			= 'Successfully obtained information from Facebook';
notices['info_nop'] 						= 'Nothing to do';
notices['info_changes_saved'] 				= 'Your changes have been saved';
notices['info_conf_email_sent'] 			= 'Email address will be changed when confirmed. Confirmation email is sent.';
notices['info_changes_saved_conf_sent'] 	= 'Email address will be changed when confirmed. Confirmation email is sent.';
notices['info_welcome'] 					= 'Welcome to Edamam!';
notices['err_no_account'] 					= ['You don\'t seem to have an account with us. Please sign up!'];  
notices['err_ext_auth_failed'] 			= ['<span style="line-height:27px;">The link or redirect you used has expired. Please go <a id="param-url" href="">back to Validic</a> and click Connect again</span>', 'popup'];

// Visible (top white line)
notices['err_cant_send_welcome'] 			= ['We couldn\'t send a Welcome email', 'topline'];
notices['info_welcome_back'] 				= ['Your account has been re-activated', 'topline'];
notices['info_welcome_wizard'] 			= ['Analyze the nutrition of your home cooked meals. Just type the ingredient list in natural language or copy and paste it in the space below', 'topline'];

// Visible (inline orange warning)
notices['err_missing_email_addr'] 			= ['Missing email address', 'inline'];
notices['err_invalid_email_addr'] 			= ['Invalid email address', 'inline'];
notices['err_missing_password'] 			= ['Password is missing', 'inline'];
notices['err_pass_too_short'] 				= ['New password is too short', 'inline'];
notices['err_access_denied_sim_user'] 		= ['There is an existing user with this email but it\'s not connected to Facebook', 'inline'];
notices['err_access_denied'] 				= ['Wrong e-mail or password - please try again!', 'inline'];
notices['err_existing_account'] 			= ['The Facebook account you are trying to activate is taken by another user', 'popup'];
notices['err_similar_account'] 		     	= ['There is no account with this Facebook, <br>but we have account with the same email', 'inline'];
notices['err_fb_no_email']                  = ['There is no account with this Facebook <br>and no email address from Facebook', 'inline'];
// Visible (popup with OK button)
notices['err_facebook_error'] 				= ['Couldn\'t obtain information from Facebook', 'popup'];
notices['err_facebook_bad_state'] 			= ['Invalid Facebook state', 'popup'];
notices['err_bad_token'] 					= ['Bad or expired token', 'popup'];
notices['err_account_cant_save'] 			= ['Problem updating the account. Please try again later', 'popup'];
notices['err_old_account_info'] 			= ['Concurrent changes', 'popup'];
notices['err_conf_email_not_sent'] 			= ['Failed to send the confirmation email', 'popup'];
notices['err_conf_not_sent_changes_saved'] 	= ['Failed to send the confirmation email', 'popup'];
notices['err_payment']                      = ['There was a problem with the payment process. Please try again later!', 'popup'];


/* **************************** FUNCTIONS */
function firstToUpperCase( str ) {
    return str.substr(0, 1).toUpperCase() + str.substr(1);
}
/* ............. URL Shortener */
function shortenedURL(data) {
	//var url = data["shorturl"],
	var url = data,
		ttl,
		img,
		src,
		nfo;

	if ($("#page-recipe").exists()) {
		ttl = $(".main-box h1").text() || $('#recipe-title').text();
		ttl = ttl.replace("&", "%26").replace("+", "%2B").replace("|", "%7C");
    img = $(".main-box img.block").attr("src") || $('#recipe-images img').attr('src');
		nfo = "Found it on Edamam! See this recipe and more on edamam.com or download the app for iPhone or Android!";
		src = $(".source-link span").text();
		src = src.replace("&", "%26").replace("+", "%2B").replace("|", "%7C");
		dsc = ttl+" from "+src+", found @Edamam!";
		dscs = 'I saved the "'+ttl+'" from "'+src+'" to My Recipes on Edamam. Check it out!'
	}
	else {
	  dscs = '';
		ttl = document.title;
		img = "http://edamam.com/images/edamam.jpg";
		nfo = "Find recipes and more on edamam.com or download the app for iPhone or Android!";
		dsc = $("#search-field").val()+" Recipes. Found @Edamam!";
		dsc = firstToUpperCase(dsc);
    dsc = dsc.replace("&", "%26").replace("+", "%2B").replace("|", "%7C"); 
	}

	ttl = ttl.replace("&", "%26").replace("+", "%2B").replace("|", "%7C");
	dsc = dsc.replace("&", "%26").replace("+", "%2B").replace("|", "%7C");
	dscs = dscs.replace("&", "%26").replace("+", "%2B").replace("|", "%7C");

	var pin = $.URLEncode(document.location.href);
	
    $("#share-box").find(".via-email a").attr("href", "mailto:?subject="+ttl+"&body="+url+"%0A%0AFound it on Edamam!");
    $("#share-box").find(".via-pinterest a").attr("href", "http://pinterest.com/pin/create/button/?url="+pin+"&media="+img+"&title="+ttl+"&description="+dsc);
    $("#share-box").find(".via-twitter a").attr("href", 'https://twitter.com/share?text='+ttl+' '+url+' Found it on the @EdamamCo site!&url=""');
    $("#share-box").find(".via-google a").attr("href", 'https://plus.google.com/share?url='+url);

    $("#share-box .via-facebook a, #header-menu li.social a.via-facebook").live(tap, function() {
  		FB.ui({
  			method: 'feed',
  			name: ttl,
  			link: url,
  			picture: img,
  			caption: 'www.edamam.com',
  			description: nfo
  		});
    });

    $(".bookmark-add").live(tap, function() {
  		FB.ui({
  			method: 'feed',
  			name: ttl,
  			link: url,
  			picture: img,
  			caption: 'www.edamam.com',
  			description: dscs 
  		});
    });

    $("#search-results .add-bookmark").live(tap, function() {
    
      url = 'https://www.edamam.com'+$(this).parents('li').children('.box').find('a').attr('href');
  		ttl = $(this).parents('li').children('.box').find('.title').text();
  		img = $(this).parents('li').children('.box').find('img').attr("src");
      src = $(this).parents('li').children('.box').children('.inner').children('.source').find('img').attr("alt");
        
      dscs = 'I saved the "'+ttl+'" from "'+src+'" to My Recipes on Edamam. Check it out!'

  		FB.ui({
  			method: 'feed',
  			name: ttl,
  			link: url,
  			picture: img,
  			caption: 'www.edamam.com',
  			description: dscs 
  		});

    });    
    
    $("#header-menu ul li.social .layout .holder a").remove();
    
  	$("#share-box ul li").each(function(i) {
  		var link = $(this).find("a").clone().attr("class", $(this).attr("class"));
  		$("#header-menu ul li.social .layout .holder").append(link);
  	});
}

function getJSON(url){
	var s = document.createElement('script');
	s.setAttribute('src',url);
	document.getElementsByTagName('head')[0].appendChild(s);
}

function shortenFunc(url) {
	var longURL   = url;
	var apiCall   = APIlocation
	            +"?"+ signature
	            +"&"+ format
	            +"&"+ action
	            +"&" + callbackLink
	            +"&url=" + encodeURIComponent( longURL );

	apiCall = apiCall.replace('#', '%23');
	getJSON(apiCall);
}

/* ................ Google Plus ..............*/

function googleText(){
  $(".abcRioButtonContents").find("span").text('Connect with Google'); 
}

function googleTextLogin(){
  $(".abcRioButtonContents").find("span").text('Log In with Google');
}
/* ................ Navigation */
// Показване на банер и връзка към App за сваляне

var loc       = window.location;
var pathName  = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);  
var exPage    = pathName.slice(1, -1);
        
/**
 * browser-deeplink v0.1
 *
 * Author: Hampus Ohlsson, Nov 2014
 * GitHub: http://github.com/hampusohlsson/browser-deeplink
 *
 * MIT License
 */
 
(function (root, factory) {
    if ( typeof define === 'function' && define.amd ) {
        define("deeplink", factory(root));
    } else if ( typeof exports === 'object' ) {
        module.exports = factory(root);
    } else {
        root["deeplink"] = factory(root);
    }
})(window || this, function(root) {
 
    "use strict"

    /**
     * Cannot run without DOM or user-agent
     */
    if (!root.document || !root.navigator) {
        return;
    }

    /**
     * Set up scope variables and settings
     */
    var timeout;
    var settings = {};
    var defaults = {
        iOS: {},
        android: {},
        fallback: true,
        delay: 1000,
        delta: 500
    }

    /**
     * Merge defaults with user options
     * @private
     * @param {Object} defaults Default settings
     * @param {Object} options User options
     * @returns {Object} Merged values of defaults and options
     */
    var extend = function(defaults, options) {
        var extended = {};
        for(var key in defaults) {
            extended[key] = defaults[key];
        };
        for(var key in options) {
            extended[key] = options[key];
        };
        return extended;
    };

    /**
     * Generate the app store link for iOS / Apple app store
     *
     * @private
     * @returns {String} App store itms-apps:// link 
     */
    var getStoreURLiOS = function() {
        var baseurl = "itms-apps://itunes.apple.com/app/";
        var name = settings.iOS.appName;
        var id = settings.iOS.appId; 
        return (id && name) ? (baseurl + name + "/id" + id + "?mt=8") : null;
    }

    /**
     * Generate the app store link for Google Play
     *
     * @private
     * @returns {String} Play store https:// link
     */
    var getStoreURLAndroid = function() {
        var baseurl = "market://details?id=";
        var id = settings.android.appId;
        return id ? (baseurl + id) : null;        
    }

    /**
     * Get app store link, depending on the current platform
     *
     * @private
     * @returns {String} url
     */
    var getStoreLink = function() {
        var linkmap = {
            "ios": settings.iOS.storeUrl || getStoreURLiOS(),
            "android": settings.android.storeUrl || getStoreURLAndroid()
        }

        return linkmap[settings.platform];
    }

    /**
     * Check if the user-agent is Android
     *
     * @private
     * @returns {Boolean} true/false
     */
    var isAndroid = function() {
        return navigator.userAgent.match('Android');
    }

    /**
     * Check if the user-agent is iPad/iPhone/iPod
     *
     * @private
     * @returns {Boolean} true/false
     */
    var isIOS = function() {
        return navigator.userAgent.match('iPhone') || 
               navigator.userAgent.match('iPad') ||
               navigator.userAgent.match('iPod');
    }

    /**
     * Check if the user is on mobile
     *
     * @private
     * @returns {Boolean} true/false
     */
    var isMobile = function() {
        return isAndroid() || isIOS();
    }

    /**
     * Timeout function that tries to open the app store link.
     * The time delta comparision is to prevent the app store
     * link from opening at a later point in time. E.g. if the 
     * user has your app installed, opens it, and then returns 
     * to their browser later on.
     *
     * @private
     * @param {Integer} Timestamp when trying to open deeplink
     * @returns {Function} Function to be executed by setTimeout
     */
    var openAppStore = function(ts) {
        return function() {
            var link = getStoreLink();
            var wait = settings.delay + settings.delta;
            if (typeof link === "string" && (Date.now() - ts) < wait) {
                window.location.href = link;
                //alert(link); //https
                $.cookie("openStoreLink", 'opened', {path: '/'});
            }
            
        }
    }

    /**
     * The setup() function needs to be run before deeplinking can work,
     * as you have to provide the iOS and/or Android settings for your app.
     *
     * @public
     * @param {object} setup options
     */
    var setup = function(options) {
        settings = extend(defaults, options);

        if (isAndroid()) settings.platform = "android";
        if (isIOS()) settings.platform = "ios";
    }

    /**
     * Tries to open your app URI through a hidden iframe.
     *
     * @public
     * @param {String} Deeplink URI
     */
    var open = function(uri) {
        if (!isMobile()) {
            return;
        }
        
        if (isAndroid() && !navigator.userAgent.match(/Firefox/)) {
            var matches = uri.match(/([^:]+):\/\/(.+)$/i);
            uri = "intent://" + matches[2] + "#Intent;scheme=" + matches[1];
            uri += ";package=" + settings.android.appId + ";end";
        }

        if (settings.fallback) {
            timeout = setTimeout(openAppStore(Date.now()), settings.delay);
        }
        
        var iframe = document.createElement("iframe");
        iframe.onload = function() {
            clearTimeout(timeout);
            iframe.parentNode.removeChild(iframe);
            window.location.href = uri; 
        };

        iframe.src = uri;
        iframe.setAttribute("style", "display:none;");
        document.body.appendChild(iframe);
        //alert(uri); //edamam-search
    }

    // Public API
    return {
        setup: setup,
        open: open
    };

});

  var pathname = 'edamam-search:/'+window.location.pathname; // Returns path only
  var urlpath  = window.location.href;     // Returns full URL
  var device = 'all';
  var wizpath = 'all';
  var exPagePath = 'all';
  
  deeplink.setup({
        iOS: {
            appId: "516902296",
            appName: "edamam",
            storeUrl: urlpath,
        },
        android: {
            appId: "com.edamam.recipesearch",
            storeUrl: urlpath,
        } 
  });

  if (navigator.userAgent.match(/(Pinterest\/Android)/)) {
    device = "PinterestAndroid";  
  }        

  if(($(location).attr('pathname')) == '/website/wizard.jsp'){
    wizpath = 'wizard';
  }

  if(exPage == 'about'){
    exPagePath = 'about';
  }

  window.onload = function() {
    if (($.cookie("openStoreLink") != 'opened') && (device != 'PinterestAndroid') && (exPagePath != 'about') && (wizpath != 'wizard')) {
        deeplink.open(pathname);  
    }
  }        

  //alert($.cookie("openStoreLink"));
  
function mobile(){
  var downloadLink,
      style;
  var ua = navigator.userAgent;
  var checker = {
      iphone: ua.match(/(iPhone|iPad|iPod)/),
      android: ua.match(/Android/)
  };
  
  function StartOS(){
    if (vPortW < 480) {
      $("#top-line, #account-box").css("top", "101px");
      $("section #main").css("padding-top", "66px");  
      $("#wrapper").css("padding-top", "60px");   
      style = "small";  
    } else if(vPortW < 768){
      $("#top-line, #account-box").css("top", "83px");
      $("section #main").css("padding-top", "82px");     
      style = "480";  
    } else if(vPortW < 1024){
      $("#top-line, #account-box").css("top", "117px");
      $("section #main").css("padding-top", "116px");     
      style = "768";
    } else {
      $("#top-line, #account-box").css("top", "117px");
      $("section #main").css("padding-top", "116px");    
      style = "all";
    }
    
    var code = '<div class="mobile-banner">'
              +'  <div class="mobile-content-'+style+'">'
              +'    <div id="view-banner" class="view-'+style+'">View in</div>'
              +'    <div id="title-banner" class="title-'+style+'">"Recipes and Nutrition"</div>'
              +'    <div id="by-banner" class="by-'+style+'">by Edamam</div>'
              +'    <div id="image-banner" class="image-'+style+'"></div>'
              +'    <div id="close-banner" class="close-'+style+'"></div>'
              +'  </div>'
              +'</div>';
  
    $("header").css("height", "auto");
    
  	$("#close-banner").live(tap, function(e) {
  		if (!touchMoveCheck(e)) {
        $( ".mobile-banner" ).fadeOut( "slow", function() {
          $.cookie("mobileBanner", 'closed', {expires: 1, path: '/'});
          $("header").css("height", "51px");
          $("#top-line, #account-box").css("top", "51px");
          $("section #main").css("padding-top", "50px");
          $("#wrapper").css("padding-top", "30px");
        });
  			stopEvent(e);
  		}
  	}); 
  	
  	$("header").prepend(code);
            
  }

  //var pathname = 'edamam-search:/'+window.location.pathname; // Returns path only
  //var urlpath  = window.location.href;     // Returns full URL
  
  // Избор на операционната система
  if ($.cookie("mobileBanner") != 'closed') {
    
    if (checker.android){
        StartOS();
        downloadLink = "http://play.google.com/store/apps/details?id=com.edamam.recipesearch";      
    } else if (checker.iphone){   
        StartOS();
        downloadLink = "http://itunes.apple.com/us/app/edamam/id516902296?mt=8&uo=4"
    }
    //StartOS(); 
    
    // Сваляне на приложението
  	$("#view-banner, #title-banner, #by-banner, #image-banner").live(tap, function(e) {
  		if (!touchMoveCheck(e)) {
  			window.location.href = downloadLink;
  			stopEvent(e);
  		}
  	});
  
  }	
}

// Преместване на линкове от footer-а към навигацията  
function navLinks() {
	if (vPortW < 600) {
		$("#hm-touch-list").addClass("bottom").removeClass("top");

		if (!$("#hm-social-list").exists()) {
			$("#hm-pages-list").before('<div id="hm-social-list"><ul><li id="hm-itm-pinterest" class="itm"></li><li id="hm-itm-facebook" class="itm"></li><li id="hm-itm-twitter" class="itm"></li></ul></div>');
			$("#hm-social-list ul li").each(function(i) {
				$(this).html($("#footer-networks ul li:nth-child("+(i+1)+")").html());
				$(this).find("a").addClass("a");
			});
		}

		if (!$("#hm-apps-list").exists()) {
			$("#hm-pages-list").after('<div id="hm-apps-list"><ul><li id="hm-itm-apps" class="itm"><span class="a"><span class="l mr5">Apps</span><span class="l app ios"></span><span class="l app android"></span></span></li></ul></div>');
			$("#hm-apps-list .app").each(function(i) {
				$(this).html($("#footer-apps ul li:nth-child("+(i+1)+")").html());
			});
		}
	}
	else {
		$("#hm-touch-list").addClass("top").removeClass("bottom");

		if ($("#hm-social-list").exists()) {
			$("#hm-social-list").remove();
		}
		if ($("#hm-apps-list").exists()) {
			$("#hm-apps-list").remove();
		}
	}
}

/* ............ Search History */
// Създаване на модула предлагащ история на търсене, ако има такава
function searchHistory() {
	if ($.cookie("historyCookie")) {
		$("#search-box .field").append("<div id='history-results' class='suggestions none'><div class='box'><div class='white-box'><div class='inner small-pad lst-links'><ul></ul></div></div></div></div>");

		var cookie = $.cookie("historyCookie").split(","), obj = $("#history-results");

		for (i = 1; i <= cookie.length; i++) {$("#history-results ul").append("<li class='itm'>" + cookie[i-1] + "</li>");}

		$("#history-results ul").after("<a class='clear-history x-link clr-link mt5' href='javascript:;'>Clear <span>my Search </span>History</a>");
	}
}

/* ............ Search Filters */
// Обновяване на лейбъла на филтрите
function filterLabelsStatus() {
	if ($.cookie("calCookie") || $.cookie("dietCookie") || $.cookie("allerCookie")) {
		var lbl;

		if ($.cookie("calCookie") && $.cookie("dietCookie") && $.cookie("allerCookie")) {
			if (vPortW > 599) {
				if ($("#search-filter-groups ul li.selected").size() > 2) {
					lbl = $.cookie("calCookie").split("|")[0] + ", " + $.cookie("dietCookie").split("|")[0] + ", " + $.cookie("allerCookie").split("|")[0] + " ...";
				}
				else {
					lbl = $.cookie("calCookie") + ", " + $.cookie("dietCookie") + ", " + $.cookie("allerCookie");
				}
			}
			else {
				lbl = $.cookie("calCookie").split("|")[0] + " ...";
			}
		}
		else {
			     if ($.cookie( "calCookie")) {var cookie = $.cookie( "calCookie");}
			else if ($.cookie("dietCookie")) {var cookie = $.cookie("dietCookie");}
			else if ($.cookie("allerCookie")) {var cookie = $.cookie("allerCookie");}

			$("#filter-label .titles").text(cookie);
			lbl = $("#filter-label .titles").text();
			//lbl = lbl.replace(/\|/g,', ');
			if (lbl.split("|").length > 1) {
				lbl = lbl.split("|")[0] + " ...";
			}
		}
		$("#filter-label .titles").text(lbl);
	}
	else {
		$("#filter-label .titles").text("Calories, Diet, Ingredients");
	}

	if ($("#filter-label .lbl").text() == "search refined by") {$("#filter-label .lbl").text("refine search by")}

	if ($.cookie("calCookie") || $.cookie("dietCookie") || $.cookie("allerCookie")) {$("#filter").addClass("filter-on");}
	else {$("#filter").removeClass("filter-on");}

	setFilterButtonStatus(); // Задейства обновяване на бутона Done във филтрите
}

// Обновяване на X-бутона за анулиране на даден филтър
function filterXButtonStatus() {
	if ($.cookie("calCookie") || $.cookie("dietCookie") || $.cookie("allerCookie")) {
		$("#filter .x-button").css("visibility", "visible");
	}
	else {
		$("#filter .x-button").css("visibility", "hidden");
	}
}

// Обновяване статуса на бутона за изчистване на филтрите
function filterClearButtonStatus() {
	var btn = $("#search-filter-actions .clear-selection");
	if ($.cookie("calCookie") || $.cookie("dietCookie") || $.cookie("allerCookie")) {btn.show();}
	else {btn.hide();}
}

// Обновяване статуса на бутона Done във филтрите
function setFilterButtonStatus() {
	if (filterModified) {
		if ($("#search-field").val() == "" && !$("#search-filters ul li.selected").exists()) {
			if ($("#set-filters span").text() != "Done") {
				$("#set-filters").removeClass("search").find("span").text("Done");
			}
		}
		else {
			$("#set-filters").addClass("search").find("span").text("Find");
		}
	}
	else {
		if ($("#set-filters span").text() != "Done") {$("#set-filters").removeClass("search").find("span").text("Done")}
	}
}

// Показване на филтрите в джобната версия, ако страницата е с резултати
function showFilters() {
	if (vPortW <= 599 || (vPortW <= 800 && vPortH <=480)) {
		$("#search-filters").show();
		$("#search-filters-key").addClass("on");
	}
}

// Показване/скриване на top-line лентата, според режима на филтрите
function topLineCheck() {
	if (!$("#search-filters-key").hasClass("on") && vPortW <= 599) {
		$("#top-line").css({opacity: 0, position: "relative", marginTop: "-80px"});
	}
	else {
		$("#top-line").removeAttr("style");
	}
}

// Стартиране на проверка на филтрите при зареждане на страницата
function startupFiltersStatus() {
	var filter, cookie;

	function filterAction(filter, cookie) {
		filter.find("ul li").each(function() {
			if ($.cookie(cookie).indexOf($(this).find("label").text()) != -1) {
				$(this).addClass("selected").find("input").attr("checked", "checked");
			}
		});
	}

	if ($.cookie("calCookie") && $.cookie("dietCookie") && $.cookie("allerCookie")) {
		filterAction($("#search-filter-cals"),  "calCookie");
		filterAction($("#search-filter-diet"), "dietCookie");
		filterAction($("#search-filter-allergies"), "allerCookie");
	}
	else {
		if ($.cookie( "calCookie")) {filterAction($("#search-filter-cals"),  "calCookie");}
		if ($.cookie("dietCookie")) {filterAction($("#search-filter-diet"), "dietCookie");}
		if ($.cookie("allerCookie")) {filterAction($("#search-filter-allergies"), "allerCookie");}
	}

	     filterLabelsStatus(); // Задейства обновяване на лейбъла на дадения филтър
	filterClearButtonStatus(); // Задейства обновяване статуса на бутона за изчистване на филтрите
	    filterXButtonStatus(); // Задейства обновяване статуса на X-бутона за анулиране на дадения филтър

	if ($(".tmpl-inner").exists()) {
		$("#filter-label .lbl").text("search refined by");
	}
}

// Анулиране на избрани филтри
function clearFilter(onload) {
	if ($.cookie( "calCookie")) {$.cookie( "calCookie", null, {path: '/'});}
	if ($.cookie("dietCookie")) {$.cookie("dietCookie", null, {path: '/'});}
	if ($.cookie("allerCookie")) {$.cookie("allerCookie", null, {path: '/'});}

	$("#search-filter-groups ul li").removeClass("selected").find("input").removeAttr("checked");

	filterClearButtonStatus(); // Задейства обновяване статуса на бутона за изчистване на филтрите

	if ($("#filter-label .lbl").text() == "search refined by") {$("#filter-label .lbl").text("refine search by")}

	if (!onload) {
		if (!searchModified) {searchModified = true;}
		if (!filterModified) {filterModified = true;}
	}

/* 	if ($("html").hasClass("mobile")) {filter.removeClass("opened")} */
}

// Задаване размер на височината на филтрите при малки екрани
function smallScreenFiltersHeight() {
	if (vPortW <= 599 || (vPortW <= 800 && vPortH <=480)) {
		if (vPortH <= 700) {
			$("#search-filter-groups").addClass("scrollable");
			if (!$("html").hasClass("mobile")) {var rest = 90} else {var rest = 30}
			var height = vPortH - $("#filter-label").offset().top - rest;
			$("#search-filter-groups").css("height", height - 80);
		}
		else {
			$("#search-filter-groups").removeClass("scrollable").removeAttr("style");
		}
	}
	else {
		$("#search-filter-groups").removeClass("scrollable").removeAttr("style");
	}
}

/* .................. Lightbox */
// Отваряне на lightbox режим
function lboxOpen(popup, params, callback) {
    var revealing = function(popup) {
        	$("body").addClass("no-min-height");
        	scrollTop = $(document).scrollTop();
        	$("#general").css({width: "100%", position: "fixed", top: "-"+scrollTop+"px", minHeight: "100%"});
        	$(".lbox").css("display", "table");
            popup.css("display", "block");
            setTimeout(function() {$(document).scrollTop(0);}, 100);
        },
        action = function() {
        	popup.addClass("active-popup");
        	$.anam.data.lbox = {parameters: (params ? params : null)}
        	
            if (callback) {callback(popup, params, revealing);}
        	else if (params && params.cb_before_open) {params.cb_before_open(popup, params, revealing);}
        	else {revealing(popup);}
            // If there is callback(), the revealing() function must be triggered in the callback() due to async cases
        }
	lboxClose();
	
	if (popup.exists()) {action();}
	else {
    	$.ajax({type: 'GET', url: '/website/popups/'+popup.selector.substring(7)+'.jsp'}).done(function(response) {
    	    $(".lbox > .inner > .holder").append(response);
    	    popup = $(popup.selector);
    	    action();
        });
	}
}

// Затваряне на lightbox режим
function lboxClose(close_type) {
	if (!lboxFlag) {
	    var l = $.anam.data.lbox ? $.anam.data.lbox : null,
	        hiding = function() {
                $("body").removeClass("no-min-height");
		        $("#general").css({width: "auto", position: "static"});
        		$(".lbox").css("display", "none");
            	if ($(".active-popup").attr('data-params')) {$(".active-popup").removeAttr('data-params');}
        	
        		if ($(".active-popup .warning").exists()) {
        			$(".active-popup .warning").each(function() {
        				warningRemove($(this));
        				$(this).attr("placeholder", $(this).attr("rel"));
        			});
        		}
                
        		if ($(".active-popup .real-time").exists()) {
        			$(".active-popup .real-time .inp-txt").each(function() {
        				var obj = $(this).parent();
        				if (obj.find(".inline-alert").exists()) {
        					obj.find(".inline-alert").remove();
        				}
        			});
        		}
                
        		if (($(".active-popup").is("#popup_forgot_password") || $(".active-popup").is("#popup_change_password")) && $(".active-popup").hasClass("reset")) {
        			var form = $(".active-popup form");
        			$(".active-popup").removeClass("reset");
        			form.find(".success").remove();
        			form.find(".failure").remove();
        			form.find(".wrp").show();
        			form.find(".inp-submit").show();
        			form.find(".on").each(function() {$(this).removeClass("on").val("").attr("placeholder", $(this).attr("rel"));});
        		}
        
        		$(".active-popup .failure").remove();
        
        		$(".active-popup").css("display", "none").removeClass("active-popup");
        		if ($.anam.data.lbox && $.anam.data.lbox.parameters) {$.anam.data.lbox.parameters = null;}
        		if ($("html").hasClass("mobile")) {setTimeout(function() {$(window).scrollTop(scrollTop);}, 100);}
        		else {$(window).scrollTop(scrollTop);}
    	    }
	    
		if (!$(".active-popup").hasClass("account-lbox")) {
			$(".active-popup .inp-txt").each(function() {
				if ($(this).hasClass("warning")) {$(this).removeClass("warning").removeClass("inside-warning");}
				$(this).val("").attr("placeholder", $(this).attr("rel")).removeAttr("rel").removeClass("on").blur();
			});
			$(".active-popup textarea").each(function() {
				if ($(this).hasClass("warning")) {$(this).removeClass("warning").removeClass("inside-warning");}
				$(this).val("").attr("placeholder", $(this).attr("rel")).removeAttr("rel").removeClass("on");
			});
			
			$(".active-popup .x-button").remove();
		}
		if (l && l.parameters && l.parameters.cb_after_close) {l.parameters.cb_after_close(close_type, l.parameters, hiding);}
		else if (window["close_" + $(".active-popup").attr('id')]) {window["close_" + $(".active-popup").attr('id')](close_type, l.parameters, hiding);}
		else {hiding();}
        // If there is callback(), the hiding() function must be triggered in the callback() due to async cases
	}
}

/* .......... Successful Forms */
// Абониране за Daily Morsels
function morselSubscribing() {
	$.ajax({
		type: 'GET',
		url: '../php/subscription.php',
		data: 'email=' + $("#morsels-subscription-field").val()
	}).done(function(msg) {
		if (msg == "true") {
			$.cookie("morselsUser", $("#morsels-subscription-form .inp-txt").val(), {path: '/', expires: 365});
			$("#footer-morsels-subscription .link, #footer-morsels-subscription form").remove();
			$("#footer-morsels-subscription .inner").append('<span class="success note">Thank you!</span>');

			setTimeout(function() {
				$("#footer-morsels-subscription .success").fadeOut(300, function() {
					$("#footer-morsels-subscription").remove();

					$("footer, section #main").addClass("no-footer");
				});
			}, 1000);
		}
		else {
			$("#footer-morsels-subscription  .link").hide();
			$("#footer-morsels-subscription   form").addClass("none");
			$("#footer-morsels-subscription .inner").append('<span class="error note">Please try again later</span>');
			$("#morsels-subscription-form").removeClass("loading");

			setTimeout(function() {
				$("#footer-morsels-subscription .note").fadeOut(300, function() {
					$("#footer-morsels-subscription .note, #morsels-subscription-form .x-button").remove();
					$("#morsels-subscription-form .inp-txt").val("").blur();
					if ($("#morsels-data").exists()) {$("#morsels-subscription-form").removeClass("none");}
					else {$("#footer-morsels-subscription .link").show();}
				});
			}, 1000);
		}
	});

	return false;
}

// Абониране за Widget-и
function widgetSubscribed() {
	$.ajax({
		type: 'GET',
		url: '../php/subscription.php',
		data: 'email=' + $("#subscription .inp-txt").val()
	}).done(function(msg) {
		if (msg == "true") {
			$.cookie("widgetUser", $("#widget-subscription-form .inp-txt").val(), {path: '/', expires: 365});
			$("#widget-subscription-form .combined").remove();
			$("#widget-subscription-form").append('<span class="success note">Thank you!</span>');
			setTimeout(function() {$("#subscription").remove();}, 1500);
		}
		else {
			$("#widget-subscription-form").append('<span class="error note">Please try again later!</span>');
		}

		$("#widget-subscription-form").removeClass("loading");
	});

	return false;
}

// Изпращане на съобщение
function messageSent(form, isMessage) {
	var data, url;

	if (!isMessage) {
		data = 'email='+$(".contact-php input.email").val()+'&msg='+$(".contact-php textarea.message").val()+'&subject='+$(".contact-php input.subject").val();
		url = "../php/contact.php"
	}
	else {
		data = 'to='+form.attr('data-to')+'&email='+$(".message-php input.email").val()+'&msg='+$(".message-php textarea.message").val()+'&subject='+$(".message-php input.subject").val();
		url = "../php/message.php"
	}

	$.ajax({
		type: 'GET',
		url: url,
		data: data
	}).done(function(msg) {
		if (msg == "true") {form.append('<span class="success note">Thank you!</span>');}
		else {form.append('<span class="error note">Please try again later.</span>');}

		form.removeClass("loading");
		setTimeout(function() {
			lboxFlag = false;
			lboxClose();
			form.find(".note").remove();
			form.find(".inp-btn").show();
			form.find(".on").each(function() {
				$(this).removeClass("on").val("").attr("placeholder", $(this).attr("rel"));
			});
		}, 1000);
	});

	return false;
}

/* ................ Validation */
// Изпечатване на front-end грешки вътре в полетата
function setWarningFE(field, message) {
	if (!field.hasClass("warning")) {
		if (!field.is("#acc-terms")) {
			field.attr("rel", field.attr("placeholder"));
			field.val(message).addClass("warning").addClass("inside-warning").removeClass("on");
			field.parent().find(".x-button").remove();
		}
		else {
			var obj = field.parent();
			obj.find("span").addClass("col-FF8400");
		}
	}
}

// Изпечатване на back-end грешки
function setWarningBE(field, type, action) {
	var obj = field.parent();

	if (field.val() == "") {obj.find(".x-button").remove();}

	if (!obj.find(".field-info").exists()) {
		obj.append('<p class="field-info alert"></p>');
	}

	if (!field.hasClass("inp-pass")) {obj.find(".inp-txt").addClass("warning").addClass("outside-warning");}
	else {if (action != "keyup") {obj.find(".inp-txt").addClass("warning").addClass("outside-warning");}}

	var note = obj.find(".field-info");
	note.text(notices[type]);
}

// Проверяване валидността на подаден agreement checkbox във front-end среда
function isValidAgreementFE(checkbox) {
	var valid = true;
	if (!checkbox.is(":checked")) {valid = false;}
	return valid;
}

// Проверяване валидността на подадено поле за съобщение във front-end среда
function isValidMessageFE(field) {
	var valid = true, value = field.val();
	if (value == "") {valid = false;}
	return valid;
}

// Проверяване валидността на подадено поле за email във front-end среда
function isValidEmailFE(field) {
	field.val($.trim(field.val()));
	var valid = true, regular = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, value = field.val();
	if (!regular.test(value) || value == "") {valid = false;}
	return valid;
}

// Проверяване наличността на съдържание в подадено поле във front-end среда
function isValidContentFE(field) {
	var valid = true, value = field.val();
	if (value == "") {valid = false;}
	return valid;
}

// Проверяване еднаквостта на подаден чифт от пароли във front-end среда
function isValidPasswordsFE(form) {
	var valid = true, empty = false;

	function passInvalid() {
		form.find(".duo-pass .pass2").addClass("warning outside-warning").attr("placeholder", $(this).attr("rel"));

		valid = false;
	}

	form.find(".duo-pass input").each(function() {if ($(this).val() == "") {empty = true;}});

	if (!empty) {
		if (form.find(".pass1").val() != form.find(".pass2").val()) {
			passInvalid();

			var obj = form.find(".pass2").parent();
			if (!obj.find(".inline-alert").exists()) {obj.append('<p class="field-info inline-alert alert">Your new passwords do not match</p>');}
		}
	}
	else {passInvalid();}

	return valid;
}

// Проверяване валидността на подадено поле за username в back-end среда
function isValidUsernameBE(field, caller, action) {
    var value = field.val();

    function check() {
    	if (value != "") {
    		$.ajax({
    			type: 'POST', 
    			 url: '/api/entry-validator/username',
    			data: {entry: value},
    		 context: caller
    		}).done(function(response) {
    			if (caller.attr("id") == "settings-block-profile") {
    			    $.anam.fn['update_server'](caller);
    			}
    			else if (caller.attr("id") == "account-input-username") {
        			warningRemove(field); field.next().remove();
    			}
    		}).error(function(response) {
    			if (caller.attr("id") == "settings-block-profile") {
                    caller.find(".edit-controllers").removeClass('loading');
    			}
    			if (field.val() == value) {
    				var feedback = $.parseJSON(response.responseText);
    				setWarningBE(field, feedback.message, action);
    			}
    		});
    	}
    	else {
    		if (caller.attr("id") == "settings-block-profile") {setWarningBE(field, "username-empty-err", action);}
    	}
    }

    if (caller.attr("id") == "settings-block-profile") {
        if (!field.hasClass("warning")) {
            check();
        }
    }
    else if (caller.attr("id") == "account-input-username") {
        check();
    }
}

// Проверяване валидността на подадено поле за email в back-end среда
function isValidEmailBE(field, caller, action, params) {
	if (action != "keyup") {field.val($.trim(field.val()));}
	var value = field.val();

    function check() {
    	if (value != "") {
    		$.ajax({
    			type: 'POST',
    			 url: '/api/entry-validator/email',
    			data: {entry: value},
    		 context: caller
    		}).done(function(response) {
    			if (caller.attr("id") == "settings-row-email") {
    			    $.anam.fn['update_server']();
    			}
    			else {
        			warningRemove(field); field.next().remove();
    			}
    			
    			if (params && params.callback) {params.callback();}
    		}).error(function(response) {
    		    if (caller.attr("id") == "settings-row-email") {
                    caller.find(".edit-controllers").removeClass('loading');
    			}
    			if (field.val() == value) {
    				var feedback = $.parseJSON(response.responseText);
    				if (action == "keyup") {
    					if (feedback.message == "email-taken-err") {
    						setWarningBE(field, feedback.message, action);
    					}
    				}
    				else {
    					setWarningBE(field, feedback.message, action);
    				}
    			}
    		});
    	}
    	else {
    	    if (caller.attr("id") == "settings-row-email") {setWarningBE(field, "email-empty-err", action);}
    	}
    }

    if (caller.attr("id") == "settings-row-email") {
        if (!field.hasClass("warning")) {
            check();
        }
    }
    else {
        check();
    }
}

// Проверяване валидността на подадено поле за стара парола в back-end среда
function isValidOldPasswordBE(field) {

}

// Проверяване валидността на подадено поле за нова парола в back-end среда
function isValidNewPasswordBE(field, action, caller) {
	warningRemove(field); field.next().remove();

	var value = field.val(), message;

	if (value != "") {
		$.ajax({
			 type: 'POST',
			  url: '/api/entry-validator/password',
			 data: {entry: value},
		 context: caller
		}).done(function(response) {
			
		}).error(function(response) {
			if (field.val() == value) {
				var feedback = $.parseJSON(response.responseText);
				setWarningBE(field, feedback.message, action);
			}
		});
	}
}

// Проверяване валидността на подадено поле за нова парола във front-end среда
function isValidNewPasswordFE(field) {
	var value = field.val(), answer = false, message;

	if (value != "") {
		if (value.length >= 6) {
			answer = true;
		}
		else {
			message = "pass-short-err";
		}
	}
	else {
		message = "pass-empty-err";
	}

	if (answer) {return true;}
	else {return message;}
}

// Проверяване на абонаментна форма за валидност
function isValidSubscriptionFE(field) {
	if (isValidEmailFE(field)) {
		return true;
	}
	else {
		setWarningFE(field, "Please enter your email");
		return false;
	}
}

// Проверяване на контактна форма за валидност
function isValidContactFormFE(email, subject, message) {
	if (isValidEmailFE(email) && isValidMessageFE(subject) && isValidMessageFE(message)) {
		return true;
	}
	else {
		if (!isValidEmailFE(email)) {setWarningFE(email, "Please enter your email");}
		if (!isValidMessageFE(subject)) {setWarningFE(subject, "Please enter a subject");}
		if (!isValidMessageFE(message)) {setWarningFE(message, "Please enter a message");}

		return false;
	}
}

// Отстраняване на маркировката за внимание
function warningRemove(field) {
	field.removeAttr("placeholder").removeClass("warning");
}

// Проверяване на дадено текстово поле за попълнена стойност
function textfieldStatus(field) {
	if (field.val() != "") {
		if (!field.prev(".x-button").exists()) {
			field.before('<a href="javascript:;" class="x-button">Clear</a>');
			field.prev(".x-button").show();
		}
	}
	else {
		if (field.prev(".x-button").exists()) {
			field.prev(".x-button").remove();
		}
	}
}

function formAlerts() {
	$("input").each(function() {
		if ($(this).attr("data-errmsg")) {
			$(this).parent().parent().append('<p class="field-info alert">' + $(this).attr("data-errmsg") + '</p>');
		}
	});
}

/* ................... Sidebar */
// Поставяне на височина и позиция на страничното съдържание
function sidebar() {
	if (vPortW <= 1024) {var space = 10} else {var space = 40}
	var h = vPortH - ($("header").height() + $("#top-line").height() + $("footer").height()) - 4,
		t = $("header").height() + $("#top-line").height() + 2,
		l = $(".mainbar .white-box").width() + $(".mainbar .white-box").offset().left + space;
	$(".sidebar").css({height: h, top: t, left: l});
}

/* ................. Share Box */
// Позициониране на блока с опциите за споделяне
function fixedShareBox() {
	var t = $(".fixed-sharing .main-box").offset().top,
		l = $(".fixed-sharing .main-box").offset().left - $("#share-box").width() - 20;
	$("#share-box").css({top: t, left: l});
}

/* .............. Ajax Loading */
// Закачане на дейстия за зареждане на още съдържание
function ajaxInfiniteContent(resultsUrl, pageNum, contentName, remove_brokenImage_recipes) {
	var scrollObject, layoutObject, heightObject, heightLayout;

	// Премахване на избраната рецепта от списъка с подобни рецепти
	function removeCurrentRecipe(source) {
		source.find("li").each(function(e) {
			if ($(this).attr("data-id") == $("h1").attr("data-id")) {
				$(this).remove();
				currentRecipe = false;
			}
		});
	}

	// Зареждане на следваща страница с резултати
	function ajaxLoadContent() {
		var compiledUrl = resultsUrl + "?" + $(".feed-block li:last-child").attr("data-params");
		window.location.hash = 'page'+$(".feed-block li:last-child").attr("data-page");
		
		$.ajax({
    		type: 'GET',
        	cache: false,
    		url: compiledUrl
		}).done(function(response) {
		    $(".feed-block").append('<div class="none" />').find(".none").html(response);
		    
		    if (remove_brokenImage_recipes) {remove_brokenImage_recipes($(".feed-block .none"));}
		    
            compiledUrl = resultsUrl + "?" + $(".feed-block li:last-child").attr("data-params");
			if (loadedPages % 10 == 0 && loadedPages < pageNum) {$(".feed-block").append('<div class="btn align-c mt10"><input type="button" value="Show More '+contentName+'..." class="show-more-btn inp-btn btn-white"></div>');}
			if ($(".feed-block").is("#similar-recipes")) {$(".nano").nanoScroller();}
			ajaxScrollContent();
		});
	}

	// Изпечатване на последно заредените резултати
	function ajaxShowContent() {
		if ($("#page-recipe").exists()) {if (currentRecipe) {removeCurrentRecipe($(".feed-block .none"));}}
		$(".feed-block ul").append($(".feed-block .none").html());
		anti_seo_labels();
		$(".feed-block .none").remove();
		$(".feed-block").removeClass("loading");
		if ($(".feed-block").is("#similar-recipes")) {$(".nano").nanoScroller();}
		loadedPages = loadedPages + 1;
	}

	// Закачване на event при скролиране на съдържанието
	function ajaxScrollContent() {
		var scroll_timer = null;

		if (loadedPages % 10 != 0 && loadedPages < pageNum) {$(".feed-block").addClass("loading");}

		scrollObject.bind("scroll", function() {
		    if (scroll_timer != null) { return; }
		    scroll_timer = setTimeout(function() {
				if (loadedPages % 10 != 0 && loadedPages < pageNum) {
					if (layoutObject.scrollTop() + heightLayout > heightObject.height() - (heightLayout * 1.5)) {
						scrollObject.unbind("scroll");
						ajaxShowContent();
						ajaxLoadContent();
					}
				}

				scroll_timer = null;
		    }, 50);
		});
	}

	if ($(".feed-block").is("#similar-recipes")) {
		scrollObject = $(".sidebar .content");
		layoutObject = $(".sidebar .content");
		heightObject = $("#similar-recipes");
		heightLayout = $(".sidebar").height();
	}
	else {
		scrollObject = $(window);
		layoutObject = $(window);
		heightObject = $(document);
		heightLayout = $(window).height();
	}

	if ($("#page-recipe").exists()) {
		var currentRecipe = true;
		removeCurrentRecipe($(".meals-list ul"));
	}

	scrollObject.bind("scroll", function() {
		scrollObject.unbind("scroll");
		if (loadedPages < pageNum) {ajaxLoadContent();} // Първо зареждане на допълнително съдържание
	});

	// Блок от действия при натискане на бутон за ръчно зареждане на още рецепти
	$(".show-more-btn").live("touchstart click", function(e) {
		$(this).parent().remove();
		ajaxShowContent();
		if (loadedPages % 10 != 0 && loadedPages < pageNum) {$(".feed-block").addClass("loading");}
		stopEvent(e);
	});
}

/* ...... JSON Infinite Scroll */ // ajic == Ajax JSON Infinite Content
function ajic_startup(data_type, api_url, api_params, ajic_callback, data_params, first_callback, second_callback) {
	$.ajax({
		type: 'GET',
		cache: false,
		url: api_url,
		data: api_params
	}).done(function(response) {
		if (response.hits.length > 0) {
			data_params.parent.append('<div class="temp none" />');
			data_params.build_html(response, data_params.call_index);
			data_params.list.append(data_params.parent.find(".temp").html());
			data_params.list.find(".itm").removeAttr("id");
			data_params.parent.find(".temp").remove();
			
			$(".nano").nanoScroller({flash: true, iOSNativeScrolling: true});
			
			data_params.scroller.bind("scroll", function() {
				data_params.scroller.unbind("scroll");
				
				data_params.call_index = data_params.call_index + 1;
				api_params.from = api_params.from + data_params.step;
				api_params.to = api_params.to + data_params.step;
				
				ajic_request(data_type, api_url, api_params, ajic_callback, data_params, second_callback);
			});
			
			if ( first_callback) { first_callback();}
			if (second_callback) {second_callback();}
		}
	});
}

function ajic_request(data_type, api_url, api_params, ajic_callback, data_params, second_callback) {
	$.ajax({
		type: 'GET',
		cache: false,
		url: api_url,
		data: api_params
	}).done(function(response) {
		ajic_callback(data_type, api_url, api_params, response, data_params, second_callback);
	});
}

function ajic_callback(data_type, api_url, api_params, response, data_params, second_callback) {
	if (response.hits.length > 0) {
		data_params.parent.append('<div class="temp none" />');
		data_params.build_html(response, data_params.call_index);
	}

	var scroll_timer = null;
	data_params.scroller.bind("scroll", function() {
	    if (scroll_timer != null) { return; }
	    scroll_timer = setTimeout(function() {
			if (data_params.scroller.scrollTop() + data_params.parent_h > data_params.list.height() - (data_params.parent_h * 1.5)) {
				data_params.scroller.unbind("scroll");

				data_params.list.append(data_params.parent.find(".temp").html());
				data_params.list.find(".itm").removeAttr("id");
				data_params.parent.find(".temp").remove();
				$(".nano").nanoScroller({iOSNativeScrolling: true});

				if (response.hits.length == data_params.step) {
					data_params.call_index = data_params.call_index + 1;
					api_params.from = api_params.from + data_params.step;
					api_params.to = api_params.to + data_params.step;
					ajic_request(data_type, api_url, api_params, ajic_callback, data_params, second_callback);
				}
				
				if (second_callback) {second_callback();}
			}

			scroll_timer = null;
	    }, 50);
	});
}

/* ........... Radio Selection */
// Обновяване стиловото оформление на радио бутоните
function radioSelection(obj) {
	function refreshSelection(obj) {
		obj.find(".selected").removeClass("selected");
		obj.find("input").each(function() {
			if ($(this).is(":checked")) {
				$(this).parent().addClass("selected");
			}
		});
	}

	if (!obj) {
		$(".radio-selection").each(function() {
			refreshSelection($(this));
		});
	}
	else {
		refreshSelection(obj);
	}
}

// Обновяване стиловото оформление на радио бутоните
function headerMenu() {
	if (vPortW <= 599 || (vPortW <= 800 && vPortH <=480)) {
		if (!$("#header-menu ul li.social").exists()) {
			$("#header-menu ul").append('<li class="social"><div class="menu-open"><span class="holder"><span class="lbl">Share</span></span></div><div class="layout"><div class="white-box"><div class="holder small-pad"></div></div></div></li>');

			if ($("#share-box").exists()) {var obj = $("#share-box ul li"), ttl = "Share"}
			else {var obj = $("#footer-networks ul li"), ttl = "Follow Us";}

			$("#header-menu ul li.social .layout .holder").append('<span class="lbl txt-n10a col-666 shd-1-1-0-FFF uppercase">' + ttl + '</span>');
			obj.each(function(i) {
				var link = $(this).find("a").clone().attr("class", $(this).attr("class"));
				$("#header-menu ul li.social .layout .holder").append(link);
			});
		}
	}
	else {
		if ($("#header-menu ul li.social").exists()) {
			$("#header-menu ul li.social").remove();
		}
	}
}

/* ............... Fresh Picks */
// Задейства евентуално създаване на навигационни ленти за Fresh Picks, в случай че има скрито съдържане
function freshPicksDirections() {
	if ($(".jspHorizontalBar").exists()) {
		if (!$(".direction").exists()) {
			$("#fresh-picks").prepend('<span class="direction dir-left">&nbsp;</span><span href="javascript:;" class="direction dir-right">&nbsp;</span>')
		}
	}
	else {
		if ($(".direction").exists()) {
			$(".direction").remove();
		}
	}
}

/* ..................... Forms */
// Актуализиране на checkbox-ове
function checkboxes(elm) {
	if (elm.find("input").is(":checked")) {
		elm.find("label").addClass("checked");
	}
	else {
		elm.find("label").removeClass("checked");
	}
}

function if_checks() {
	if ($(".check").exists()) {
		$(".check").each(function() {
			checkboxes($(this));
		});
	}
}

/* .................... Mobile */
function touchMoveCheck(e) {
	if (touchMoveFlag) {
		touchMoveFlag = false;
		stopEvent(e);
		return true;
	}
	return false;
}

function screenMode() {
	var orientation = window.orientation;
	switch (orientation) {
		case   0: $("body").addClass("portrait" ).removeClass("landscape"); screenOrientation = "portrait";  break;
		case 180: $("body").addClass("portrait" ).removeClass("landscape"); screenOrientation = "portrait";  break;
		case  90: $("body").addClass("landscape").removeClass("portrait" ); screenOrientation = "landscape"; break;
		case -90: $("body").addClass("landscape").removeClass("portrait" ); screenOrientation = "landscape"; break;
	}
}

function hideFilters() {
	$("#search-filters #search-filters-btns .filter-btn .hover.opened").removeClass("out");
	var filter = $("#search-filters .hover.opened").parent();
	   filterLabelsStatus(); // Задейства обновяване на лейбъла на филтрите
	  filterXButtonStatus(); // Задейства обновяване статуса на X-бутона за анулиране на филтрите
	filter.find(".white-box").hide();
	filter.find(".hover").removeClass("opened");
}

function blurStuff() {
	if ($(".focused").exists()) {
		$(".focused").blur();
	}
}

function closeStuff(obj) {
	if ($(".opened").exists() && !obj.hasClass("opened")) {
		if ($("#search-filters .hover.opened").exists()) {hideFilters();}
		else {$(".opened").removeClass("opened");}
	}
}

function navHeight() {
	if (vPortH < $(".nav-touch .hm-dropdown").height() + $("#hm-head").height()) {
		$(".nav-touch .hm-dropdown .scroll-area").addClass("scrollable");
		$(".nav-touch .hm-dropdown .scroll-area").css("height", vPortH - $("#hm-head").height() - 20);
	}
}

/* .......... System Responses */
function sysReactionInline(prev_object, sys_message) {
    if (prev_object.parent().find('.alert').exists()) {prev_object.parent().find('.alert').remove();}
    prev_object.after('<p class="field-info alert mb20" style="text-align: center; line-height: normal">' + sys_message[0] + '</p>');
}

function sysReactionTopLine(sys_object, sys_message) {
	$(".header-inner").append('<div id="notices-box" class="none"><div class="holder"><div class="white-box cf"><a class="close" href="javascript:;" style="display: inline;">Clear</a><span class="lbl txt-n16g">' + sys_message[0] + '</span></div></div></div>');
	if (sys_object[0].type == "Error") {$("#notices-box").addClass("col-FF8400")}
	
	if ($("#account-box").exists() && $("#notices-box").exists()) {$("#account-box").remove();}
	$("#notices-box").removeClass("none");
	
	setTimeout(function() {
		$("#notices-box").fadeOut(300, function() {
			$("#notices-box").remove();
		});
	}, 3000);
	
	$("#notices-box .close").live(tap, function() {$("#notices-box").remove();});
}

function sysReactionPopup(sys_object, sys_message) {
	var lboxAlert = '<div id="popup_system_alert" class="account-lbox popup align-c" rel="popup_system_alert"><a href="javascript:;" class="close-popup">Close Popup</a><div class="content"><div class="holder no-title"><div class="wrp"><p class="txt-n18g p10">' + sys_message[0] + '</p><div class="btn mt20 align-c"><input type="button" class="inp-btn btn-white btn-bold" value="OK"></div></div></div></div></div>'
	
	$(".lbox > .inner > .holder").append(lboxAlert);
	
  $("#param-url").attr('href', paramURL);
	
  lboxOpen($("#popup_system_alert"));
	
	$("#popup_system_alert .inp-btn").bind(tap, function() {
		lboxClose();
		$("#popup_system_alert").remove();
	});
}

function systemResponse() {
	var data;
	
	$.ajax({
		async: false,
		type: 'GET',
		url: '/api/ui-notices'
	}).done(function(response) {
		if (response.length > 0) {
			var message;
			if (notices[response[0].code]) {message = notices[response[0].code]} else {message = response[0].message}
			if (response[0].param){
        paramURL = response[0].param;
      }
			data = [response, message];
		}
	});
	
	return data;
}

/* ..................... Terms */
function loadTerms(path) {$("#terms-text").load(path);}

/* ......... Add/Remove Recipe */
function removeRecipe(recipe, recipeID) {
	$.ajax({
		type: 'GET',
		url: '/api/my-recipes/remove',
		data: 'uri='+recipeID
	}).done(function(response) {
		recipe.find(".bookmark-btn a").removeClass("remove-bookmark").addClass("over add-bookmark");
		recipe.find(".bookmark-btn a span").text("Save");
		recipe.find("span.bookmark").remove();
		recipe.removeClass("bookmarked");
	});
}

/* ........... Anti-SEO Labels */
function anti_seo_labels() {
	$(".meals-list").each(function() {
		var list = $(this);
		list.find("li").each(function() {
			if ($(this).find("div.data a.cal .lbl").html() == "") {
				$(this).find("div.data a.cal .lbl").html('cal<span>ories</span>')
			}
			if ($(this).find("div.data a.ing .lbl").html() == "") {
				$(this).find("div.data a.ing .lbl").html('ingr<span>edients</span>')
			}
		});
	});
	
	$("#search-filter-cals ul li").each(function() {
	    if (!$(this).find("label span").exists()) {
    	    $(this).find("label").html($(this).find("label").text() + " <span>cal/serv</span>");
    	}
	});
}

/* ................... Favicon */
function favicons() {
    if ($(".favicon-img").exists()) {
        $(".favicon-img").each(function() {
            var icon = "http://www.edamam.com/http/" + $(this).attr("data-favicon").replace("http://", "");
            $(this).attr("src", icon).removeAttr("data-favicon").removeClass("favicon-img");
        });
    }
}

function add_remove_status(obj, elm, action) {
    if (action == "add") {
        elm.find("a").addClass("add-bookmark");
        elm.find("span").text("Save");
    }
    else if (action == "remove") {
        obj.addClass("bookmarked");
        elm.find("a").addClass("remove-bookmark");
        elm.find("span").text("Remove");
        obj.find(".box").after('<span class="bookmark">My Recipe</span>');
    }
}

function add_remove_action(btn, recipe, recipeID) {
	if (btn.hasClass("add-bookmark")) {
		$.ajax({
			type: 'GET',
			url: '/api/my-recipes/add',
			data: 'uri='+recipeID
		}).done(function(response) {
			recipe.find(".bookmark-btn a").removeClass("add-bookmark").addClass("over remove-bookmark");
			recipe.find(".bookmark-btn a span").text("Remove");
			recipe.find(".box").after('<span class="bookmark">My Recipe</span>');
			recipe.addClass("bookmarked");
		}).error(function(response) {
			if (response.status == "401") {
                window.location="/login?return="+$.relativeURL();
            }
		});
	}
	else if (btn.hasClass("remove-bookmark")) {
		if ($("body").hasClass("my-recipes-page")) {
			btn.closest("li").addClass("removing");
			lboxOpen($("#popup_remove_recipe"));
		}
		else {
			removeRecipe(recipe, recipeID);
		}
	}
}

/* ..................... Login */
// Assigns a 'return' parameter to all "Login" links
function assign_return_url() {
    if ($('.login-link').exists() && !$('#page-login').exists()) {
        $('.login-link').each(function() {
            $(this).attr('href', '/login?return='+$.relativeURL());
        });
    }
}

function anam_load_nav() {
	if (!$("html").hasClass("mobile")) {
    $.ajax("/nav-click.jsp", {
        cache: false,
        success: function(data) {
            $(".header-inner .group-2").html(data);
      			assign_return_url();        
        }
    });	
  } else {
    $.ajax("/nav-click.jsp", {
        cache: false,
        success: function(data) {
            $(".header-inner .group-2").html(data);
      			navLinks(); 
      			if ($.cookie("morselsUser")) {$("#popup_subscribe_morsels, #hm-itm-subscribe").remove();}
      			assign_return_url();        
        }
    });
	}
}

function isValidLogin(form, email, pass, action) {
	var email_status = isValidContentFE(email),
		 pass_status = isValidContentFE(pass);

	if (email_status == true && pass_status == true) {
		return true;
	}
	else {
		if (    email_status != true) {setWarningBE(email, "email-empty-err", action);}
		if (     pass_status != true) {setWarningBE(pass, "yourpass-empty-err", action);}

		return false;
	}
}

function isValidSignup(d) {
	var email_status = d.email ? isValidEmailFE(d.email) : true,
		 pass_status = isValidNewPasswordFE(d.pass),
	agreement_status = isValidAgreementFE(d.agreement);

	if (email_status == true && pass_status == true && agreement_status == true) {
		return true;
	}
	else {	
		if (    email_status != true) {setWarningBE(d.email, "email-syntax-err", d.action);}
		if (     pass_status != true) {setWarningBE(d.pass, pass_status, d.action);}
		if (agreement_status != true) {setWarningFE(d.agreement, "", d.action);}

		return false;
	}
}

function isValidForgotPassFE(field) {
	if (isValidEmailFE(field)) {
		return true;
	}
	else {
		setWarningFE(field, "Please, enter your email");
		return false;
	}
}

function forgotPassSuccess(form) {
	form.find(".wrp").hide()
	form.find(".holder").append('<div class="success mt20"><p class="instructions txt-n18g align-c">Instructions for resetting your password have been sent to:</p><br><p class="txt-n18g align-c"><em>'+form.find(".inp-txt").val()+'</em></p><div class="btn btn-close mt20 align-c"><a href="javascript:;" class="inp-btn btn-bold btn-white">OK</a></div></div>');
	form.removeClass("loading").closest(".active-popup").addClass("reset");
	
	form.find(".btn-close a").bind(tap, function() {lboxClose();});
}

function forgotPassNoAccount(form) {
	form.find(".holder").append('<div class="failure mt10"><p class="align-c">There is no account associated with this e-mail. <a href="/signup">Sign up here.</a></p></div>');
	form.removeClass("loading").closest(".active-popup").addClass("reset");
	form.find(".success").remove();
}

function forgotPassFailure(form) {
	form.find(".holder").append('<div class="failure mt10"><p class="align-c">We\'re experiencing some problems. Please try again later.</p></div>');
	form.removeClass("loading");
	form.find(".success").remove();
	setTimeout(function() {
		form.find(".inp-submit").show();
		form.find(".failure").remove();
	}, 2000);
}

function realTimeValidation() {
    $("#account-form-signup input.email").blur(function(e) {
    	var field = $(this);
    	
    	if (field.val() != "") {
    		setTimeout(function() {
    			isValidEmailBE(field, $("#account-form-signup input.email"), e.type);
    		}, 100)
    	}
    });
    
    $("#account-form-signup input.new-pass").blur(function(e) {
    	var field = $(this);
    	
    	if (field.val() != "") {
    		setTimeout(function() {
    			isValidNewPasswordBE(field, e.type, $("#account-form-signup input.new-pass"));
    		}, 100);
    	}
    });
    
/*
    $("#account-form-signup input.email").live('keyup', function(e) {
    	isValidEmailBE($(this), $("#account-form-signup input.email"), e.type);
    });
    
    $("#account-form-signup input.new-pass").live('keyup', function(e) {
    	isValidNewPasswordBE($(this), e.type, $("#account-form-signup input.new-pass"));
    });
*/
}



/* ****************************** STARTUP */

/* ............. Instant Start */


/* ..... jQuery Document Ready */
// Блок от действия при първоначално зареждане на дадена страница
jQuery(document).ready(function() {
// Declaring variables;
	sys = systemResponse();

// Зарежда навигацията според типа на устройството
    anam_load_nav();

// Поставя запетая между хилядните на всички цифри със стойности над 999
	if ($.browser.msie && ($.browser.version != '8.0' && $.browser.version != '7.0')) {$("span.num").digit();}

// Изпечатва информация за възникнали грешки, ако има такива
	formAlerts();

// System Response
    var sys_response = sys || null;
    //sys_response = [[ {}], ''];
	if (sys_response) {
	    window.response = sys_response;
		sys_object = sys_response[0];
		sys_message = sys_response[1];
		for (var notice in notices) {
			if (notice == sys_object[0].code) {
				var prev_object;
				
				sys_message = notices[notice];
				
				if (notices[notice][1] == "topline") {
					sysReactionTopLine(sys_object, sys_message);
				}
				else if (notices[notice][1] == "inline") {
					if (notice == "err_access_denied" || notice == "err_access_denied_sim_user") {
						prev_object = $("#account-form-login .acc-edamam > label");
					} 
					else if (notice == "err_existing_account") {
						prev_object = $("#account-form-signup .acc-edamam > label");
					}
				
					sysReactionInline(prev_object, sys_message);
				}
				else if (notices[notice][1] == "popup") {
					sysReactionPopup(sys_object, sys_message);
				}
				
				break;
			}
		}
		
		if (sys_object[0].code == "info_welcome_back" || sys_object[0].code == "err_cant_send_welcome") {
			sysReactionTopLine(sys_object, sys_message);
		}
	}

// Задейства стилово оформление на полето за търсене, в случай че то не е празно
	if ($("#search-field").val() != "") {
		$("#search-field, ").addClass("on");
		$("#search-field-clear-btn").css("display", "inline");
		$.cookie("searchValueCoo", $("#search-field").val(), {path: '/'});
	}

// Попълва полето за търсене с актуален търсен израз (ако има такъв), запаметен в cookie
	if ($.cookie("searchValueCoo")) {
		$("#search-field").removeAttr("placeholder").attr("value", $.cookie("searchValueCoo")).addClass("on");
		$("#search-field-clear-btn").css("display", "inline");
	}

// Премахва модула за абонамент, в случай че потребителя е абонат
	if ($.cookie("morselsUser")) {
		$("#footer-morsels-subscription").remove();

		$("footer, section #main").addClass("no-footer");
	} else {
		if (vPortW <= 599 || (vPortW <= 800 && vPortH <=480)) {
			$("footer #footer-morsels-subscription form .inp-txt").attr("placeholder", "Get the Daily Morsels...");
		}
	}

// Задейства функция за създаване на модул, предлагащ история на търсене, в случай че има такава
	searchHistory();

// Задейства стилово оформление на филтрите, в случай че има включени такива
	if ($.cookie("calCookie") || $.cookie("dietCookie") || $.cookie("allerCookie")) {startupFiltersStatus();}

// Задейства показване на филтрите в джобната версия, ако страницата е с резултати
	//if ($("#page-results").exists()) {showFilters();}

// Задейства показване/скриване на top-line лентата, според режима на филтрите
	if (!$("#page-results").exists() && $(".tmpl-inner").exists() && $(".tmpl-inner").hasClass("search-page")) {
		topLineCheck();
	}

// Задейства стилово оформлнение на всички попълнени полета от фомуляри, в случай че има такива
	$(".inp-txt, textarea").each(function() {if ($(this).val() != "") {$(this).addClass("on");}});

// Задейства фиксиране на блока с опциите за споделяне, в случай че има такъв
	if ($(".fixed-sharing").exists()) {
		$(window).resize(function() {fixedShareBox();}); fixedShareBox();
	}

// Задейства стилово оформление на радио бутоните, в случай че има такива
	if ($(".radio-selection").exists()) {
		radioSelection();
	}

// Задейства попълване на линковете за споделяне
	if ($("#share-box").exists()) {
		if (!$("#page-morsel").exists()) {
			//shortenFunc(document.location.href); 
			shortenedURL(document.location.href);
		}
	}

// Задейства актуализиране на checkbox-овете
	if_checks();

// Задейства евентуално създаване на навигационни ленти за Fresh Picks, в случай че има скрито съдържане
	if ($(".jspHorizontalBar").exists()) {freshPicksDirections();}

// Задейства задаване размер на височината на филтрите при малки екрани
	if ((vPortW <= 599 || (vPortW <= 800 && vPortH <=480)) && $("#search-filters").exists()) {smallScreenFiltersHeight();}

});


/* ******************************* EVENTS */

jQuery(document).ready(function() {

/* ............ Document Click */
// Глобално събитие, стартиращо различни действия при натискане някъде из страницата
	$(document).live(tap, function(e) {
		if (!touchMoveCheck(e)) {
			$("#history-results").addClass("none");
			$(".suggestions").find("li.selected").removeClass("selected");

			if ($("#search-field").val() == "" && !$("#search-field").hasClass("reset")) {
				$("#search-field").attr("placeholder", "Find the best recipes from across the web...").removeClass("on");
			}
			else if ($("#search-field").hasClass("reset")) {$("#search-field").removeClass("reset")}

			if (!$("#morsels-subscription-form").hasClass("none") && !$("#morsels-subscription-form").hasClass("loading") && !$("#morsel-data").exists()) {
				if ($("#footer-morsels-subscription form .inp-txt").hasClass("warning")) {
					$("#footer-morsels-subscription form .inp-txt").removeClass("warning").removeClass("inside-warning");
				}
				$("#footer-morsels-subscription form .x-button").remove();
				$("#footer-morsels-subscription form .inp-txt").val("").blur();
				$("#footer-morsels-subscription  form").addClass("none");
				$("#footer-morsels-subscription .link").show();
			}

			if ($("html").hasClass("mobile")) {
				blurStuff();

				if ($("#header-menu").hasClass("opened")) {
					closeStuff($(this));
					$(".nav-touch .sub").removeClass("opened").removeClass("closed");
				}
			}


		}
	});

/* ................. Key Press */
// Глобално събитие, стартиращо различни действия при натискане на клавиш от клавиатурата
	if (!$("html").hasClass("mobile")) {
		$(document.body).keydown(function(e) {
			if (e.keyCode == '27') { // Изпълнява ако е натиснат клавиша Esc (Escape)
				if ($(".active-popup").exists()) {
					lboxClose("cancel");
				}
				else if ($("#history-results").is(":visible")) {
					$("#history-results").addClass("none forced").find("li.hover").removeClass("hover");
				}
				else if ($("#header-menu").hasClass("opened")) {
					$("#header-menu").removeClass("opened");
				}
			}
			if (e.keyCode == '13') { // Изпълнява ако е натиснат клавиша Enter (Enter)
				if ($("#search-box").exists() && searchModified) {
					$("#search-form").submit();
				}
				if ($("#history-results li.hover").exists()) {
					$("#search-field").val($(".suggestions li.hover").text());
					$("#search-form").submit();
				}
			}
			if ((e.keyCode == '40' || e.keyCode == '38') && $("#history-results").is(":visible")) { // Изпълнява ако са натиснати клавишите със стрелки (нагоре и надолу)
				var items = $("#history-results li").size(), hover = $("#history-results li.hover");

				if (!$("#history-results").find("li.hover").exists()) {
					if (e.keyCode == '40') {$("#history-results").find("li:first").addClass("hover");}
					else {$("#history-results").find("li:last").addClass("hover");}
				}
				else {
					var item = $("#history-results li").index(hover) + 1;
					hover.removeClass("hover");

					if (e.keyCode == '40') {
						if (item < items) {hover.next().addClass("hover");}
						else {$("#history-results").find("li:first").addClass("hover");}
					}
					else {
						if (item > 1) {hover.prev().addClass("hover");}
						else {$("#history-results").find("li:last").addClass("hover");}
					}
				}
			}
		});
	}

/* .................... Resize */
// Глобално събитие, стартиращо различни действия при resize-ване прозореца на desktop браузъра   
	if (!$("html").hasClass("mobile")) {
		$(window).resize(function() {
			// Извиква функцията за задаване размер на височината на филтрите при малки екрани
			if ($("#search-filters").exists()) {smallScreenFiltersHeight();}

			// Премества линкове от footer-а към навигацията, в случай, че няма видим footer
			navLinks();
		});
	}

/* .............. Input Events */
	$("input, textarea").live(tap, function(e) {
		$(this).get(0).focus();
	});
	
// Блок от действия при избиране и фокусиране на поле от формуляр
	$(".inp-txt, textarea").live("focus", function() {
		var placeholder = $(this).attr("placeholder");
		$(this).removeAttr("placeholder").attr("rel", placeholder);

		if ($(this).hasClass("warning")) {
			warningRemove($(this));
			if ($(this).hasClass("inside-warning")) {$(this).val("").removeClass("inside-warning");}
			if ($(this).hasClass("outside-warning")) {$(this).removeClass("outside-warning").next().remove();}
		}

		$(this).addClass("on");
	});

// Блок от действия при дефокусиране на поле от формуляр
	$(".inp-txt, textarea").live("blur", function() {
		var field = $(this);

		if ($(this).val() == "") {
			$(this).attr("placeholder", $(this).attr("rel")).removeAttr("rel").removeClass("on");
		}
	});

// Блок от действия при писане в поле от формуляр
	$(".inp-txt, textarea").live("keydown", function(e) {
		if (e.keyCode == '27') {$(this).blur();}
	});

// Блок от действия при paste-ване на копиран текст в поле за email
	$("input.email").live("paste", function(e) {
		var field = $(this);
		setTimeout(function() {
			var val = $.trim(field.val());
			field.val(val);
		}, 100);
	});

/*
	$(".inp-txt").keypress(function(e) {
		if (e.keyCode == '13') {$(this).blur();}
	});
*/

// Блок от действия при писане в текстово поле от формуляр
	$(".inp-txt").live("keyup", function(e) {
		textfieldStatus($(this));
	});
	
	$(".inp-txt").live("focus", function(e) {
		if (!$(this).parent().find(".x-button").exists()) {
    		textfieldStatus($(this));
		}
	});
	
	$(".inp-txt").live("blur", function(e) {
		if ($(this).parent().find(".x-button").exists()) {
    		$(this).parent().find(".x-button").remove();
		}
	});

// Блок от действия при натискане на X-бутончето в текстово поле
	$(".textfield .x-button").live("mousedown " + tap, function(e) {
		if (!touchMoveCheck(e)) {
			var field = $(this).parent().find(".inp-txt");
			field.val('').attr("placeholder", field.attr("rel")).removeAttr("rel").removeClass("on");
			field.trigger('change');
			$(this).remove();
			field.focus();
			stopEvent(e);
		}
	});

// Блок от действия при натискане на checkbox
	$(".check label span").live(tap, function() {
		var elm = $(this).closest(".check"), check = elm.find("input");

		if (elm.find("label").hasClass("checked")) {
			check.removeAttr("checked");
			elm.find("label").removeClass("checked");
		}
		else {
			check.attr("checked", "checked");
			elm.find("label").addClass("checked");
		}

		if ($(this).hasClass("col-FF8400")) {$(this).removeClass("col-FF8400");}
	});

/* .............. Search Field */
// Блок от действия при натискане на клавиш за писане в полето за търсене
	$("#search-field").keyup(function() {
		if ($(this).val() != "") {
			if (!$("#search-form-loading").exists()) {$("#search-field-clear-btn").show();}
			$("#history-results").addClass("none").removeClass("forced").find("li.selected").removeClass("selected");

			if (window.PIE && $.browser.msie && ($.browser.version != '8.0' || $.browser.version != '7.0')) {
				setTimeout(function() {
					$('#autocomplete .white-box').each(function() {PIE.attach(this)});
				}, 500);
			}
		}
		else {
			$("#search-field-clear-btn").hide();
			if (!$("#history-results").hasClass("forced")) {$("#history-results").removeClass("none");}
			$("#autocomplete .white-box").hide();
		}

		setFilterButtonStatus();
	})

// Блок от действия при натискане на X-бутончето в полето за търсене
	$("#search-field-clear-btn").live(tap, function(e) {
		if (!touchMoveCheck(e)) {
			$("#search-field-clear-btn").hide();
			$.cookie("searchValueCoo", null, {path: '/'});
			if ($("#history-results").exists()) {$("#history-results").removeClass("none");}
			$("#search-field").val("").focus();
			setFilterButtonStatus(); // Задейства обновяване на бутона Done във филтрите
			stopEvent(e);
		}
	});

// Блок от действия при избиране и фокусиране на полето за търсене
	$("#search-field").focus(function() {
		$(this).removeAttr("placeholder").addClass("on");

		if ($(this).val() == "") {
			if ($.cookie("historyCookie")) {
				$("#history-results").removeClass("none");
			}
		}
	});

// Блок от действия при дефокусиране на полето за търсене
	$("#search-field").blur(function() {
		$("#history-results").removeClass("forced");
	});

// Блок от действия при промяна на написаното в полето за търсене
	$("#search-field").change(function() {
		if (!searchModified) {searchModified = true;}
	});

// Заглушаване на кликването с мишка по страницата, в случай че е направено върху полето за търсене
	//$("#search-field").bind(tap, function(e) {stopEvent(e);});

/* ............ Search History */
// Блок от действия при обновяване на бисквитката, съхраняваща историята на търсене
	$("#search-form").live("submit", function(e) {
		if ($("#search-field").val() != "") {
			if (!$.cookie("historyCookie")) {
				$.cookie("historyCookie", $("#search-field").val(), {path: '/', expires: 30});
			}
			else {
				var current, cookie = $.cookie("historyCookie").split(',');
				$.cookie("historyCookie", null, {path: '/'});
				for (i=1; i<=cookie.length; i++) {
					if (cookie[i-1].toLowerCase() == $("#search-field").val().toLowerCase()) {
						current = cookie[i-1];
						var flag = true;
					}
				}

				if (!flag) {cookie.unshift($("#search-field").val());}
				else {
					cookie.splice(cookie.indexOf(current), 1);
					cookie.unshift($("#search-field").val());
					flag = false;
				}

				cookie = cookie.slice(0,3);
				cookie = cookie.join(',');

				$.cookie("historyCookie", cookie, {path: '/', expires: 30});
			}

			$("#search-field-clear-btn").before('<span id="search-form-loading">&nbsp;</span>');
			$("#search-field-clear-btn").hide();
			$.cookie("searchValueCoo", $("#search-field").val(), {path: '/'});
		}
	});

// Блок от действия при изтриване на историята на търсене
	$(".clear-history").live(tap, function(e) {
		if (!touchMoveCheck(e)) {
			$.cookie("historyCookie", null, {path: '/'});
			$("#history-results").remove();
			$("#search-field").focus();
			stopEvent(e);
		}
	});

// Блок от действия при избор на предишна заявка от историята на търсене
	$("#history-results ul li").live(tap, function(e) {
		if (!touchMoveCheck(e)) {
			$("#search-field").val($(this).text()).addClass("on");;
			$("#search-form").submit();
			stopEvent(e);
		}
	});

/* ............ Search Filters */
	$("#search-filters-key").live(tap, function(e) {
		if (!touchMoveCheck(e)) {
			if (!$(this).hasClass("on")) {
				$(this).addClass("on");
				$("#search-filters").show();
			}
			else {
				$(this).removeClass("on");
				$("#search-filters").hide();
			}
			topLineCheck();
		}
	});

// Блок от действия при управление на филтрите за търсене
	$("#search-filters .filter-group ul li").live(tap, function(e) {
		if (!touchMoveCheck(e)) {
		// Деклариране на генерални променливи
			var cookie, filter = $(this).closest(".filter-group");

		// Общ блок от действия при промяна на даден филтър
			if (!$(this).hasClass("selected")) {
				$(this).addClass("selected");
				$(this).find("input").attr("checked", "checked");
			}
			else {
				$(this).removeClass("selected");
				$(this).find("input").removeAttr("checked");
			}

			     if (filter.attr("id") == "search-filter-cals") {cookie =  "calCookie";}
			else if (filter.attr("id") == "search-filter-diet") {cookie = "dietCookie";}
			else if (filter.attr("id") == "search-filter-allergies") {cookie = "allerCookie";}

			$.cookie(cookie, null, {path: '/'}); // Анулира актуалната бисквитка на дадения филтър

			if (filter.find("ul li.selected").exists()) { // Създава нова бисквитка съхраняваща избора на дадения филтър
				var tagsLst = "";
				filter.find("ul li.selected").each(function() {
					if (tagsLst == "") {tagsLst = $(this).find("label").text();}
					else {
						if (tagsLst.indexOf($(this).find("label").text()) == -1) {
							tagsLst = tagsLst + "|" + $(this).find("label").text();
						}
					}
				});
				$.cookie(cookie, tagsLst, {path: '/', expires: 30});
			}

			if (!searchModified) {searchModified = true;}
			if (!filterModified) {filterModified = true;}

			  setFilterButtonStatus(); // Задейства обновяване на бутона Done във филтрите
			filterClearButtonStatus(); // Задейства обновяване статуса на бутона за изчистване на филтрите

			stopEvent(e);
		}
	});

// Блок от действия при затваряне на даден филтър от бутона "Done"
	$("#set-filters").live(tap, function(e) {
		if (!touchMoveCheck(e)) {
			$(this).closest(".hover").addClass("out");
			if ($(this).hasClass("search")) {$("#search-form").submit();}
		}
	});

// Блок от действия при анулиране на даден филтър
	$(".clear-selection").live(tap, function(e) {
		if (!touchMoveCheck(e)) {
			clearFilter();

			if ($(this).hasClass("x-button")) {
				$("#filter .x-button").css("visibility", "hidden");
				$(this).closest(".hover").addClass("out");

				if ($("html").hasClass("mobile")) {hideFilters();}

				setTimeout(function() {filterLabelsStatus();}, 0); // Задейства обновяване на лейбъла на филтрите
			}
			else {
				if (!searchModified) {searchModified = true;}
				if (!filterModified) {filterModified = true;}

				setFilterButtonStatus(); // Задейства обновяване на бутона Done във филтрите
			}

			stopEvent(e);
		}
	});

// Блок от действия при анулиране на даден филтър
	$(".mobile .clear-selection").live(tap, function() {
    $("#search-form").submit();
	});

	$(".clear-selection").live(tap, function() {
      $.cookie("calFromValue", null, {path: '/'});
      $.cookie("calToValue", null, {path: '/'});
      $.cookie("calCookie", null, {path: '/'});
      $.cookie("ingUpToValue", null, {path: '/'});
      $('#cal-from').val($.cookie("calFromValue"));
      $('#cal-to').val($.cookie("calToValue")); 
      $('#ing-upto').val($.cookie("ingUpToValue"));     
	});


// Блок от действия при илизане от списъка на даден филтър
	if (!$("html").hasClass("mobile")) {
		$("#filter").hover(function() {}, function() {
			$(this).find(".out").removeClass("out");
			   filterLabelsStatus(); // Задейства обновяване на лейбъла на филтрите
			  filterXButtonStatus(); // Задейства обновяване статуса на X-бутона за анулиране на филтрите
			if ($("#set-filters").hasClass("search")) {$("#search-form").submit();}
		});
	}

// Извиква функцията за задаване размер на височината на филтрите при малки екрани
	if (!$("html").hasClass("mobile") && $("#search-filters").exists()) {
		$(window).resize(function() {
			smallScreenFiltersHeight();
		});
	}

/* ............... Fresh Picks */
	if (!$("html").hasClass("mobile")) {
// Проверяване за нужда от евентуално създаване на навигационни ленти за Fresh Picks, в случай че има скрито съдържане
		$(window).resize(function() {
			if (!$(".jspHorizontalBar").exists() || vPortW < 584) {
				if ($(".direction").exists()) {
					$(".jspPane").css("left", "0px");
					$(".direction").remove();
				}
			}
			else {
				freshPicksDirections();
			}
		});

		var interval;

// Блок от действия при навлизане на курсора върху навигационните ленти
		$("#fresh-picks .direction").live("mouseover", function() {
			var api = $("#fresh-picks .meals-list").data('jsp');

			if ($(this).hasClass("dir-left") && !$(".jspArrowLeft").hasClass("jspDisabled")) {
				interval = setInterval(function() {api.scrollByX(-30);}, 10);
			}
			else if ($(this).hasClass("dir-right") && !$(".jspArrowRight").hasClass("jspDisabled")) {
				interval = setInterval(function() {api.scrollByX(30);}, 10);
			}
		});

// Блок от действия при излизане на курсора от навигационните ленти
		$("#fresh-picks .direction").live("mouseout", function() {clearInterval(interval);});

	}

/* .................. Lightbox */
// Извиква функцията за затваряне на lightbox режим
	$(".lbox").live(tap, function(e) {
		if (!touchMoveCheck(e)) {
			lboxClose("cancel");

			stopEvent(e);
		}
	}); // при натискане на задния фон

	$(".close-popup").live(tap, function(e) {
		if (!touchMoveCheck(e)) {
			lboxClose("cancel");

			stopEvent(e);
		}
	}); // при натискане на X-бутончето

// Заглушаване на натискане по страницата, в случай че е направено върху отворения popup
	$(".active-popup").live(tap, function(e) {
		if (!touchMoveCheck(e)) {		
      if ((navigator.userAgent.match(/Android/i)) && (navigator.userAgent.toLowerCase().indexOf('chrome') > -1)) {
        
        if(e) {
           if (e.stopPropagation) e.stopPropagation();
           e.cancelBubble = true;
        }        
           
      } else {
        stopEvent(e);
      }		
		}
	});
	
	$(".active-popup .radio-selection input, .active-popup label").live(tap, function(e) {
		if (!touchMoveCheck(e)) {
			stopBubble(e);
		}
	});

// Изключения при кликване с мишката върху линкове и бутони в отворен popup
	$(".active-popup form .inp-btn, .active-popup a").live(tap, function(e) {
		if (!touchMoveCheck(e)) {
			e.stopPropagation();
		}
	});

/* ...... Morsels Subscription */
// Отваряне на форма за абонамент за Daily Morsels
	$("#morsels-subscription-key").live(tap, function(e) {
		if (!touchMoveCheck(e)) {
			// docScrollKb = $(document).scrollTop();
			$("#footer-morsels-subscription .link").hide();
			$("#footer-morsels-subscription form").removeClass("none");
		}
	});

// Заглушаване на натискане по страницата, в случай че е направено върху отворената форма
	$("#footer-morsels-subscription").live(tap, function(e) {
		if (!touchMoveCheck(e)) {
			stopBubble(e);
		}
	});

/* ............... Form Submit */
// Блок от действия при submit-ване на формуляр
	$("#search-form").submit(function(e) {
		if ($("#search-field").val() == "" && (!$.cookie("calCookie") && !$.cookie("dietCookie") && !$.cookie("allerCookie"))) {
			e.preventDefault();
		}
	});

	$(".contact-form").submit(function(e) {
		e.preventDefault();

		var form = $(this), email = form.find("input.email"), subject = form.find("input.subject"), message = form.find("textarea.message");
		if (isValidContactFormFE(email, subject, message) && !$(this).find("textarea").hasClass("warning")) {
			$(this).find(".inp-submit").hide();
			$(this).addClass("loading");
			var form = $(this), isMessage = false;
			lboxFlag = true;
			if ($(this).hasClass("msg")) {isMessage = true} else {isMessage = false};
			setTimeout(function() {messageSent(form, isMessage);}, 1000);
		}
	});

	$("#morsels-subscription-form").submit(function(e) {
		e.preventDefault();

		if (isValidSubscriptionFE($(this).find("input.email"))) {
			$(this).addClass("loading");
			setTimeout(function() {morselSubscribing();}, 1000);
		}
	});

	$("#dmsubscribe-form").submit(function(e) {
		e.preventDefault();

		if (isValidSubscriptionFE($(this).find("input.email"))) {
			$(this).find(".inp-submit").hide();
			$(this).addClass("loading");
			if ($(this).find(".failure").exists()) {$(this).find(".failure").remove();}
			var form = $(this);
			setTimeout(function() {
				$.ajax({
					type: 'GET',
					url: '../php/subscription.php',
					data: 'email=' + $("#dmsubscribe-form input.email").val()
				}).done(function(msg) {
					if (msg == "true") {
						$.cookie("morselsUser", $("#dmsubscribe-form input.email").val(), {path: '/', expires: 365});
						$("#footer-morsels-subscription .link, #footer-morsels-subscription form").remove();
						form.removeClass("loading");
						form.find(".wrp").remove();
						form.find(".holder").append('<div class="success"><p class="txt-n16g align-c">Thank you!</p></div>');
						setTimeout(function() {
							lboxClose();
							$("#popup_subscribe_morsels, #hm-itm-subscribe").remove();
						}, 1500);
					}
					else {
						form.find(".holder").append('<div class="failure mt20"><p class="txt-n16g align-c col-FF8400">Please try again!</p></div>');
						form.removeClass("loading");
						form.find(".inp-btn").show();
					}
				});

				return false;
			}, 1000);
		}   
	});

/* ............... Payment Key */
    $('.payment-key').live(tap, function() {
        $.anam.fn.callJS({
            fn: 'payment',
            url: $(this).attr('data-url'),
            uri: $.URLDecode($(this).attr('data-product'))
        });
    });

/* ........... Radio Selection */
// Блок от действия при промяна на избор в радио селекция
	$(".radio-selection input").live("change", function(e) {
		if (!$(this).parent().hasClass("selected")) {
			radioSelection($(this).parent().parent());
		}
	});

/* ......... Add/Remove Recipe */
	$(".meals-list ul li .bookmark-btn a").live(tap, function(e) {
	    var recipe = $(this).closest("li"), recipeID = recipe.attr("data-id");
	    add_remove_action($(this), recipe, recipeID);
	})
	
	$(".meals-list ul li").live("mouseout", function(e) {
		var link = $(this).find(".bookmark-btn a");
		if (link.hasClass("over")) {link.removeClass("over");}
	});

/* .................. Tooltips */
	$('.tooltip-key').live('mouseover', function() {
	    var key = $(this);
	    $.anam.data.tooltips.active[key.attr('data-tooltip')] = true;
	    
    	setTimeout(function() {
        	if ($.anam.data.tooltips.active[key.attr('data-tooltip')]) {
            	$('.'+key.attr('data-tooltip')+'-tooltip-key').trigger('showTooltip');
        	}
    	}, 300);
    	
    	key.bind('mouseout', function() {
    	    var key = $(this);
    	    delete $.anam.data.tooltips.active[key.attr('data-tooltip')];
    
        	setTimeout(function() {
            	if (!$.anam.data.tooltips.active[key.attr('data-tooltip')]) {
            	    $('#tooltip-'+key.attr('data-tooltip')).remove();
            	    if (!$('#tooltips .tooltip').exists()) {$('#tooltips').remove();}
                	$('.'+key.attr('data-tooltip')+'-tooltip-key').trigger('hideTooltip');
            	}
        	}, 300);
    	});
	});

}); // jQuery(document).ready()


/* ******************************* MOBILE */

jQuery(document).ready(function() {

	if ($("html").hasClass("mobile")) {
		var screenOrientation;

		$(document).live("touchmove", function() {
			touchMoveFlag = true;
		});

		$("section a").live("touchstart", function(e) {
			if ($(".opened").exists()) {
				stopEvent(e);
			}
		});

		$("#search-field, .inp-txt, textarea").live("focus", function(e) {
			$(this).addClass("focused");
			closeStuff($(this));
			stopEvent(e); 
		});

		$("#search-field, .inp-txt, textarea").live("blur", function() {
			$(this).removeClass("focused");
		});

		$(".lbox-key, #header-menu #hm-main .button, #search-filters .hover").live(tap, function(e) {
			if (!touchMoveCheck(e)) {
				if (!$(this).hasClass("opened")) {
					blurStuff();
					closeStuff($(this));

					if(!$("#history-results").hasClass("none")) {$("#history-results").addClass("none");}

					if ($(this).hasClass("hover")) {$(this).addClass("opened").find(".white-box").show();}

					if ($(this).hasClass("button")) {$(".nav-touch, .nav-touch #hm-main .button").addClass("opened"); navHeight();}
				}
				else {
					if ($("#search-filters .hover.opened").exists()) {hideFilters();}
					$(".opened").removeClass("opened");

					if ($(this).hasClass("button")) {
						$(".nav-touch .sub").removeClass("opened");
					}
				}

				stopEvent(e);
			}
		});

		$(".nav-touch .hm-dropdown").live(tap, function(e) {
			stopBubble(e);
		});

		$(".nav-touch .hm-list .sub-key .a").live(tap, function(e) {
			if (!touchMoveCheck(e)) {
				if ($(this).next().hasClass("opened")) {$(this).next().removeClass("opened").addClass("closed");}
				$(".nav-touch .hm-list .sub").removeClass("opened");
				if (!$(this).next().hasClass("closed")) {$(this).next().addClass("opened");}
				else {$(this).next().removeClass("closed");}
			}
		});

		$(".nav-touch .hm-list .sub").live(tap, function(e) {
			if (!touchMoveCheck(e)) {
				$(this).removeClass("opened");
			}
		});

		$(".nav-touch .hm-list .sub a").live(tap, function(e) {
			e.stopEvent(e);
		});

		screenMode();

		window.onorientationchange = function() {
			screenMode();
			$("#search-field").css("width", "100px");
			setTimeout(function() {$("#search-field").css("width", "100%");}, 0);
		}

	} 
  
  if($(".bar .g").width() == 133){
    $(".bar .g").css("margin-left", "-1px");
  }
  if($(".bar .y").width() == 133){
    $(".bar .y").css("margin-left", "-1px");
  }
  if($(".bar .r").width() == 133){
    $(".bar .r").css("margin-left", "-1px");
  }  
}); // jQuery(document).ready()


/*****************************************************/

function setIcoSpaces() {	
	$(".nav-container").css("width", ($(window).width()*0.45)+120);
	$(".nav-1, .nav-2, .nav-3").css("width", ($(".nav-container").width()/3)-1);
}

//======== Menu Fixes ==========//	
var switchToInfo,
	serviceId 		= 'http://www.edamam.com/ontologies/edamam.owl#nutrition-wizard',
	version			= "noWizard";
	
/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById("mySidenav").style.width = "320px";
	$('#overlay').fadeToggle( "slow", "swing" );
}
/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	$('#overlay').fadeOut('slow');
}
function loginMenu(param){
	$('body').addClass(param);
}
function checkWizard(){

	$.ajax({
		url: '/api/payment/info',
		data: {
			serviceId: serviceId
		},
		type: 'GET'
		}).done(function(res) {

			if(res == null){
				if(typeof($.cookie('typeWizard')) == "undefined"){
					version = "noWizard";
				} else if($.cookie('typeWizard') == "basic") {
					version = "wizardBasic";
				}
			} else {

				switchToInfo 	= res.switchToInfo;

				if(res.level == "10-basic"){ // трябва да се провери и status: CANCELED и activeDaysLeft:0 и isPaidForNow: false (ако е така е изтекъл TRIAL)
					version = "wizard";
				} else if(res.level == "20-plus"){
					version = "wizardPlus";
				} else if(res.level == "30-pro"){
					version = "wizardPro";
				} else {
					if(typeof($.cookie('typeWizard')) == "undefined"){
						version = "noWizard";
					} else if($.cookie('typeWizard') == "basic") {
						version = "wizardBasic";
					}
				}

			}
			
			if(version == "wizard"){
				$('.ico-wizard').attr('href', '/website/wizard.jsp?ver=wizard');
				$('.ico-wizard').find('span').text('Wizard Basic');
			} else if(version == "wizardPlus"){
				$('.ico-wizard').attr('href', '/website/wizard.jsp?ver=wizard-plus');
				$('.ico-wizard').find('span').text('Wizard Plus');
			} else if(version == "wizardPro"){
				$('.ico-wizard').attr('href', '/website/wizard.jsp?ver=wizard-pro');
				$('.ico-wizard').find('span').text('Wizard Pro');
			} else if(version == "wizardBasic"){
				$('.ico-wizard').attr('href', '/website/wizard.jsp?ver=wizard-basic');
				$('.ico-wizard').find('span').text('Wizard Free');
			} else if(version == "noWizard"){
				$('.ico-wizard').attr('href', '/website/wizard.jsp?ver=wizard-basic');
			}

		}).fail(function(){

	});
}
function autorize() {
	$.ajax({
		url: '/api/account/get',
		type: 'POST',
		success: function(data) {

			$.ajax({
				url: '/assets/jsp/getimage.jsp',
				type: 'GET'
			}).done(function(res) {
				if(res != 'null'){
					$('.userImage').find('img').attr('src', res);
				} else {
					$('.userImage').find('img').attr('src', '/assets/img/user.png');
				}
			});


			if((data.firstName != null)&&(data.lastName != null)){
				$('.profile').find('span').text(data.firstName+" "+data.lastName);
			} else {
				$('.profile').find('span').text(data.userName);
			}

			loginMenu("logged");
			checkWizard();

		},
		error:	function(data) {
				loginMenu("notlogged");
		},
		statusCode: {
			401: function() { //Unauthorized
				loginMenu("notlogged");
			},
			500: function() { //Bad request
				loginMenu("notlogged");
			}
		}
	});
}

/* ..... jQuery Document Ready */
jQuery(document).ready(function() {

	autorize();
	mobile();
	
	setIcoSpaces();
			
	$(window).resize(function() {
		setIcoSpaces();
	});

  $(document).on('focus','#discount', function () {
    $('#msg').remove();
    $('<p align="center" style="margin:0 0 20px 0" id="msg">After entering click on your payment method</p>').appendTo("#discount-form");
    loaded = false;
  }); 

  $('.payment-btn').live(tap, function() {
    $('#error-msg').remove();
    loaded = false;
  });

  $('#search-form').submit(function(){
	  
	var newCal,
	calFrom = parseInt($('#cal-from').val()),
	calTo 	= parseInt($('#cal-to').val()),
	ingUpTo = parseInt($('#ing-upto').val());	
	
	calFrom = (isNaN(calFrom)) ? '' : calFrom;
	calTo	= (isNaN(calTo)) ? '' : calTo;
	ingUpTo	= (isNaN(ingUpTo)) ? '' : ingUpTo;
	
	if((calFrom != '')&&(calTo != '')){
		if(calFrom > calTo){
			calFrom = $('#cal-to').val();
			calTo	= $('#cal-from').val();
		}	
	}
	
	$.cookie("calFromValue", calFrom, {path: '/'});
	$.cookie("calToValue", calTo, {path: '/'});
	$.cookie("ingUpToValue", ingUpTo, {path: '/'});
	
	if(calFrom == ''){
		newCal = calTo;
		$.cookie("calCookie", 'Under '+ calTo+' cal/serv', {path: '/'});
	} else if(calTo == '') {
		newCal = calFrom+'-';
		$.cookie("calCookie", 'Over '+ calFrom+' cal/serv', {path: '/'});
	} else {
		newCal = calFrom+'-'+calTo;
		$.cookie("calCookie", newCal+' cal/serv', {path: '/'});
	}

	if((calFrom == '')&&(calTo == '')){
		if(ingUpTo != ''){
		  $.cookie("calCookie", 'Up to '+ ingUpTo+' ingredients', {path: '/'});
		} else {
		  //$.removeCookie("calCookie", {path: '/'});
		  $.cookie( "calCookie", null, {path: '/'});
		}
	}

	$('#calories-input').val(newCal);
      
  });

	$("#cal-from, #cal-to, #ing-upto").live("keyup", function() {
		if ($("#search-field").val() == "") {
			if ($("#set-filters span").text() != "Done") {
				$("#set-filters").removeClass("search").find("span").text("Done");
			}
		}
		else {
			$("#set-filters").addClass("search").find("span").text("Find");
		}
	});
  
  $('#cal-from').val($.cookie("calFromValue"));
  $('#cal-to').val($.cookie("calToValue"));
  $('#ing-upto').val($.cookie("ingUpToValue"));
  
	$(".nav-touch .lbox-key").live(tap, function(e) {
    if (!touchMoveCheck(e)) {
    	stopEvent(e);
    }
	});

	$("#search-filter-groups ").live(tap, function(e) {
    if(e) {
       if (e.stopPropagation) e.stopPropagation();
       e.cancelBubble = true;
    }
	});
  		

//======== Menu Fixes ==========//	
	
	$(".nav .button, .user.sep2").live(tap, function() {
		$("#feedbackForm").find("#msg").val("");
		$("#contactForm").find("#msg").val("");
		openNav();	
	});
	
	$('#overlay').live(tap, function(){
		closeNav();
	});
	
	$("#feedbackForm .more").live(tap, function(){
		$("#feedbackForm").submit();	
	});

	$("#contactForm .more").live(tap, function(){
		$("#contactForm").submit();	
	});
	
	$("#feedbackForm").find("#msg").val("");
	$("#contactForm").find("#msg").val("");
	
	$('#contactForm').validate({
	    rules: {
			email: {
				required: true,
				email: true
			},
			msg: {
				minlength: 10,
				required: true
			},
			agree: "required"		  
	    },		
		highlight: function(element) {
			$(element).closest('.form-control').removeClass('success').addClass('error');
		},		
		success: function(element) {
			element.closest('.form-control').removeClass('error').addClass('success');
		},
		submitHandler: function() {
			$.ajax({
				type: 'GET',
				url: "/php/contact.php",
				data: 'email='+$("#contactForm").find("#email").val()+'&msg='+$("#contactForm").find("#msg").val()+'&subject='+$("#contactForm").find("#subject").val()
			}).done(function(msg) {
				if (msg == "true") {
					$("#contactForm").find("#email").val("");
					$("#contactForm").find("#msg").val("");
					$("#contactForm").find("#subject").val("");
					$("#myModalContact").css("display", "none"); 
				} else {
					//form.append('<span class="error note">Please try again later.</span>');
				}
			});	
			return false
		}		
	});
	
	$('#feedbackForm').validate({
	    rules: {
			email: {
				required: true,
				email: true
			},
			msg: {
				minlength: 10,
				required: true
			},
			agree: "required"		  
	    },		
		highlight: function(element) {
			$(element).closest('.form-control').removeClass('success').addClass('error');
		},		
		success: function(element) {
			element.closest('.form-control').removeClass('error').addClass('success');
		},
		submitHandler: function() {
			$.ajax({
				type: 'GET',
				url: "/php/contact.php",
				data: 'email='+$("#feedbackForm").find("#email").val()+'&msg='+$("#feedbackForm").find("#msg").val()+'&subject='+$("#feedbackForm").find("#subject").val()
			}).done(function(msg) {
				if (msg == "true") {
					$("#feedbackForm").find("#email").val("");
					$("#feedbackForm").find("#msg").val("");
					$("#feedbackForm").find("#subject").val("");
					$("#myModalFeedback").css("display", "none"); 
				} else {
					//form.append('<span class="error note">Please try again later.</span>');
				}
			});	
			return false
		}		
	});

}); // jQuery Document Ready  

 