/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */
$(document).ready(function(){var t=$(".form-standard > form");if(1==EE.publish.title_focus&&t.find("input[name=title]").focus(),"new"==EE.publish.which&&t.find("input[name=title]").bind("keyup blur",function(){t.find("input[name=title]").ee_url_title(t.find("input[name=url_title]"))}),EE.publish.smileys===!0&&$(".format-options .toolbar .emoji a").click(function(t){$(this).parents(".format-options").find(".emoji-wrap").slideToggle("fast"),t.preventDefault()}),EE.publish.autosave&&EE.publish.autosave.interval){var e=!1;t.on("entry:startAutosave",function(){t.trigger("entry:autosave"),e||(e=!0,setTimeout(function(){$.ajax({type:"POST",dataType:"json",url:EE.publish.autosave.URL,data:t.serialize(),success:function(i){t.find("div.alert.inline.warn").remove(),i.error?console.log(i.error):i.success?t.find("ul.tabs").after(i.success):console.log("Autosave Failed"),e=!1}})},1e3*EE.publish.autosave.interval))});var i=$("textarea, input").not(":password,:checkbox,:radio,:submit,:button,:hidden"),n=$("select, :checkbox, :radio, :file");i.on("keypress change",function(){t.trigger("entry:startAutosave")}),n.on("change",function(){t.trigger("entry:startAutosave")})}});