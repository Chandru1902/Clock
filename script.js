function updateClock() {
  const now = new Date();

  const hours24 = now.getHours(); 
  const hours12 = (hours24 % 12) || 12; 

  
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  const ampm = hours24 >= 12 ? 'PM' : 'AM';
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();
