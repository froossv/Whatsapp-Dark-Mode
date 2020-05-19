enableDarkMode();

function enableDarkMode(){
    document.addEventListener('DOMContentLoaded',function(){
        var toggler = document.getElementById('toggle');

        toggler.addEventListener('click',function(){
            chrome.tabs.executeScript({
                file : 'js/dark.js'
            });
        });
    });
}