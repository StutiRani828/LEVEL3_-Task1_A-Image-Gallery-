let currentIndex = 0;
const images = document.querySelectorAll('.slideshow img');

function showImage(index) {
  currentIndex = index - 1;
  const imageUrl = images[currentIndex].getAttribute('src');
  document.getElementById('enlargedImg').setAttribute('src', imageUrl);
  document.querySelector('.enlarged').style.display = 'flex';
}

function hideImage() {
  document.querySelector('.enlarged').style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById('enlargedImg').setAttribute('src', images[currentIndex].getAttribute('src'));
}

setInterval(nextImage, 4000); 
