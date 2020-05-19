enableDarkMode();

function enableDarkMode(){
    document.addEventListener('DOMContentLoaded',function(){
        var toggler = document.getElementById('toggle');

        toggler.addEventListener('click',function(){
            chrome.tabs.executeScript( null, { file : 'js/jquery.min.js'}, function() {
                    chrome.tabs.executeScript( null, { file : 'js/dark.js'});
                }
            );
        });
    });
}