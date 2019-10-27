/*
Solution of assignment 4:

Expected output:

Hello Yara
Good Bye Joginder
Good Bye Jenna
Good Bye Joshi
Hello Parul
Hello Fana
Hello Lita
Hello Pooja
Hello Lara
Good Bye Jina
*/

(function() {
    var names = ["Yara", "Joginder", "Jenna", "Joshi", "Parul", "Fana", "Lita", "Pooja", "Lara", "Jina"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
