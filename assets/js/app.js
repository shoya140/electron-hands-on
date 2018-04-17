console.log("hello")

var number = 0

$("#simple-button").on("click", function () {
  // console.log("clicked")
  // alert("clicked")
  number += 1 // number = number + 1, number ++
  $("#feedback-text").text(number)
  $("#feedback-text").css({"font-size": number*10+"px"})
})
