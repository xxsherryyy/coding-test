//Wait for DOM to load
$(document).ready(function () {
// Event listener 
$("#gif").on("click", function () {

    // Storing our giphy API URL for a random programmer image
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=programmer";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // After the data from the AJAX request comes back
        .then(function (response) {

            // Saving the image_original_url property
            var imageUrl = response.data.image_original_url;

            // Creating and storing an image tag
            var image = $("<img>");

            // Setting the image src attribute to imageUrl
            image.attr("src", imageUrl);
            image.attr("alt", "programmer");

            // Prepending the image to the profession div
            $("#image").prepend(image);

           
        });
});

//Constructor function with methods name & profession
class employee {
    constructor(name,profession) {
        this._name = name;
        this._profession = profession
    }
    get name() {
        return this._name;
    }
    get profession() {
        return this._profession;
    }
}

//Instantiate employee class
const sherry = new employee('Sherry Yang', "Software Developer")

//Append values
$("#name").append(sherry.name);
$("#profession").append(sherry.profession)
});