document.addEventListener("DOMContentLoaded", function () {
    const accordionItems = document.querySelectorAll(".accordion-list > li");

    // Hide all answers initially
    accordionItems.forEach(item => {
        const answer = item.querySelector(".answer");
        if (answer) {
            answer.style.display = "none";
        }
    });

    // Add click event to each accordion item
    accordionItems.forEach(item => {
        item.addEventListener("click", function () {
            const isActive = item.classList.contains("active");

            // Close all active items
            accordionItems.forEach(activeItem => {
                if (activeItem.classList.contains("active")) {
                    activeItem.classList.remove("active");
                    const answer = activeItem.querySelector(".answer");
                    if (answer) {
                        answer.style.display = "none";
                    }
                }
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add("active");
                const answer = item.querySelector(".answer");
                if (answer) {
                    answer.style.display = "block";
                }
            }
        });
    });
});

