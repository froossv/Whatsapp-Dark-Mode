enableDarkMode();

function enableDarkMode(){
    document.addEventListener('DOMContentLoaded',function(){
        var darkToggler = document.getElementById('darkToggle');
        var fullToggler = document.getElementById('fullToggle');

        darkToggler.addEventListener('click',function(){
            chrome.tabs.executeScript( null, { file : 'js/jquery.min.js'}, function() {
                    chrome.tabs.executeScript( null, { file : 'js/dark.js'});
                }
            );
        });
    });
}