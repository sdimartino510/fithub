$(document).ready(function(){
    $("#submit-Profile").on("click", function(event){
        event.preventDefault();
        var newName = $("#name").val().trim();
        var newAge = $("#age").val().trim();
        var newWeight = $("#weight").val().trim();
        var newHeight = $("#height").val().trim();
        $.ajax("/profiles/create", {
            type: "POST",
            data: {
                name: newName,
                age: newAge,
                weight: newWeight,
                height: newHeight
            }
        }).then(function(){
            location.reload()
        })
    })
})