

document.getElementById("no").addEventListener("click", () => {
    var message = document.getElementById("message");
    message.style.bottom = "20px"; // Slide up the message

    // Delay lowering the message back down
    setTimeout(() => {
        message.style.bottom = "-100px"; // Slide down the message
    }, 2000); // Adjust the time (in milliseconds) as needed
});


document.getElementById("yes").addEventListener("click", function() {
    // Create an iframe element to embed the YouTube video
    var videoContainer = document.getElementById("videoContainer");
    var iframe = document.createElement("iframe");
    iframe.setAttribute("width", "400");
    iframe.setAttribute("height", "315");
    iframe.setAttribute("src", "https://youtu.be/WFLGrpGemLg?si=YqY0KJatGUW7A0yb");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", true);
    
    // Clear any existing content in the video container
    videoContainer.innerHTML = "";
    
    // Append the iframe to the video container
    videoContainer.appendChild(iframe);
});
