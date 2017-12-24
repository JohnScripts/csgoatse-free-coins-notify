// ==UserScript==
// @name         Csgoatse Coins Notify
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script to notify Free Coins on CSGOatse
// @author       John Scripts
// @match        https://csgoatse.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var checkExist = setInterval(function() {
        if ($('.free-coins-switcher').text().indexOf('Collect') > -1) {
            alert("COINS!");
            clearInterval(checkExist);
        }
    }, 250);
})();