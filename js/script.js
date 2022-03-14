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



    $("#hover").hover(function () {
        $(this).animate({
            opacity: '0.3'
            
        });
    },
    function () {
        $(this).animate({
            opacity: '1' 
        });
    })



$("#hover-1").hover(function () {
    $(this).animate({
        opacity: '0.3'
        
    });
},
function () {
    $(this).animate({
        opacity: '1' 
    });
})


$("#hover-2").hover(function () {
    $(this).animate({
        opacity: '0.3'
        
    });
},
function () {
    $(this).animate({
        opacity: '1' 
    });
})

$("#hover-3").hover(function () {
    $(this).animate({
        opacity: '0.3'
        
    });
},
function () {
    $(this).animate({
        opacity: '1' 
    });
})


$("#hover-4").hover(function () {
    $(this).animate({
        opacity: '0.3'
        
    });
},
function () {
    $(this).animate({
        opacity: '1' 
    });
})


$("#hover-5").hover(function () {
    $(this).animate({
        opacity: '0.3'
        
    });
},
function () {
    $(this).animate({
        opacity: '1' 
    });
})


$("#hover-6").hover(function () {
    $(this).animate({
        opacity: '0.3'
        
    });
},
function () {
    $(this).animate({
        opacity: '1' 
    });
})

$("#hover-7").hover(function () {
    $(this).animate({
        opacity: '0.3'
        
    });
},
function () {
    $(this).animate({
        opacity: '1' 
    });
})


$('.btn').click(function () {
    var Name = $('#name').val();
    var Email = $('#email').val();
    var Message = $('#textarea');
    if (Name == '' || Email == '' || Message == '') {
        alert('Please fill the form correctly!');
    } else {
        alert(' Hi ' + Name  + ' we have received your message. Thank you for reaching out.');
    }
});
});