window.addEventListener("load", function () {
    var artyom = new Artyom();

    artyom.addCommands({
        indexes: ["Good Morning","Good Night", "Hello"],
        action: function(i){
            if(i == 2){
                artyom.say("Hello Anna");
            }else if(i == 1){
                artyom.say("Good night Anna");
            }else if(i == 0){
                artyom.say("Good morning Anna");
            }
        }
    });

    artyom.addCommands({
        indexes: ["What is your name"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("My name is Alex");
        }
    });

    artyom.addCommands({
        indexes: ["Sure","Yes","Of course"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Great! What kind of workout would you like to do?");
        }
    });
    
    artyom.addCommands({
        indexes: ["Okay","Why not","OK"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("You sound tired. Do you want to do somethink relaxing or a power workout to wake up a bit?");
        }
    });
    
    artyom.addCommands({
        indexes: ["No","No, I dont want to","Never"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Got it. Do you want me to remind you tomorrow when you have free time?");
        }
    });
    
    artyom.addCommands({
        indexes: ["What can I do today"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Today a high intensity training is on the list");
        }
    });
    
    artyom.addCommands({
        indexes: ["Okay","Why not"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("You sound tired. Do you want to do somethink relaxing or a power workout to wake up a bit?");
        }
    });
    
    artyom.addCommands({
        indexes: ["relaxing","something relaxing","something chilled"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("All right, here are my suggestions: One: Calming pilates. Two: Yoga for Stress relief. or Three: Morning full Body stretch. What do you prefer?");
        }
    });
    
   artyom.addCommands({
        indexes: ["yoga","stress relief","Yoga for Stress relief","two"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Great Choice! Prepare for the workout and tell me when you're ready to get started");
        }
    });
    
    artyom.addCommands({
        indexes: ["I am ready","ready"],
        smart: false,
        action: function (i, wildcard) {
            artyom.say("Ok, lets start");
        }
    });

    
    
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "en-EN",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=playgroud-artyom-script.js.map