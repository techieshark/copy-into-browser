// for quickly trying things out in the browser, jQuery and Lo-Dash (like Underscore.js) are great.

// copy & paste into browser console to load jquery
var jq = document.createElement('script');
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
jQuery.noConflict();
$ = jQuery;
// jQuery should be available via "$".

// copy & paste into browser console to load Lo-Dash modern build
var ld = document.createElement('script');
ld.src = "//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.js";
document.getElementsByTagName('head')[0].appendChild(ld);
// now lodash should be available via "_".
