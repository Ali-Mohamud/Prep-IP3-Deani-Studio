$(function () {
    $("#design-1").hide();
})

$(function () {
    $("#design-2").hide();
})

$(function () {
    $("#design-3").hide();
})


$(document).ready(function () {

    $("#design").click(function () {
        $(".hide-design-image").toggle();
        $("#design-1").toggle();

    })

    $("#development").click(function () {
        $("#design-2").toggle();
        $(".hide-development-image").toggle();
    })

    $("#productManagement").click(function () {
        $("#design-3").toggle();
        $(".hide-product-management").toggle();
    })
});