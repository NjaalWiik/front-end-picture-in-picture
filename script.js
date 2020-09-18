const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const chooseButton = document.getElementById('choose-button');

// Prompt to select media stream, pass to video element, then play
const selectMediaStream = async () => {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => videoElement.play();
  } catch (error) {
    console.log;
  }
};

button.addEventListener('click', async () => {
  button.disable = true;

  await videoElement.requestPictureInPicture();

  button.disable = false;
  videoElement.setAttribute('hidden', true);
});

chooseButton.addEventListener('click', async () => {
  videoElement.removeAttribute('hidden');
  selectMediaStream();
});
