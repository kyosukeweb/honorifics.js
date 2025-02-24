// LICENSE https://github.com/kyosukeweb/honorifics.js/blob/main/LICENSE.md
// FandomScript

// Fandom takes a while to load Common.js or Personal JS
// We don't need setInterval here
(function () {
    var query = window.__HonorificsElementContainers__ || '[data-honorific]';
    var all = Array.from(document.querySelectorAll(query));
    for(var i = 0; i < all.length; i++) {
        // Fandom doesn't support <element hidden />
        all[i].style.display = navigator.honorifics ? "" : "none";
    }
})();
