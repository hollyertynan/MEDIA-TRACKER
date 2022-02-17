total = "";

for (i = 0; i < 10; i++) {
    total += "<div class=\"carousel-cell\"><img class=\"img-fluid imageHover poster mx-2\" src=\"../MEDIA-TRACKER/script/albums/myImage" + i + ".png\"></div>"
}

$("#musicCarousel").html(total);
//document.getElementById("musicCarousel").innerHTML = total;

total = ""

for (i = 0; i < 10; i++) {
    total += "<div class=\"carousel-cell\"><img class=\"img-fluid imageHover poster mx-2\" src=\"../MEDIA-TRACKER/script/anime/myImage" + i + ".png\"></div>"
}