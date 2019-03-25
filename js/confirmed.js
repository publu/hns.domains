$(document).ready(function() {
    document.getElementById("name").innerHTML = location.hash.split("/")[2];
    document.getElementById("domain").value = location.hash.split("/")[1] + ".hh";
    $('#mc-embedded-subscribe-form-1').parsley();
    for (var i = 0; i < 50; i++) {
            create(i);
        }
    function create(i) {
        var width = Math.random() * 30;
        var height = width * 0.4;
        var colourIdx = Math.ceil(Math.random() * 3);
        var colour = "red";
        switch (colourIdx) {
            case 1:
                colour = "yellow";
                break;
            case 2:
                colour = "blue";
                break;
            default:
                colour = "red";
        }
        $('<div class="confetti-' + i + ' ' + colour + '"></div>').css({
            "width": width + "px",
            "z-index": 9000000,
            "height": height + "px",
            "top": -Math.random() * 20 + "%",
            "left": Math.random() * 100 + "%",
            "opacity": Math.random() + 0.5,
            "transform": "rotate(" + Math.random() * 360 + "deg)"
        }).appendTo('body');

        drop(i);
    }

    function drop(x) {
        $('.confetti-' + x).animate({
            top: "100%",
            left: "+=" + Math.random() * 15 + "%"
        }, Math.random() * 8000 + 1000, function() {
            reset(x);
        });
    }

    function reset(x) {
        $('.confetti-' + x).animate({
            "top": -Math.random() * 20 + "%",
            "left": "-=" + Math.random() * 15 + "%"
        }, 0, function() {
            drop(x);
        });
    }
});
