const btn = document.querySelector('.file-selector');
const fileInput = document.getElementById('file-input');
const gallery = document.querySelector('.music-gallery');

const createNewAudioTag = (url) => {
  const audioWrapper = document.createElement('div');
  audioWrapper.setAttribute('class', 'audioWrapper');
  const audioTag = document.createElement('audio');
  audioTag.setAttribute('src', url);
  audioTag.setAttribute('controls', '');
  audioTag.addEventListener('loadedmetadata', () => {
    const info = document.createElement('p');
    const minutes = Math.floor(audioTag.duration / 60);
    let seconds = (audioTag.duration - minutes * 60).toFixed(0);
    seconds = seconds > 10 ? seconds : `0${seconds}`;
    info.textContent = `Duration: ${minutes}:${seconds}`;
    audioWrapper.appendChild(audioTag);
    audioWrapper.appendChild(info);
    gallery.appendChild(audioWrapper);
  });
};

const selectImageHandler = () => {
  fileInput.click();
};

const uploadedFileHandler = (e) => {
  const file = e.target.files[0];
  const fileUrl = URL.createObjectURL(file);
  createNewAudioTag(fileUrl);
};

btn.addEventListener('click', selectImageHandler);

fileInput.addEventListener('change', uploadedFileHandler);