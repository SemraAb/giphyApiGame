const giph = function () {
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=9RM9JC0LJbG1MtA4pyDHjSS90u2R0WgO&q=${$(
      this
    ).text()}&limit=5&offset=0&rating=g&lang=en`,
    {}
  )
    .then((result) => result.json())
    .then((netice) => {
      $(".giphs img").remove();
      for (let i = 0; i <= 10; i++) {
        let giphy = netice.data[i].images.original.url;
        let images = netice.data[i].images["480w_still"].url;
        let width = netice.data[i].images["480w_still"].width;
        let height = netice.data[i].images["480w_still"].height;
        let newDiv = $("<div class='divGiph'>");
        let newImg = $("<img>");
        newImg.attr("src", images);
        newImg.css({ width: width, height: height });
        newDiv.append(newImg);
        $(".giphs").append(newDiv);
        let temp = true;
        newImg.on("click", function () {
          if (temp) {
            $(this).attr("src", netice.data[i].images.original.url);
            temp = false;
          } else {
            $(this).attr("src", images);
            temp = true;
          }
        });
      }
    });
};

$(document).on("click", ".buttons button", giph);
$(".search").on("click", function () {
  var img = $(".searchInput input");
  var btn = $('<button class="btn bg-primary">');
  btn.html(img.val());
  $(".buttons").append(btn);
  img.val("");
});

let temp2 = true;
$("newImg").on("click", function () {
  if (temp2) {
    $(this).attr("src", images);
    temp2 = false;
  } else {
    $(this).attr("src", mp);
    temp2 = true;
  }
});
