function set() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:8001/", false);
    xhr.send();

    response = JSON.parse(xhr.responseText);
    chrome.browserAction.setBadgeText({text:String(response.this_week_answers)});
}

set();
window.setInterval(function() {
    set();
}, 30000);
