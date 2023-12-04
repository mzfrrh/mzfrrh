function validateForm() {
    var name = document.getElementById("name").value;
    var staffNo = document.getElementById("staffNo").value;
    var department = document.getElementById("department").value;
    var contactNo = document.getElementById("contactNo").value;
    var email = document.getElementById("email").value;
    var amount = document.getElementById("amount").value;
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    var date = document.getElementById("date").value;

    
    if (name === "" || staffNo === "" || department === "" || contactNo === "" || email === "" || amount === "" || startDate === "" || endDate === "" || date === "") {
        alert("All fields must be filled out");
        return false;
    }

    

    // If all checks pass, the form is valid
    return true;
}

// Show/hide the scroll button based on the user's scroll position
window.onscroll = function() {
    showScrollButton();
};

function showScrollButton() {
    var scrollButton = document.getElementById("scrollButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

// Scroll to the top of the page when the button is clicked
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
