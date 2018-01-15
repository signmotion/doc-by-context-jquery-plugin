(function( $ ) {


// @source http://cplusplus.com/reference/stl/
var  all = [
/* @todo Don't work with simple replace(). See $.fn.doc().
    // containers
    'array deque forward_list list map queue set stack unordered_map unordered_set vector'
    // ios
    , 'fstream iomanip iosfwd iostream istream ostream sstream streambuf'
    // multi-threding
    , 'atomic condition_variable future mutex thread'
    // other
    , 'algorithm bitset chrono codecvt complex exception functional initializer_list iterator limits locale memory new numeric random ratio regex stdexcept string system_error tuple typeindex typeinfo type_traits utility valarray'
    // functions
    , 'abs acos acosh asin asinh atan atan2 atanh cbrt ceil copysign cos cosh erf erfc exp exp2 expm1 fabs fdim floor fma fmax fmin fmod fpclassify frexp hypot ilogb isfinite isgreater isgreaterequal isinf isless islessequal islessgreater isnan isnormal isunordered ldexp lgamma llrint llround log log10 log1p log2 logb lrint lround modf nan nanf nanl nearbyint nextafter nexttoward pow remainder remquo rint round scalbln scalbn signbit sin sinh sqrt tan tanh tgamma trunc'
    // <iterator>
    , 'advance distance begin end prev next'
*/
].join( ' ' );

$.fn.doc.defaults = $.extend( true, {}, $.fn.doc.defaults, {
    engine: {
        cplusplus: {
            search: 'http://cplusplus.com/search.do?q=',
            searchSharp: 'http://cplusplus.com/reference/',
            include: all
        },
        cplusplusGoogle: {
            search: 'https://google.com/search?q=C%2B%2B+',
            include: all
        }
    }
} );


}( jQuery ));
