document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username") || "Friend";
  document.querySelectorAll(".user").forEach(el => el.textContent = username);

  const startBtn = document.getElementById("start-btn");
  const audio = document.getElementById("birthday-audio");

  startBtn.addEventListener("click", () => {
    audio.play().catch(err => console.warn("Autoplay blocked:", err));
    startBtn.style.display = "none";

    const spawnBalloon = () => {
      const colors = ["#FF3FA4", "#FF8A5B", "#FFD93D", "#6BCB77", "#4D96FF", "#A66CFF"];
      const balloon = document.createElement("div");
      balloon.className = "balloon";
      balloon.style.left = Math.random() * 100 + "vw";
      balloon.style.background = colors[Math.floor(Math.random() * colors.length)];
      balloon.style.animationDuration = 5 + Math.random() * 5 + "s";
      document.querySelector(".balloon-container").appendChild(balloon);
      setTimeout(() => balloon.remove(), 10000);
    };

    setInterval(spawnBalloon, 400);
  });

  // Share Modal
  const shareModal = document.getElementById("share-modal");
  const copyLinkBtn = document.getElementById("copy-link-btn");
  const copyBtn = document.getElementById("copy-share");
  const closeShare = document.getElementById("close-share");
  const shareLink = document.getElementById("share-link");

  copyLinkBtn.addEventListener("click", () => {
    shareLink.value = window.location.href;
    shareModal.classList.add("active");
  });

  copyBtn.addEventListener("click", () => {
    shareLink.select();
    navigator.clipboard.writeText(shareLink.value).then(() => {
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy"), 2000);
    });
  });

  closeShare.addEventListener("click", () => {
    shareModal.classList.remove("active");
  });
});
