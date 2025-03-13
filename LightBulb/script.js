const bulb = document.getElementById('bulb');
const turnOnBtn = document.getElementById('turnOn');
const turnOffBtn = document.getElementById('turnOff');
const statusText = document.getElementById('status');

turnOnBtn.addEventListener('click', () => {
    bulb.src = './images/bulb-on.png'; // This should be your lit bulb image
    statusText.textContent = 'Status: Light is On';
    turnOnBtn.disabled = true;
    turnOffBtn.disabled = false;
});

turnOffBtn.addEventListener('click', () => {
    bulb.src = './images/bulb-off.png'; // This should be your unlit bulb image
    statusText.textContent = 'Status: Light is Off';
    turnOnBtn.disabled = false;
    turnOffBtn.disabled = true;
});
