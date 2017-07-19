document.addEventListener('DOMContentLoaded', function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://localhost:8001/", false);
    xhr.send();

    response = JSON.parse(xhr.responseText);

    var counter = document.getElementById('counter');
    counter.innerHTML = response.this_week_answers;

}, false);