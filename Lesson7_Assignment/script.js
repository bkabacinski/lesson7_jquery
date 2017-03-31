/*
    Project Name: Recipe Display Application
      
    Author: Bridget Kabacinski
      
    Date: March 31, 2017  

    Filename: script.js
*/

        //Display the next element after the current target
        function display(event) {
            
            $(event.currentTarget).next().fadeIn("slow");
            
        }//end of display
        
        
        //Attach event listener to h3 elements to invoke display function when clicked
        $("h3").click(display);
        
        
        