function anotherAddEventListener(typeOfEvent, callback) {
    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 2
    }

    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }
}

anotherAddEventListener("keypress", function(event) {
    console.log("A " + event.key + " was pressed and it lasted for " + event.durationOfKeypress + " seconds");
});

anotherAddEventListener("keypress", function(event) {
    event = {
        eventType: "keypress",
        key: "div",
        durationOfKeypress: 4
    };

    console.log("A " + event.key + " was pressed and it lasted for " + event.durationOfKeypress + " seconds");
});