  function updateTheme() {
            const now = new Date();
            const hour = now.getHours();
            const isDaytime = hour >= 6 && hour < 18; // 일출 6시부터 일몰 18시까지 낮

            if (isDaytime) {
              document.body.classList.add('daytime');
              document.body.classList.remove('nighttime');
            } else {
              document.body.classList.add('nighttime');
              document.body.classList.remove('daytime');
            }
          }