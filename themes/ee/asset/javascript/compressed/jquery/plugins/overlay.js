/**
 * @license 
 * jQuery Tools 1.2.3 Overlay - Overlay base. Extend it.
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/overlay/
 *
 * Since: March 2008
 * Date:    Mon Jun 7 13:43:53 2010 +0000 
 */
!function(e){function t(t,i){var r,c,l,s=this,a=t.add(s),f=e(window),d=e.tools.expose&&(i.mask||i.expose),u=Math.random().toString().slice(10);d&&("string"==typeof d&&(d={color:d}),d.closeOnClick=d.closeOnEsc=!1);var g=i.target||t.attr("rel");if(c=g?e(g):t,!c.length)throw"Could not find Overlay: "+g;t&&t.index(c)==-1&&t.click(function(e){return s.load(e),e.preventDefault()}),e.extend(s,{load:function(t){if(s.isOpened())return s;var r=o[i.effect];if(!r)throw'Overlay: cannot find effect : "'+i.effect+'"';if(i.oneInstance&&e.each(n,function(){this.close(t)}),t=t||e.Event(),t.type="onBeforeLoad",a.trigger(t),t.isDefaultPrevented())return s;l=!0,d&&e(c).expose(d);var g=i.top,h=i.left,p=c.outerWidth({margin:!0}),v=c.outerHeight({margin:!0});return"string"==typeof g&&(g="center"==g?Math.max((f.height()-v)/2,0):parseInt(g,10)/100*f.height()),"center"==h&&(h=Math.max((f.width()-p)/2,0)),r[0].call(s,{top:g,left:h},function(){l&&(t.type="onLoad",a.trigger(t))}),d&&i.closeOnClick&&e.mask.getMask().one("click",s.close),i.closeOnClick&&e(document).bind("click."+u,function(t){e(t.target).parents(c).length||s.close(t)}),i.closeOnEsc&&e(document).bind("keydown."+u,function(e){27==e.keyCode&&s.close(e)}),s},close:function(t){return s.isOpened()?(t=t||e.Event(),t.type="onBeforeClose",a.trigger(t),t.isDefaultPrevented()?void 0:(l=!1,o[i.effect][1].call(s,function(){t.type="onClose",a.trigger(t)}),e(document).unbind("click."+u).unbind("keydown."+u),d&&e.mask.close(),s)):s},getOverlay:function(){return c},getTrigger:function(){return t},getClosers:function(){return r},isOpened:function(){return l},getConf:function(){return i}}),e.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(t,n){e.isFunction(i[n])&&e(s).bind(n,i[n]),s[n]=function(t){return e(s).bind(n,t),s}}),r=c.find(i.close||".close"),r.length||i.close||(r=e('<a class="close"></a>'),c.prepend(r)),r.click(function(e){s.close(e)}),i.load&&s.load()}e.tools=e.tools||{version:"1.2.3"},e.tools.overlay={addEffect:function(e,t,n){o[e]=[t,n]},conf:{close:null,closeOnClick:!0,closeOnEsc:!0,closeSpeed:"fast",effect:"default",fixed:!e.browser.msie||e.browser.version>6,left:"center",load:!1,mask:null,oneInstance:!0,speed:"normal",target:null,top:"10%"}};var n=[],o={};e.tools.overlay.addEffect("default",function(t,n){var o=this.getConf(),i=e(window);o.fixed||(t.top+=i.scrollTop(),t.left+=i.scrollLeft()),t.position=o.fixed?"fixed":"absolute",this.getOverlay().css(t).fadeIn(o.speed,n)},function(e){this.getOverlay().fadeOut(this.getConf().closeSpeed,e)}),e.fn.overlay=function(o){var i=this.data("overlay");return i?i:(e.isFunction(o)&&(o={onBeforeLoad:o}),o=e.extend(!0,{},e.tools.overlay.conf,o),this.each(function(){i=new t(e(this),o),n.push(i),e(this).data("overlay",i)}),o.api?i:this)}}(jQuery);