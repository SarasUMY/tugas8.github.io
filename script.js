function updateTime() {
    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = date.toLocaleDateString('en-US', options);
    var formattedTime = date.toLocaleTimeString('en-US');
    
    document.getElementById('date').textContent = formattedDate;
    document.getElementById('time').textContent = formattedTime;
  }
  
  // Panggil updateTime setiap detik (1000 milidetik)
  setInterval(updateTime, 1000);