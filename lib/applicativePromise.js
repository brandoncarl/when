/** @license MIT License (c) copyright 2010-2013 original author or authors */

/**
 * Licensed under the MIT License at:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @author: Brian Cavalier
 * @author: John Hann
 */

(function(define) { 'use strict';
define(function() {

	return function(basePromise) {
		return basePromise.extend({
			applyTo: function(arg) {
				return this.map(function(f) {
					return basePromise(arg).map(f);
				});
			}
		});
	};

});
}(typeof define === 'function' && define.amd ? define : function(factory) { module.exports = factory(); }));