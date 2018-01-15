(function( $ ) {
$.fn.doc = function( options ) {


var  o = $.extend( true, {}, $.fn.doc.defaults, options );

return this.each( function() {

    var  e = $( this );

    var  refClass = e.data( 'ref-class' );
    var  engine = e.data( 'engine' );
    var  includeOnly = e.data( 'include-only' );
    var  include = [];
    var  tinc = (includeOnly && includeOnly.length > 0) ?
        includeOnly : o.engine[ engine ].include;
    tinc = tinc.match( /\S+/g );
    tinc.forEach( function( token, i ) {
        tinc[ i ] = token.trim();
        if ( tinc[ i ].length > 0 ) {
            // # Separator '|' talk about we need 'searchSharp'.
            // @see $.fn.doc.defaults
            var  a = tinc[ i ].split( '|' );
            include.push( a );
        }
    } );

    // @todo Rewrite for sharp and fast replace.
    var  tt = e.html();
    include.forEach( function( token ) {
        var  isSharp = (token.length > 1);
        var  searchPath = o.engine[ engine ][
            isSharp ? 'searchSharp' : 'search' ];
        var  st =
            searchPath + (isSharp ? token[ 1 ] : token[ 0 ]);
        var  rt =
            '<a href="' + st + '"' +
              ' target="DocByContext"' +
              ' class="' + refClass + '">' +
            token[ 0 ] +
            '</a>';
        var  p = new RegExp( token[ 0 ], 'g' );
        tt = tt.replace( p, rt );
    } );
    e.html( tt );

} ); // return


}; // $.fn
}( jQuery ));
