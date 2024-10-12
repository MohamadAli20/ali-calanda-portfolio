// alert("Development in progress");
$(document).ready(function(){
    
    // if menu icon is clicked change it to the close icon vice versa
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
    // Change the style of the selected link to active
    $(".nav-link").click(function(){
        $(".nav-link").attr("class", "nav-link")
        $(this).attr("class", "nav-link active");
        
        // For debugging
        // let scrollTop;
        // setTimeout(function(){
            // scrollTop = $(window).scrollTop();
        // }, 1000);
        // alert(scrollTop);
    });
    
    // Change the active link based on the value of scroll top
    function updateNavLink() {
        let scrollTop = $(window).scrollTop();

        if (scrollTop <= 328) {
            $(".nav-link").attr("class", "nav-link");
            $("#home-link").attr("class", "nav-link active");
        }
        else if (scrollTop >= 329 && scrollTop <= 986) {
            $(".nav-link").attr("class", "nav-link");
            $("#about-link").attr("class", "nav-link active");
        }
        else if (scrollTop >= 987 && scrollTop <= 1700) {
            $(".nav-link").attr("class", "nav-link");
            $("#skills-link").attr("class", "nav-link active");
        }
        else if (scrollTop >= 1701 ) {
            $(".nav-link").attr("class", "nav-link");
            $("#projects-link").attr("class", "nav-link active");
        }
    }

    // Every 500 milliseconds check the value of scroll top to update the active link
    setInterval(function(){
        updateNavLink();
    }, 500);

    // Scroll behavior for desktop screen size and touch for mobile devices
    if(innerWidth <= 991){
        $('body').on('touchmove', function(event) {
            updateNavLink();
            event.preventDefault();
        });
    }
    else if(innerWidth >= 992){
        $('body').on('wheel', function(event) {
            updateNavLink();
            event.preventDefault();
        });
    }

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

    // Hover skill and show its label
    $(".skill-list div figure, .card-project").hover(
        function(){
            $(this).css({
                "background-color": "var(--tertiary-color)",
                "-webkit-box-shadow": "-1px 0px 5px 1px rgba(0,0,0,0.75)",
                "-moz-box-shadow": "-1px 0px 5px 1px rgba(0,0,0,0.75)",
                "box-shadow": "-1px 0px 5px 1px rgba(0,0,0,0.75)"
            });
        },
        function(){
            $(this).css("box-shadow", "none")
        }
    )

    $(".btn-check-out").hover(
        function(){
            $(this).css("background-color", "var(--accent-color)")
            $(this).css("color", "var(--primary-color)")
            $(this).siblings(".btn-view-code").css("background-color", "var(--primary-color)")
            $(this).siblings(".btn-view-code").css("color", "var(--accent-color)")
        },
        function(){
            $(this).css("background-color", "var(--primary-color)")
            $(this).css("color", "var(--accent-color)")
            $(this).siblings(".btn-view-code").css("background-color", "var(--accent-color)")
            $(this).siblings(".btn-view-code").css("color", "var(--primary-color)")
        }
    )
    $(".btn-view-code").hover(
        function(){
            $(this).css("background-color", "var(--primary-color)")
            $(this).css("color", "var(--accent-color)")
            $(this).siblings().css("background-color", "var(--accent-color)")
            $(this).siblings().css("color", "var(--primary-color)")
        },
        function(){
            $(this).css("background-color", "var(--accent-color)")
            $(this).css("color", "var(--primary-color)")
            $(this).siblings().css("background-color", "var(--primary-color)")
            $(this).siblings().css("color", "var(--accent-color)")
        }
    )

    // For popover in the skill section 
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    popoverTriggerList.forEach((popoverTriggerEl) => {
        new bootstrap.Popover(popoverTriggerEl, {
            trigger: 'hover', // Set the trigger to hover
        });
    });

})