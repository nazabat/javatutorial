/**
 * Created by Nazabat Hussain on 9/28/2016.
 * Reset Tabs
 */

//

$(window).load(function(){
    function resetTabs() {
        $("#content div").hide(); //Hide all content
        $("#tabs a").attr("id", ""); //Reset id's
    }
    var myUrl = window.location.href; //get URL
    var myUrlTab = myUrl.substring(myUrl.indexOf("#")); // For mywebsite.com/tabs.html#tab2, myUrlTab = #tab2
    var myUrlTabName = myUrlTab.substring(0, 9); // For the above example, myUrlTabName = #tab
    (function () {
        $("#content div").hide(); // Initially hide all content
        $("#tabs li:first a").attr("id", "current"); // Activate first tab
        $("#content div:first").fadeIn(); // Show first tab content
        $("#tabs a").on("click", function (e) {
            e.preventDefault();
            if ($(this).attr("id") == "current") { //detection for current tab
                return
            } else {
                resetTabs();
                $(this).attr("id", "current"); // Activate this
                $($(this).attr('name')).fadeIn(); // Show content for current tab
            }
        });
    })()
});

