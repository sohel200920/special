function changeGift() {
  const giftDiv = document.getElementById("gift");
  const gifts = {
    1: { emoji: "🌹", text: "Thank You Mariya" },
  };

  const days = Object.keys(gifts);
  const randomDay = days[Math.floor(Math.random() * days.length)];
  const { emoji, text } = gifts[randomDay];

  giftDiv.innerHTML = `<span>${emoji}<span><p>${text}</p>`;
}

document.getElementById("cube").addEventListener("click", function () {
  this.classList.toggle("active");
  if (!this.classList.contains("active")) {
    changeGift();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  changeGift();

  const cube = document.getElementById("cube");
  cube.classList.add("active");
  setTimeout(() => {
    cube.classList.remove("active");
  }, 3000);
});