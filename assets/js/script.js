// alert("Development in progress");
$(document).ready(function(){

    let isToggle = false;
    $(".navbar-toggler").click(function(){
        if(!isToggle){
            $("#menu-icon").attr("src", "assets/icons/close.svg")
            isToggle = true;
            $(".navbar").css({
                "-webkit-box-shadow": "0px 2px 5px 0px rgba(0,0,0,0.75)",
                "-moz-box-shadow": "0px 2px 5px 0px rgba(0,0,0,0.75)",
                "box-shadow": "0px 2px 5px 0px rgba(0,0,0,0.75)"
            });
        }
        else{
            $("#menu-icon").attr("src", "assets/icons/menu.svg")
            isToggle = false;
            $(".navbar").css("box-shadow", "none");
        }
    })
    // Automatically closed the navbar when any link is clicked
    if(innerWidth < 992){
        $(".nav-link").click(function(){
            $(".navbar-toggler").click();
        })
    }
    // Change the color of selected link
    $(".nav-link").click(function(){
        $(".nav-link").attr("class", "nav-link")
        $(this).attr("class", "nav-link active");
        
        // use this to check the scroll top of each link
        setTimeout(function(){
            var scrollTop = $(window).scrollTop();
            // alert(scrollTop)
        }, 3000);
    })
    $('body').on('wheel', function(event) {
        // Get the current scroll position
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop)
        if(scrollTop <= 328){
            $(".nav-link").attr("class", "nav-link")
            $("#home-link").attr("class", "nav-link active");
        }
        else if(scrollTop >= 329){
            $(".nav-link").attr("class", "nav-link")
            $("#about-link").attr("class", "nav-link active");
        }
        // I just wan to insert a code here that can detect what is the height are we now to determine what page should we focus on
        event.preventDefault();
    });

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