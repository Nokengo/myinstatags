var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
    }
};

$("#taglist").on("singletap", "li", function() {
    $("#instafeed").html("");
    var tag = $(this).find("h3").html();
    $("#taghead").find("h1").html(tag);
    var feed = new Instafeed({
        get: "tagged",
        tagName: tag.substr(1),
        clientId: "33e8709b53284454a568825158784a5d",
        template: "<div><img src='{{image}}'></div>",
        resolution: "low_resolution",
        limit: 5
    });
    feed.run();
});