$(document).ready(function(){
    let isToggle = false;
    $(".navbar-toggler").click(function(){
        if(!isToggle){
            $("#menu-icon").attr("src", "assets/icons/close.svg")
            isToggle = true;
        }
        else{
            $("#menu-icon").attr("src", "assets/icons/menu.svg")
            isToggle = false;
        }
    })
    // When download cv is hover over, the style will change
    $(".home-text button").hover(
        function(){
            $(".home-text button").css("background-color", "#C76E00");
            $(".home-text button a").css("color", "#424242");
        },
        function(){
            $(".home-text button").css("background-color", "#424242");
            $(".home-text button a").css("color", "#C76E00");
        }
    )
})