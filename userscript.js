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

    // Create Notification Sound

    var player = document.createElement('audio');
    player.src = 'https://instaud.io/_/1A5M.mp3';
    player.preload = 'auto';

    //The checker

    function startChecker(){
        var checkExist = setInterval(function() {
        if ($('.free-coins-switcher').text().indexOf('Collect') > -1) {
            player.play();
            setTimeout(function() {
                alert("FREE COINS!");
                clearInterval(checkExist);
                startStandby();
            }, 150);
        }
        }, 500);
    }

    //The Standby

    function startStandby(){
        var checkStandby = setInterval(function() {
        if ($('.free-coins-switcher').text().indexOf('Collect') > -1) {
            //nothing
        }else{
            //this means that if you collect coins, it will activate the notifier again.
            clearInterval(checkStandby);
            startChecker();
        }
        }, 500);
    }
    startChecker();
})();
