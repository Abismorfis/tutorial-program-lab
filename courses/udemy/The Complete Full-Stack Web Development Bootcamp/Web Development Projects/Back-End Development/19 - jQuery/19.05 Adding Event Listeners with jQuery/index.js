$(document).mousemove(function(event) {
    $("h1").css("color", "purple");
});

$("h1").before("<button>Click Me</button>");

$("h1").after("<button>Click Me</button>");

$("h1").prepend("<button>Click Me</button>");

$("h1").append("<button>Click Me</button>");

$("button").click(function() {
    $("h1").css("color", "orange");
});