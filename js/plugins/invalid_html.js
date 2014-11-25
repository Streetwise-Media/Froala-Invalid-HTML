/*!
 * Froala Invalid HTML Plugin
 * Written by Matt Dziuban (http://mattdziuban.com)
 * Tested with Froala v1.2.3 and v1.2.4 (http://editor.froala.com)
 */
(function($) {
  $.Editable.DEFAULTS = $.extend($.Editable.DEFAULTS, {
    invalidTags: [],
    invalidAttrs: []
  });

  $.Editable.prototype.disallowHtmlElements = function(removed, allowed) {
    var that = this;
    $.each(this.options[removed], function(idx, el) {
      var elIdx;
      do {
        var elIdx = that.options[allowed].indexOf(el);
        if (elIdx > -1)
          that.options[allowed].splice(elIdx, 1);
      } while (elIdx > -1);
    });
  };

  $.Editable.prototype.initInvalidHtml = function() {
    if (this.options.invalidTags.length > 0)
      this.disallowHtmlElements('invalidTags', 'allowedTags');
    if (this.options.invalidAttrs.length > 0)
      this.disallowHtmlElements('invalidAttrs', 'allowedAttrs');
  };

  $.Editable.initializers.push($.Editable.prototype.initInvalidHtml);
})(jQuery);