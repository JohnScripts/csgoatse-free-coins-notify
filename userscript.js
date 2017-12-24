// ==UserScript==
// @name         Csgoatse Free Coins Notify
// @namespace    https://github.com/JohnScripts
// @version      1.1
// @description  Notify Free Coins on CSGOatse
// @author       John Scripts
// @match        https://csgoatse.com/*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/JohnScripts/csgoatse-free-coins-notify/master/userscript.js
// @downloadURL  https://raw.githubusercontent.com/JohnScripts/csgoatse-free-coins-notify/master/userscript.js
// ==/UserScript==

(function() {
    'use strict';

    var checkExist = setInterval(function() {
        if ($('.free-coins-switcher').text().indexOf('Collect') > -1) {
            alert("FREE COINS!");
            clearInterval(checkExist);
        }
    }, 250);
})();
