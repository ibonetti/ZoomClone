

const recordClick = function (recorderBtn) {
  this.recordingEnabled = false
  return () => {
    this.recordingEnabled = !this.recordingEnabled
    recorderBtn.style.color = this.recordingEnabled ? 'red' : 'white'
  }
}

const onload = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const room = urlParams.get('room');
  console.log('this is the room', room)

  //const recorderBtn = document.getElementById('record')
  //recorderBtn.addEventListener('click', recordClick(recorderBtn))

  const view = new View();
  const media = new Media();
  const deps = {
    view,
    media,
    room
  };

  Business.initialize(deps);

  //view.renderVideo({ userId: 'test01', url: 'https://media.giphy.com/media/8JDd4W8oj1RYBGvSXV/giphy.mp4' });

}

window.onload = onload