$(document).ready(function() {
  // Getting jQuery references to the post body, title, form, and category select
  var nameInput = $("#name");
  var ageInput = $("#age");
  var genderSelect = $("#gender");
  var heightInput = $("#height");
  var weightInput = $("#weight");
  var postId;

  // Adding an event listener for when the form is submitted
  $(userInfo).on("submit", function handleFormSubmit(event) {
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
      weight: weightInput.val().trim(),
      height: heightInput.val().trim()
    };

    console.log(newPost);

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
