/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */
"use strict";!function(i){i(document).ready(function(){var e=function(i,e){var t=e.input_value;if(0==t.size()&&(t=e.source.parents(".markItUpContainer").find("textarea.markItUpEditor")),e.modal.find(".m-close").click(),file_string="{filedir_"+i.upload_location_id+"}"+i.file_name,i.isImage){var a='<img src="'+file_string+'"';a+=' alt=""',i.file_hw_original&&(dimensions=i.file_hw_original.split(" "),a=a+' height="'+dimensions[0]+'" width="'+dimensions[1]+'"'),a+=">",t.insertAtCursor(a)}else t.insertAtCursor('<a href="'+file_string+'">'+i.file_name+"</a>")};setTimeout(function(){i(".textarea-field-filepicker, li.html-upload").FilePicker({callback:e})},1e3),i(".tbl-wrap table").on("grid:addRow",function(t,a){i(a).find(".grid-textarea").each(function(){var e=i(this).find("textarea").attr("name");i(this).find(".textarea-field-filepicker, li.html-upload").attr("data-input-value",e)}),i(a).find(".textarea-field-filepicker, li.html-upload").FilePicker({callback:e})})})}(jQuery);