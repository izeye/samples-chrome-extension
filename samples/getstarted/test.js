(function() {
    console.log(window.location.href);

    $.getJSON("https://spring.io/info", function (json) {
        console.log(json.git.commit.id);
    });
})();