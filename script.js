function showFeedbackMessage() {
    alert("Thanks for the feedback!");
}

document.addEventListener("DOMContentLoaded", function() {
    // Get the last two rating elements
    var rating4 = document.getElementById("rating-4-2");
    var rating5 = document.getElementById("rating-5-2");

    // Add click event listeners to redirect to Google feedback form
    rating4.addEventListener("click", function() {
        window.location.href = "https://g.co/kgs/TSGYfUE"; // Replace with your feedback form URL
    });

    rating5.addEventListener("click", function() {
        window.location.href = "https://g.co/kgs/TSGYfUE"; // Replace with your feedback form URL
    });
});
