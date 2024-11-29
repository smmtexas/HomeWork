function upDate(previewPic) {
  const imageContainer = document.getElementById("image");
  imageContainer.style.backgroundImage = `url(${previewPic.src})`;
  imageContainer.textContent = previewPic.alt;
}

function unDo() {
  const imageContainer = document.getElementById("image");
  imageContainer.style.backgroundImage = ""; // Replace with original background image URL from CSS
  imageContainer.textContent = "Hover over an image below to display here."; // Replace with original text from HTML
}