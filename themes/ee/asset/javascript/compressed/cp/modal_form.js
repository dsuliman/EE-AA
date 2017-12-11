/**
 * ExpressionEngine (https://expressionengine.com)
 *
 * @link      https://expressionengine.com/
 * @copyright Copyright (c) 2003-2017, EllisLab, Inc. (https://ellislab.com)
 * @license   https://expressionengine.com/license
 */
EE.cp.ModalForm={modal:$('div[rel="modal-form"]'),modalContentsContainer:$("div.contents",this.modal),saveAndNew:!1,openForm:function(n){this.modal.trigger("modal:open"),this._loadModalContents(n),this._bindSaveAndNew()},_loadModalContents:function(n){var o=this;this.modalContentsContainer.html('<span class="btn work">Loading</span>').load(n.url,function(){o._bindForm(n),n.load(o.modalContentsContainer)})},_bindSaveAndNew:function(n){var o=this;this.modal.on("click",'button[value="save_and_new"]',function(){o.saveAndNew=!0})},_bindForm:function(n){var o=this;EE.cp.formValidation.init(this.modalContentsContainer.find("form")),$("form",this.modal).on("submit",function(){return $.post(this.action,$(this).serialize(),function(t){return"string"===$.type(t)?(o.modalContentsContainer.html(t),o._bindForm(n),void n.load(o.modalContentsContainer)):(n.success(t),o.saveAndNew?(n.createUrl&&(n.url=n.createUrl),o._loadModalContents(n)):o.modal.trigger("modal:close"),void(o.saveAndNew=!1))}),!1})}};