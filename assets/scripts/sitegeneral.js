function langaugeinfo() {
    var x = document.getElementById("langaugeInfo");
    var y = document.getElementById("langaugeInfo2");
    if (x.style.display === "none" || y.style.display === "block") {
        x.style.display = "block",
        y.style.display = "none";
    } else {
        y.style.display = "none";
    }
} 

function langaugeinfo2() {
    var x = document.getElementById("langaugeInfo2");
    var y = document.getElementById("langaugeInfo");
    if (x.style.display === "none" || y.style.display === "block") {
        x.style.display = "block",
        y.style.display = "none";
    } else {
        y.style.display = "none";
    }
} 

function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: 'smooth', block: 'nearest'  });
}

function scrollToResume() {
    document.getElementById("resume").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function scrollToProjects() {
    document.getElementById("portfolio").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function scrollToMiniProjects() {
    document.getElementById("miniSites").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function scrollToBlog() {
    document.getElementById("blogTextAnchor").scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: 'smooth', block: 'end' });
}


$(document).ready(function () {
    var mouseX, mouseY;
    var ww = $(window).width();
    var wh = $(window).height();
    var traX, traY;
    $(document).mousemove(function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
        traX = ((4 * mouseX) / 570) + 40;
        traY = ((4 * mouseY) / 570) + 50;
        console.log(traX);
        $(".title").css({ "background-position": traX + "%" + traY + "%" });
    });
});




