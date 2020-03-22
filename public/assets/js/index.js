// click event
$(document).ready(function() {
    $("#burger-button").on("click", function(event){
        event.preventDefault();
        console.log("I WAS CLICKED!")
        var id = $(this).data("id");
        
        var nowDevoured = $(this).data("nowdevoured")

        var nowDevouredState = {
            devoured: true
        };

    $ajax("/update/" + id, {
        type:"PUT",
        data: nowDevouredState
    }).then(function(){
        console.log("changed burger to ", nowDevoured)
        location.reload();
    })
});
});