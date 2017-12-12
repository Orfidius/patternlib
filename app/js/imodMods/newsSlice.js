/* Global Functions
 ********************************************/

/*  News Item Slicer
 *
 *  USAGE EXAMPLE:
 *  jQuery('.bx_slide').newsItemSlice({
 *  	containerWrapper: '<div class="bx_slider"></div>'
 *  	//rowWrapper: '<div class="row"></div>'
 *  	//countPerRow: 3	
 *  });
 */

(function($) {
    $.fn.newsItemSlice = function(options) {
        var items = $(this),
            selector = items.selector,
            containerWrapper = options.containerWrapper,
            rowWrapper = options.rowWrapper,
            countPerRow = options.countPerRow;
        for (var i = 0; i < items.length;) {
            var wrap = items.eq(i).nextUntil(':not(' + selector + ')').addBack().wrapAll(containerWrapper);
            i += wrap.length;
            if (countPerRow !== undefined) { for (var b = 0; b < wrap.length; b += countPerRow) { wrap.slice(b, b + countPerRow).wrapAll(rowWrapper); } }
        }
    };
}(jQuery));
