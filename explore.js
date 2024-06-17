const slides = document.querySelectorAll('.main1');
        let counter = 0;

        // Set the initial position of each slide
        slides.forEach((main1, index) => {
            main1.style.left = `${index * 100}%`;
        });

        // Function to update the slide positions
        const sim = () => {
            slides.forEach((main1) => {
                main1.style.transform = `translateX(-${counter * 100}%)`;
            });
            updateMainHeight();
        };

        // Function to go to the next slide
        const gn = () => {
            if(counter < slides.length - 1) { // Prevent counter from exceeding number of slides
                counter++;
                sim();
            }
        };

        // Function to go to the previous slide
        const gp = () => {
            if (counter > 0) { // Prevent counter from going below zero
                counter--;
                sim();
            }
        };

        // Function to update the height of the main container
        const updateMainHeight = () => {
            const currentSection = slides[counter];
            document.getElementById('main-container').style.height = currentSection.scrollHeight + 'px';
        };

        // Initialize
        sim();
        window.addEventListener('resize', updateMainHeight);