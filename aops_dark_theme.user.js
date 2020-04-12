// ==UserScript==
// @name         AoPS Dark Side
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       github:javaarchive
// @match        https://*.aopsacademy.org/*
// @match        https://artofproblemsolving.com/*
// @grant        none
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @require      https://cdn.jsdelivr.net/gh/nickdeny/darkmode-js@master/darkmode.js
// ==/UserScript==

(function() {
    'use strict';
    $.noConflict();
    jQuery( document ).ready(function($){var DarkMode = new DarkMode();
                                         //darkmode.showWidget();
                                         console.log("Dark Mode widget added");
                                        });
    // Your code here...
})();
