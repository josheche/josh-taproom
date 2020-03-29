// Carousel

$('.carousel-body').slick({
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    responsive: [
        {
            breakpoint: 990,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerMode: true
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true
            }
        },
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true
            }
        }
    ]
});

$('.carousel-prev').click(function(){ 
    $(this).parent().find('.carousel-body').slick('slickPrev');
} );

$('.carousel-next').click(function(e){
    e.preventDefault(); 
    $(this).parent().find('.carousel-body').slick('slickNext');
} );

// Quick View

$(".quick-view-1").modaal();
$(".quick-view-2").modaal();
$(".quick-view-3").modaal();
$(".quick-view-4").modaal();
$(".quick-view-5").modaal();
$(".quick-view-6").modaal();
$(".quick-view-7").modaal();
$(".quick-view-8").modaal();

// Responsive nav menu

$(".menu-btn").click(function() {
    if ($(".menu-btn").prop("checked")) {
        document.body.classList.add("stop-scrolling"); 
    }
    else {
        document.body.classList.remove("stop-scrolling"); 
    }
});

// Incrementer

$(".quantity-btn").on("click", function () {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
  
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 0;
      }
    }
  
    $button.parent().find("input").val(newVal);
    $button.parent().find("input").attr(value, newVal);
});

// Cart icon quantity

$("#submit-btn-1").on("click", function (e) {
    e.preventDefault();
    var itemQuantity = $("#item-count-1");
    var cartQuantity = $(".cart-quantity");
    $(cartQuantity).val(itemQuantity.val());
});
$("#submit-btn-2").on("click", function (e) {
    e.preventDefault();
    var itemQuantity = $("#item-count-2");
    var cartQuantity = $(".cart-quantity");
    $(cartQuantity).val(itemQuantity.val());
});
$("#submit-btn-3").on("click", function (e) {
    e.preventDefault();
    var itemQuantity = $("#item-count-3");
    var cartQuantity = $(".cart-quantity");
    $(cartQuantity).val(itemQuantity.val());
});
$("#submit-btn-4").on("click", function (e) {
    e.preventDefault();
    var itemQuantity = $("#item-count-4");
    var cartQuantity = $(".cart-quantity");
    $(cartQuantity).val(itemQuantity.val());
});
$("#submit-btn-5").on("click", function (e) {
    e.preventDefault();
    var itemQuantity = $("#item-count-5");
    var cartQuantity = $(".cart-quantity");
    $(cartQuantity).val(itemQuantity.val());
});
$("#submit-btn-6").on("click", function (e) {
    e.preventDefault();
    var itemQuantity = $("#item-count-6");
    var cartQuantity = $(".cart-quantity");
    $(cartQuantity).val(itemQuantity.val());
});
$("#submit-btn-7").on("click", function (e) {
    e.preventDefault();
    var itemQuantity = $("#item-count-7");
    var cartQuantity = $(".cart-quantity");
    $(cartQuantity).val(itemQuantity.val());
});
$("#submit-btn-8").on("click", function (e) {
    e.preventDefault();
    var itemQuantity = $("#item-count-8");
    var cartQuantity = $(".cart-quantity");
    $(cartQuantity).val(itemQuantity.val());
});