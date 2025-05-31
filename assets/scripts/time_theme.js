   function updateTheme() {
      const now = new Date();
      const hour = now.getHours();
      const isDaytime = hour >= 6 && hour < 18;
      const logo = document.getElementById("logo");
      if (isDaytime) {
        document.body.classList.add('daytime');
        document.body.classList.remove('nighttime');
        logo.src = 'assets/images/icon2.png';
      } else {
        document.body.classList.add('nighttime');
        document.body.classList.remove('daytime');
        logo.src = 'assets/images/nighticon.png';
      }
    }