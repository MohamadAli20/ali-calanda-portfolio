alert("Development in progress");
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
            $(".btn-download-cv").css("background-color", "var(--accent-color)");
            $(".btn-download-cv a").css("color", "var(--primary-color)");
        },
        function(){
            $(".btn-download-cv").css("background-color", "var(--primary-color)");
            $(".btn-download-cv a").css("color", "var(--accent-color)");
        }
    )
})