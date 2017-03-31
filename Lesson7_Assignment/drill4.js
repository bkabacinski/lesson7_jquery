/*
    Project Name: Recipe Display Application
      
    Author: Bridget Kabacinski
      
    Date: March 31, 2017  

    Filename: drill4.js
*/

        //Display the next element after the current target
        function display(event) {
            
            $(event.currentTarget).next().fadeIn("slow");
            
        }//end of display
        
        
        //Attach event listener to h3 elements to invoke display function when clicked
        //$("h3").click(display);
        
        
        //Display animate the next element after the current target
        function display2(event) {
            
            $(event.currentTarget).next().animate({height: 'toggle'}, "slow");
            
        }//end of display2
        
        
        //Attach event listener to h3 elements to invoke display function when clicked
        $("h3").click(display2);
        
        
        //Change the background color h3 element when mouse hovers over it
        $("h3").hover(function() {
            $(this).css("background-color", "yellow");
            }, function() {
            $(this).css("background-color", "pink");
        });
        
        
        //Hover() will trigger display2 method each time mouse hovers over header
        $("h3").hover(display2);
        
        
        