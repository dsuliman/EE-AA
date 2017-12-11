/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */
"use strict";!function(e){e(document).ready(function(){e(".modal-remove-field input.btn").on("click",function(t){t.preventDefault(),e(".form-standard form").off("submit"),e("button[type=submit][value=save]").click()}),e(".form-standard form").on("submit",function(t){for(var i,n=EE.fields.fluid_field.fields,d=!1,f=0,l=n.length;f<l;f++)if(i=e('[data-input-value="field_channel_fields"] [value="'+n[f]+'"]'),0==i.prop("checked")){d=!0;break}d&&(t.preventDefault(),e(".modal-remove-field input.btn").attr("disabled",!1),e(".modal-remove-field").trigger("modal:open"))})})}(jQuery);