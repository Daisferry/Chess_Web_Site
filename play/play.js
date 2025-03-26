    const statusText = document.getElementById('status');
    const cancelButton = document.getElementById('cancel-button');

    
    setTimeout(() => 
    {
      statusText.textContent = "Opponent found! Preparing match...";
      setTimeout(() => 
      {
        statusText.textContent = "Match starting in 3... 2... 1...";
        setTimeout(() => 
        {
          statusText.textContent = "Match found, redirecting shortly. Good luck!";
          cancelButton.style.display = 'none'; 
          setTimeout(() => 
          {
            window.location.href="../main/main.html";
          }, 3000)
        }, 3000);
      }, 2000);
    }, 5000);

    
    cancelButton.addEventListener('click', () => {
      statusText.textContent = "Scanning canceled.";
      cancelButton.style.display = 'none'; 
      setTimeout(() => {
        window.location.href="../main/main.html";
      }, 1000)
    });