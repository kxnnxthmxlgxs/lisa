

document.getElementById("no").addEventListener("click", () => {
    var message = document.getElementById("message");
    message.style.bottom = "20px"; // Slide up the message

    // Delay lowering the message back down
    setTimeout(() => {
        message.style.bottom = "-100px"; // Slide down the message
    }, 2000); // Adjust the time (in milliseconds) as needed
});


document.getElementById("yes").addEventListener("click", function() {
    // Show the image overlay
    document.querySelector(".image-overlay").style.display = "block";
    // Show the centered image container
    document.querySelector(".image-container").style.display = "block";
});

