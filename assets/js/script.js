alert("Development in progress")
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
    $(".btn-download-cv").hover(
        function(){
            $(".btn-download-cv").css("background-color", "#C76E00");
            $(".btn-download-cv a").css("color", "#424242");
        },
        function(){
            $(".btn-download-cv").css("background-color", "#424242");
            $(".btn-download-cv a").css("color", "#C76E00");
        }
    )
})