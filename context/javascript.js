(function( $ ) {


$.fn.doc.defaults = $.extend( true, {}, $.fn.doc.defaults, {
    engine: {
        javascriptGoogle: {
            search: 'https://google.com/search?q=javascript+',
            include: ''
        }
    }
} );


}( jQuery ));
