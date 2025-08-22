document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");

    // === Theme Toggle ===
    document.documentElement.classList.add("light-mode");
    toggleBtn.checked = false;

    toggleBtn.addEventListener("change", () => {
        if (toggleBtn.checked) {
            document.documentElement.classList.remove("light-mode");
        } else {
            document.documentElement.classList.add("light-mode");
        }
    });

    // === Sticky Header ===
    const mainHeader = document.querySelector("header");
    const stickyHeader = document.getElementById("sticky-header");
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                stickyHeader.classList.add("active"); 
            } else {
                stickyHeader.classList.remove("active"); 
            }
        });
    }, { threshold: 0 });
    headerObserver.observe(mainHeader);

    // === Projects Data ===
    const projects = [
        {
            id: 1,
            name: "BLOGGER APPLICATION",
            image1: "blo.jpg",
            image2: "blo2.jpg",
            desc: "A highly intuitive, user-friendly platform that allows you to effortlessly create, read, update, and delete blog posts efficiently. Built with React and Vite, with a clean and responsive UI.",
            liveLink: "https://blogger-red.vercel.app/"
        },
        {
            id: 2,
            name: "RESTAURANT WEBSITE",
            image1: "rest.jpg",
            image2: "rest2.jpg",
            desc: "A user-friendly interface that allows customers to easily browse a menu, view detailed food items, and place orders online. Built with React and Vite, ideal for showcasing restaurant dishes online.",
            liveLink: "https://restaurant-zeta-khaki.vercel.app/"
        },
        {
            id: 4,
            name: "PORTFOLIO WEBSITE",
            image1: "port.jpg",
            image2: "port2.jpg",
            desc: "A showcase of my personal development project, skills, and contact info. Users can view projects and explore my tech stack. Built with React and Vite, responsive and easy to navigate.",
            liveLink: "https://portfolioo-wx2k.vercel.app/"
        },
        {
            id: 3,
            name: "E-COMMERCE STORE",
            image1: "comin.jpg",
            image2: "comin2.jpg",
            desc: "An application interface powered by React + Vite framework that highlights a simple, modern layout with search, product grid, and category navigation. Currently under active development.",
            liveLink: "https://your-ecommerce-link.com"
        }
    ];

 
    const container = document.getElementById("project-container");
    const allCards = [];

    projects.forEach(project => {
        const section = document.createElement("section");
        section.classList.add("project");

        section.innerHTML = `
            <div class="project-card">
                <img src="${project.image1}" class="project-image active">
                <img src="${project.image2}" class="project-image">
            </div>
            <div class="project-info">
                <h2>${project.name} <a href="${project.liveLink}" target="_blank" class="project-link-btn">Live</a></h2>
                <p>${project.desc}</p>
            </div>
        `;
        container.appendChild(section);

        const card = section.querySelector(".project-card");
        const images = card.querySelectorAll(".project-image");

        allCards.push({ images, current: 0, timer: null });

        // === Click-to-toggle (back & forth) ===
        card.addEventListener("click", () => {
            const cardData = allCards.find(c => c.images[0] === images[0]);
            images.forEach(img => img.classList.remove("active", "prev"));

            // toggle to next or previous image
            cardData.current = (cardData.current + 1) % images.length;
            images[cardData.current].classList.add("active");
        });

        // === IntersectionObserver for auto-swipe and reset ===
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const cardData = allCards.find(c => c.images[0] === images[0]);
                if (!cardData) return;

                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    // Swipe forward after 3s
                    cardData.timer = setTimeout(() => {
                        images.forEach(img => img.classList.remove("active", "prev"));
                        cardData.current = (cardData.current + 1) % images.length;
                        images[cardData.current].classList.add("active");
                    }, 3000);
                } else {
                    // Less than half visible → reset to first image
                    clearTimeout(cardData.timer);
                    images.forEach(img => img.classList.remove("active", "prev"));
                    cardData.current = 0;
                    images[0].classList.add("active");
                }
            });
        }, { threshold: 0.5 });

        observer.observe(card);
    });
});
