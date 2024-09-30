// Function to show the thank you message
function showThankYouMessage() {
  var reservationSection = document.querySelector('.reservation');
  var existingThankYouMessage = document.getElementById('thankYouMessage');

  if (existingThankYouMessage) {
    reservationSection.removeChild(existingThankYouMessage);
  }

  var thankYouMessage = document.createElement('p');
  thankYouMessage.innerHTML = 'Thank you for choosing Ambrosia Bistro!';
  thankYouMessage.style.color = 'Red';
  thankYouMessage.id = 'thankYouMessage';
  reservationSection.appendChild(thankYouMessage);

  // Remove the thank you message after 10 seconds
  setTimeout(function() {
    reservationSection.removeChild(thankYouMessage);
  }, 10000);
}

// JavaScript code to handle form submission and update reservation details
document.getElementById("reservationForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var people = parseInt(document.getElementById("people").value); // Convert to number
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

  // Remove previous error message if it exists
  var previousErrorMessage = document.getElementById("error-message");
  if (previousErrorMessage) {
    previousErrorMessage.remove();
  }

  // Check if number of people is greater than 6
  if (people > 6) {
    // Display error message
    var errorMessage = document.createElement("p");
    errorMessage.textContent = "We’re sorry, but we cannot complete your request due to a technical issue. Please try again shortly.";
    errorMessage.style.color = "#933636";
    errorMessage.style.backgroundColor = "#FFA9A9";
    errorMessage.style.fontWeight = "bold";
    errorMessage.id = "error-message"; // Add an id to the error message element
    document.getElementById("additionalText").appendChild(errorMessage);

    // Hide the popup
    document.getElementById("popup").style.display = "none";
  } else {
    // Update reservation details
    document.getElementById("reservation-date").textContent = date;
    document.getElementById("reservation-time").textContent = time;
    document.getElementById("reservation-people").textContent = people;
    document.getElementById("location").textContent = "Your desired location"; // Replace with the actual location

    // Show popup
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    document.getElementById("confirmBtn").disabled = false;

    // Clear previous timer and error message
    clearTimeout(popup.timer);
    var errorMessage = document.getElementById("message");
    if (errorMessage) {
      errorMessage.remove();
    }

    // Start the timer when the popup is shown
    popup.timer = setTimeout(function() {
      // Disable confirm button
      document.getElementById("confirmBtn").disabled = true;

      // Display error message
      var message = document.createElement("p");
      message.textContent = "You cannot modify the information. Please try again.";
      message.style.color = "#933636";
      message.style.backgroundColor = "#FFA9A9";
      message.style.fontWeight = "bold";
      message.id = "message"; // Add an id to the error message element
      document.getElementById("additionalText").appendChild(message);
    }, 240000);
  }
});

// JavaScript code for confirming or canceling the reservation
document.getElementById("confirmBtn").addEventListener("click", function() {
  // Perform confirmation actions
  alert("Reservation confirmed!"); // Replace with your confirmation logic

  // Show the thank you message
  showThankYouMessage();

  // Remove the error message
  var errorMessage = document.getElementById("error-message");
  if (errorMessage) {
    errorMessage.remove();
  }
});

document.getElementById("cancelBtn").addEventListener("click", function() {
  // Perform cancellation actions
  document.getElementById("popup").style.display = "none";
  alert("Reservation canceled!"); // Replace with your cancellation logic

  // Remove the error message
  var errorMessage = document.getElementById("error-message");
  if (errorMessage) {
    errorMessage.remove();
  }

  // Reset the form
  document.getElementById("reservationForm").reset();
});

// JavaScript code to handle button click to clear error message
document.getElementById("findTableBtn").addEventListener("click", function() {
  // Remove previous error message if it exists
  var previousErrorMessage = document.getElementById("error-message");
  if (previousErrorMessage) {
    previousErrorMessage.remove();
  }

  // Get form values
  var people = parseInt(document.getElementById("people").value); // Convert to number

  // Check if number of people is greater than 6
  if (people > 6) {
    // Display error message
    var errorMessage = document.createElement("p");
    errorMessage.textContent = "We’re sorry, but we cannot complete your request due to a technical issue. Please try again shortly.";
    errorMessage.style.color = "#933636";
    errorMessage.style.backgroundColor = "yellow";
    errorMessage.style.fontWeight = "bold";
    errorMessage.id = "error-message"; // Add an id to the error message element
    document.getElementById("additionalText").appendChild(errorMessage);

    // Hide the popup
    document.getElementById("popup").style.display = "none";
  } else {
    // Remove previous error message if it exists
    var previousErrorMessage = document.getElementById("error-message");
    if (previousErrorMessage) {
      previousErrorMessage.remove();
    }
  }
});

function readMoreFunction(event) {
  event.preventDefault();
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("readMoreBtn");

  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    btnText.innerHTML = "- Collapse";
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "+ Read More";
  }
}

// Update the readMoreBtn event listener
document.getElementById("readMoreBtn").onclick = readMoreFunction








