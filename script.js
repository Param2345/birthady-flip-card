document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const startBtn = document.getElementById("start-btn");

  startBtn.addEventListener("click", () => {
    const username = usernameInput.value.trim();

    if (!username) {
      alert("Please enter your name before proceeding.");
      return;
    }

    // Save username in localStorage
    localStorage.setItem("username", username);

    // Confirm to user
    alert(`Welcome, ${username}! You can now proceed.`);

    // Redirect to flip-card.html in the same folder
    window.location.href = "flip-card.html";
  });
});
