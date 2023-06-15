// Job Titles
const job_titles = ['DevOps', 'Frontend', 'Cloud architect', 'Backend']

// Underscore animation
var con = document.getElementById('console-underscore');
window.setInterval(function () {
    con.classList.toggle("hidden")
}, 400)

// Function to iterate texts
function consoleText(words, id) {
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id);

    window.setInterval(function () {

        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function () {
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                letterCount += x;
                waiting = false;
            }, 1000)

        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 3000)

        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }

    }, 110)
}

consoleText(job_titles, 'job-titles');
