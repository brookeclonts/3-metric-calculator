/* ON RESIZE CHANGE HTML VALUES */  
/* ----------------- global VARIABLES---------------- */
        var maxDials= 200;
        var currentUserDials= 20;
        var userDials= currentUserDials;

        var userCurrentContactP= 20;
        var userContactP= userCurrentContactP;

        var userCurrentCloseRateP= 20;
        var userCloseRateP= userCurrentCloseRateP;

/* Change Total Revenue Increase Percentages */

function changeRevAmounts(){
    var revIncreasePercent=userDials + userContactP + userCloseRateP;
    $(".revIncreaseP").html(revIncreasePercent);

    var monthlyPercentIncrease= revIncreasePercent;
    $(".monthlyRI").html(monthlyPercentIncrease);

    var annualPercentIncrease= revIncreasePercent;
    $(".annualRI").html(monthlyPercentIncrease);
} 

/* -----------------END VARIABLES -----------*/


/* Change Total Revenue Increase Percentages */

/*DAILY DIALS SLIDER*/

        /* solve for x */ 
        var percentofMax= Math.round((100 * userDials) / maxDials);

        function sliderResize(){
            // get slider height
            var newSliderHeight = $("#dailyDialsSlider").height();
            var parentDivsHeight=$(".slider-container").height();
            //compare slider with parent div to get percentage
            var newSliderPercentage= Math.round(100-((newSliderHeight/parentDivsHeight) * 100));
            //recalculate userDials
            var setNew= (window.maxDials * newSliderPercentage) / 100;
            window.userDials = setNew;
            //set new userDials in html
            document.getElementById("nMetricDDR").innerHTML = (window.userDials);      
        };

/* End Daily Dials slider */

/* CONTACT PERCENTAGE SLIDER */

        function sliderResizeCP(){
           var newSliderHeight = $("#contactSlider").height();
           var parentDivsHeight=$(".slider-container").height();
            //compare slider with parent div to get percentage
           var newSliderPercentage= Math.round(100-((newSliderHeight/parentDivsHeight) * 100));
           window.userContactP= newSliderPercentage;
           document.getElementById("nMetricDC").innerHTML = (window.userContactP);  
        }

/* end Contact Percentage Slider */ 
    
/* CLOSE RATE PERCENTAGE SLIDER */

        function sliderResizeCR(){
            var newSliderHeight = $("#closeRateSlider").height();
            var parentDivsHeight=$(".slider-container").height();
            //compare slider with parent div to get percentage
            var newSliderPercentage= Math.round(100-((newSliderHeight/parentDivsHeight) * 100));
            window.userCloseRateP= newSliderPercentage;
            document.getElementById("nMetricCR").innerHTML = (window.userCloseRateP); 
        }

/* end Close Rate Percentage Slider */ 



/*--------------------------on slider resize-----------------------------*/

/* REMOVE TRANSITION ON RESIZE */
        function removeTransition(){
            $(".slide-up-down").removeClass("sliding-transition");
        }

/* SLIDE UP AND DOWN - Interactive JS*/

    interact('.slide-up-down')
  .resizable(true)
  .on('resizemove', function (event) {
    var target = event.target;

    // add the change in coords to the previous width of the target element
    var
      newWidth  = parseFloat(target.style.width ) + event.dx,
      newHeight = parseFloat(target.style.height) + event.dy;

    // update the element's style
    target.style.width  = newWidth + 'px';
    target.style.height = newHeight + 'px';
    sliderResize();
    sliderResizeCP();
    sliderResizeCR();
    changeRevAmounts();
  });
   
/* INSERTING METRICS INTO HTML and Initial slider percentages*/

  $(document).ready(function(){
        //in Metric Boxes
            changeRevAmounts();

            document.getElementById("cMetricDDR").innerHTML = userDials;
            document.getElementById("nMetricDDR").innerHTML = currentUserDials;
            document.getElementById("cMetricDC").innerHTML = userCurrentContactP;
            document.getElementById("nMetricDC").innerHTML = userContactP;
            document.getElementById("cMetricCR").innerHTML = userCurrentCloseRateP;
            document.getElementById("nMetricCR").innerHTML = userCloseRateP;

        //initial slider heights - Daily Dials Slider
            var sliderHeightDD=(100- percentofMax) + "%";
            $("#dailyDialsSlider").css("height", sliderHeightDD);
        //initial slider heights - Contact Rate Slider
            var sliderHeightCP = (100 - window.userContactP) + "%";
            $("#contactSlider").css("height", sliderHeightCP);
        //initial slider heights - Close Rates Slider
            var sliderHeightCRP= (100 - window.userCloseRateP)+ "%";
            $("#closeRateSlider").css("height", sliderHeightCRP);
});
       




/*-------------- PLUS MINUS GLYPHS!!! -------------- */
    function plusOneDD(){
        var sliderHeight = $("#dailyDialsSlider").height();
        var newSliderHeight= sliderHeight - 5;
        $("#dailyDialsSlider").css("height", newSliderHeight);
        sliderResize();
        changeRevAmounts();
    }

    function plusOneCP(){
        var sliderHeight = $("#contactSlider").height();
        var newSliderHeight= sliderHeight - 2;
        $("#contactSlider").css("height", newSliderHeight);
        sliderResizeCP();
        changeRevAmounts();

    }

    function plusOneCR(){
        var sliderHeight = $("#closeRateSlider").height();
        var newSliderHeight= sliderHeight - 2;
        $("#closeRateSlider").css("height", newSliderHeight);
        sliderResizeCR();
        changeRevAmounts();
    }


    function minusOneDD(){
        var sliderHeight = $("#dailyDialsSlider").height();
        var newSliderHeight= sliderHeight + 5;
        $("#dailyDialsSlider").css("height", newSliderHeight);
        sliderResize();
        changeRevAmounts();
    }

    function minusOneCP(){
        var sliderHeight = $("#contactSlider").height();
        var newSliderHeight= sliderHeight + 2;
        $("#contactSlider").css("height", newSliderHeight);
        sliderResizeCP();
        changeRevAmounts();

    }

    function minusOneCR(){
        var sliderHeight = $("#closeRateSlider").height();
        var newSliderHeight= sliderHeight + 2;
        $("#closeRateSlider").css("height", newSliderHeight);
        sliderResizeCR();
        changeRevAmounts();
    }










