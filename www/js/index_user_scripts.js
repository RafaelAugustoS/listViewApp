/*jshint browser:true */
/*global $ */(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Button */
    $(document).on("click", ".uib_w_1", function(evt)
    {
         /*global activate_subpage */
         activate_subpage("#dashboard"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
