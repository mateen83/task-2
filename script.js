





    // document.addEventListener('DOMContentLoaded', function () {
    //     const menuIcon = document.getElementById('menu');
    //     const closeIcon = document.getElementById('close');
    //     const menuContainer = document.getElementById('mainMenu');

    //     menuIcon.addEventListener('click', function() {
    //         menuContainer.classList.add('show');
    //         menuIcon.style.display = 'none';
    //         closeIcon.style.display = 'block';
    //     });

    //     closeIcon.addEventListener('click', function() {
    //         menuContainer.classList.remove('show');
    //         closeIcon.style.display = 'none';
    //         menuIcon.style.display = 'block';
    //     });


    document.addEventListener('DOMContentLoaded', function () {
        const menuIcon = document.getElementById('menu');
        const closeIcon = document.getElementById('close');
        const menuContainer = document.getElementById('mainMenu');
        const menuLinks = menuContainer.querySelectorAll('a'); // Select all anchor links inside mainMenu
    
        menuIcon.addEventListener('click', function() {
            menuContainer.classList.add('show');
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        });
    
        closeIcon.addEventListener('click', function() {
            menuContainer.classList.remove('show');
            closeIcon.style.display = 'none';
            menuIcon.style.display = 'block';
        });
    
        // Close menu when any anchor link inside mainMenu is clicked
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuContainer.classList.remove('show');
                closeIcon.style.display = 'none';
                menuIcon.style.display = 'block';
            });
        });
    });
    

        window.onscroll = function() {
            const header = document.querySelector('.wrapper');
            if (window.pageYOffset > 0) {
                header.classList.add('sticky-header');
            } else {
                header.classList.remove('sticky-header');
            }
        };
    // });











    // window.onscroll = function() {
    //     const header = document.querySelector('.wrapper');
    //     const maxWidth = 960; // Set max width for sticky effect
    
    //     // Check if screen width is 960px or less
    //     if (window.innerWidth <= maxWidth) {
    //         if (window.pageYOffset > 0) {
    //             header.classList.add('sticky-header');
    //         } else {
    //             header.classList.remove('sticky-header');
    //         }
    //     } else {
    //         // Remove sticky class if the screen width exceeds 960px
    //         header.classList.remove('sticky-header');
    //     }
    // };
    














    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const accordionContents = document.querySelectorAll('.accordion-content');
    
    // Open the first accordion by default
    accordionContents[0].style.display = 'block';
    accordionHeaders[0].querySelector('.up-arrow').style.display = 'inline-block';
    accordionHeaders[0].querySelector('.down-arrow').style.display = 'none';
    
    // Add click event to all accordion headers
    accordionHeaders.forEach((header, index) => {
        header.addEventListener('click', () => {
            // Toggle accordion content
            const content = header.nextElementSibling;
            const isOpen = content.style.display === 'block';
            
            // Close all accordions
            accordionContents.forEach(content => {
                content.style.display = 'none';
            });
            accordionHeaders.forEach(h => {
                h.querySelector('.down-arrow').style.display = 'inline-block';
                h.querySelector('.up-arrow').style.display = 'none';
            });

            // Open the clicked accordion if it wasn't open
            if (!isOpen) {
                content.style.display = 'block';
                header.querySelector('.up-arrow').style.display = 'inline-block';
                header.querySelector('.down-arrow').style.display = 'none';
            }
        });
    });




    document.addEventListener("DOMContentLoaded", function() {
        const section = document.querySelector('.sec-3-big-main'); // Target the section
    
        // Use IntersectionObserver to detect when the section comes into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // When the section is in view, start the animation
                    section.classList.add('fill-effect');
                } else {
                    // Optionally, you can remove the class when out of view to reset
                    section.classList.remove('fill-effect');
                }
            });
        }, {
            threshold: 0.1 // Trigger when at least 10% of the section is in view
        });
    
        observer.observe(section);
    });