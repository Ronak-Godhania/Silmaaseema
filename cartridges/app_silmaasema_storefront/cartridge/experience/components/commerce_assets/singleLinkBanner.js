'use strict';

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var URLUtils = require('dw/web/URLUtils');
//var ImageTransformation = require('*/cartridge/experience/utilities/ImageTransformation.js');

/**
 * Render logic for the storefront.MainBanner component
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @returns {string} The template to be displayed
 */
module.exports.render = function (context) {
    var model = new HashMap();
    var content = context.content;

    //model.heading = content.heading;
    //model.image = ImageTransformation.getScaledImage(content.image);
    
    	model.richText = content.richText;
    	model.categoryLink = URLUtils.url('Search-Show', 'cgid', content.categoryLink.getID()).toString();
    	var Logger = require('dw/system/Logger');
        var logInstance = Logger.getLogger('Account','Rg_SFRA.account');
        if(logInstance.isInfoEnabled()){
        	logInstance.info('Category link to pass: {0}', model.categoryLink);	
        	}
    
        
    return new Template('experience/components/singleLinkBanner').render(model).text;
};
