     document.addEventListener('DOMContentLoaded', () => {
            // 햄버거 메뉴 토글
            const hamburger = document.querySelector('.hamburger');
            const navbar = document.querySelector('nav.navbar');

            hamburger.addEventListener('click', () => {
              navbar.classList.toggle('active');
            });
          });

          