/* eslint-disable indent */
/* eslint-disable prettier/prettier */
$(document).ready(function() {
  // Getting jQuery references to the post body, title, form, and category select
  var nameInput = $("#name");
  var ageInput = $("#age");
  var genderSelect = $("#gender");
  var heightInput = $("#height");
  var weightInput = $("#weight");
  var postId;
  var updating = false; 
  
    // Adding an event listener for when the form is submitted
    $("#signUp").click( function (event) {
      event.preventDefault();
      // Wont submit the post if we are missing a body or a title
      if (!nameInput.val().trim() || !ageInput.val().trim()) {
        return;
      }
      // Constructing a newPost object to hand to the database
      var newPost = {
        name: nameInput.val().trim(),
        age: ageInput.val().trim(),
        gender: genderSelect.val(),
        weight: weightInput.val(),
        height: heightInput.val().trim()
      };
  
      console.log(newPost);
      console.log("clicked!");

      alert("adding...");
//        window.location.href = "/profile";
      var newSurvey = {
        water: $("#water")
          .val()
          .trim(" "),
        exercise: $("#exercise")
          .val()
          .trim(" "),
        veggies: $("#veggies")
          .val()
          .trim(" "),
        fruit: $("#fruit")
          .val()
          .trim(" "),
        sleep: $("#sleep")
          .val()
          .trim(" ")
      };
      console.log(newSurvey);
      

      var waterResults = $("<div>");
      waterResults.addClass("modal-styling");
      function waterResponse(){
      if (newSurvey.water < 4){
        console.log("bad habit");
        waterResults.text("You may need to consume more water! An adequate daily fluid intake is: About 15.5 cups (3.7 liters) of fluids for men or About 11.5 cups (2.7 liters) of fluids a day for women. About 20 percent of daily fluid intake usually comes from food and the rest from drinks.")}
      else {
        "You've been staying hydrated!";}
      }

      waterResponse();
      $("#results").append(waterResults);

      var exerciseResult = $("<div>");
      exerciseResult.addClass("modal-styling");
      function exerciseResponse(){
      if (newSurvey.exercise < 3){
        console.log("bad habit");
        exerciseResult.text("You may need to stay more active! Get at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity a week, or a combination of moderate and vigorous activity.")}
      else {
        "You've been staying active!";}
      }

      exerciseResponse();
      $('#results').append(exerciseResult);


      var veggieResult = $("<div>");
      veggieResult.addClass("modal-styling");
      function veggieResponse(){
      if (newSurvey.veggies < 7){
        console.log("bad habit");
        veggieResult.text("You need to eat more veggie! The amount of vegetables you should aim for if you're a woman is at least 2 1/2 cups each day and at least 3 cups if you're a man. Shoot for even more if you work out or are physically active for a half hour or more each day!")}
      else {
        "You've been eating enough of veggie! Keep up with your good diet!";}
      }

      veggieResponse();
      $("#results").append(veggieResult);

      var fruitResult = $("<div>");
      fruitResult.addClass("modal-styling");
      function fruitResponse(){
      if (newSurvey.fruit < 7){
        console.log("bad habit");
        fruitResult.text("You need to eat more fruit! Depending on their age and sex federal guidelines recommend that adults eat at least 1½ to 2 cups per day of fruit and 2 to 3 cups per day of vegetables as part of a healthy eating pattern.")}
      else {
        "You've been eating enough of fruit! Keep up with your good diet!";}
      }

      fruitResponse();
      $("#results").append(fruitResult);

      var sleepResult = $("<div>");
      sleepResult.addClass("modal-styling");
      function sleepResponse(){
      if (newSurvey.sleep < 7){
        console.log("bad habit");
        sleepResult.text("You are not resting enough! Teenagers (14-17): Sleep range widened by one hour to 8-10 hours (previously it was 8.5-9.5) Younger adults (18-25): Sleep range is 7-9 hours (new age category) Adults (26-64): Sleep range did not change and remains 7-9 hours. ")}
      else if (newSurvey.sleep >9){
        sleepResult.text("You are not resting too much! Teenagers (14-17): Sleep range widened by one hour to 8-10 hours (previously it was 8.5-9.5) Younger adults (18-25): Sleep range is 7-9 hours (new age category) Adults (26-64): Sleep range did not change and remains 7-9 hours. ")}
      else{
        sleepResult.text("You've getting enough of rest!");}
      }

      sleepResponse();
      $("#results").append(sleepResult);
      console.log(results);
  
      // If we're updating a post run updatePost to update a post
      // Otherwise run submitPost to create a whole new post
      if (updating) {
        newPost.id = postId;
        updatePost(newPost);
      } else {
        submitPost(newPost);
      }
    });
  
    // Submits a new post and brings user to blog page upon completion
    function submitPost(Post) {
      $.post("/api/posts/", Post, function() {
        window.location.href = "/profile";
      });
    }
  
    // Gets post data for a post if we're editing
    // function getPostData(id) {
    //   $.get("/api/posts/" + id, function(data) {
    //     if (data) {
    //       // If this post exists, prefill our cms forms with its data
    //       titleInput.val(data.title);
    //       bodyInput.val(data.body);
    //       postCategorySelect.val(data.category);
    //       // If we have a post with this id, set a flag for us to know to update the post
    //       // when we hit submit
    //       updating = true;
    //     }
    //   });
    // }
  
    // Update a given post, bring user to the blog page when done
    function updatePost(post) {
      $.ajax({
        method: "PUT",
        url: "/api/posts",
        data: post
      }).then(function() {
        window.location.href = "/profile";
      });
    }
  });