// click event
$(document).ready(function() {
    $(".burger-button").on("click", function(event){
        event.preventDefault();
        console.log("I WAS CLICKED!")
        var id = $(this).val(); 
            //undefined
        // var id = event.target.id; 
            //not read at all
        // var id = $(this).attr("id"); 
            //undefined
        // var id = $(this).get(0).id; 
            // not read at all
        console.log(id)
        var nowDevouredState = {
            devoured: true
        };

    $.ajax("/update/" + id, {
        type: "PUT",
        data: nowDevouredState
    }).then(function(){
        console.log("You ate the burger")
        location.reload();
    })
});
});