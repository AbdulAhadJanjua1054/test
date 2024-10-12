// JavaScript for optional dynamic image loading
document.getElementById('image-placeholder').addEventListener('click', () => {
  let imgURL = prompt("Enter the URL of the DFSK vehicle image:");
  if (imgURL) {
    document.getElementById('image-placeholder').style.backgroundImage = `url(${imgURL})`;
    document.querySelector('.image-text').style.display = 'none';
  }
});
