const btn = document.querySelector('.file-selector');
const fileInput = document.getElementById('file-input');
const gallery = document.querySelector('.gallery');

const createNewImageTag = (url) => {
  const imgWrapper = document.createElement('div');
  imgWrapper.setAttribute('class', 'imageWrapper');
  const imgTag = document.createElement('img');
  imgTag.setAttribute('src', url);
  imgWrapper.appendChild(imgTag);
  gallery.appendChild(imgWrapper);
};

const selectImageHandler = () => {
  fileInput.click();
};

const uploadedFileHandler = (e) => {
  const file = e.target.files[0];
  const fileUrl = URL.createObjectURL(file);
  createNewImageTag(fileUrl);
};

btn.addEventListener('click', selectImageHandler);

fileInput.addEventListener('change', uploadedFileHandler);