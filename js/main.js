//////////////////////////////////////////////////
// WATS1020 Dom Manipulation
// Custom script goes here.
//////////////////////////////////////////////////
 
$( document  ).ready(function() {
// * Remove the style that hides the `.details` elements and hide them with Javascript when the DOM is ready. This should allow you to support better accessibility because that content will be shown to screen readers, search engine spiders, and more.

  
  $(".details").hide();
$("#thankYou").hide();
  
    var userInfo = {
        firstName: 'Jane',
        lastName: 'Doe' };
      // Place all your Javascript code inside this "document ready" function so
    // it does not run until the DOM is ready for Javascript manipulation.
// TODO: Create a function to listen for clicks on the "login" button.
//      1. When a user clicks the "login" button, hide the login
//          form elements on the page.
  $( "#loginBtn" ).click(function() {
    var email = $("#email").val();
    var password = $("#password").val();
    if (email ==='' || password ===''){
      alert("Login incomplete")
    } else {
      //hide #login-form
 
        $("#login-form").hide();
      //show user-info
      $(".user-info").show()
    }
  });
  $( ".logoutBtn" ).click(function() {
        //Hide user-info
        $(".user-info").hide();
        //Clear fields
        $("#email").val('');
        $("#password").val(''); //Resolve issue
        //Show #login-form
        $("#login-form").show();
    });            
//      2. Fill the user's first and last name into `div.user-info`.
//      (NOTE: You do not have to perform any validation on the data as
//          a base requirement.)

// TODO: Create a function to listen for clicks on all the "View Details"
// buttons so that when a user clicks a "View Details" button they see
// the content contained in the elements with the class "details" in the
// proper part of the screen.
//      1. When user clicks a "view details" button, find the parent of that element.
//      2. Within that parent, find all the elements that have the class `details`.
  //      3. Toggle visibility of all the elements within that parent with the class `details`.
    //      4. Change the text of the "view details" button to read "hide details" so the user
    //          understands they can hide the text again.

   $(function () {
    
 });
  $(".view-details").click(function(){
     $(this).closest("div").children('.details').slideToggle("slow");
     
        $(this).text($(this).text() === "Hide details »" ? "View details »" : "Hide details »");  
  });
//function for jumbotron to make sure text reverts back to learn more on toggle
  $(".view-details-learnMore").click(function(){
     $(this).closest("div").children('.details').slideToggle("slow");
        $(this).text($(this).text() === "Hide details »" ? "Learn more »" : "Hide details »");  
  });
 


  
                       


 
    // TODO: Create a function that listens for clicks on the voting buttons and
    // looks at the `data-vote` attribute on each button to see what was voted for,
    // then determines the updated vote breakdown to adjust the progress bars.

  //      1. Set up an event listener on the buttons with the `vote` class.
 var voteCounts = {
        great: 0,
        greatest: 0,
        total: 0
    };

  
  $(".vote").click(function(){
//      2. When a button is clicked, look at the `data-vote` attribute to determine what the user is voting for ("great" or "greatest").

    //set timeout
 setTimeout(function () { 
        $(this).html("Thank you");},10)   
      


    if ($(this).attr("data-vote")==="great")  {
     ++voteCounts.great;  
     ++voteCounts.total; 
  
    }  else if ($(this).attr("data-vote")==="greatest")  {
     ++voteCounts.greatest;  
     ++voteCounts.total; }
    //      3. Increment the counter for whichever vote talley is affected.
    //      4. Determine the respective percentages (out of 100) for each progress bar.
    //      5. Modify the `width` attribute on each progress bar to set the updated percentage.

 var greatPercent =  ((voteCounts.great / voteCounts.total)*100) + "%";
 var greatestPercent =  ((voteCounts.greatest / voteCounts.total)*100) + "%";  
  

 
 $(".great-progress").width(greatPercent);
 $(".greatest-progress").width(greatestPercent);
               
 $('#voteClicks').html(voteCounts.total)
 $("#thankYou").show();
setTimeout(function() { $("#thankYou").hide("fade"); }, 2000);
// * Add an element on the page that is displayed for a short period of time (see `setTimeout`) to let the user know their vote has been counted after they click one of the vote buttons. 


  

});
 
// * Make votes persistent by saving the `voteCounts` object to `localStorage` (NOTE: LocalStorage is a native Javascript feature, so you will need to consult a more general Javascript resource to learn about it.)
 
});
