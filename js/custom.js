(function ($) {

  "use strict";

  // NAVBAR
  $(document).ready(function() {
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    // geolocation
    function showGeolocationBanner() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                $('#geolocation-banner').text(`Location detected: Lat ${position.coords.latitude}, Lon ${position.coords.longitude}`).show();
            });
        }
    }

    //status 
    function updateOnlineStatus() {
        const banner = $('#online-status-banner');
        if (navigator.onLine) {
            banner.text("You are online").show();
        } else {
            banner.text("You are offline").show();
        }
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    //initial status
    updateOnlineStatus();

    //geolocation information
    showGeolocationBanner();

    //notification 
    setTimeout(() => {
        console.log('This is a simulated push notification!');
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                new Notification("This is a push notification");
            }
        });
    }, 15000);
});


})(window.jQuery);