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

    // === Projects Data ===
    const projects = [
        {
            id: 1,
            name: "BLOGGER APPLICATION",
            image1: "blo.jpg",
            image2: "blo2.jpg",
            desc: "A user-friendly platform that allows you to create, read, update and delete blog posts. Built with React and Vite, with a clean and responsive UI.",
            liveLink: "https://blogger-red.vercel.app/"
        },
        {
            id: 2,
            name: "RESTAURANT WEBSITE",
            image1: "rest.jpg",
            image2: "rest2.jpg",
            desc:  "A user-friendly interface that allows customers to browse a menu, view detailed food items and place orders. Built with React and Vite, ideal for showcasing restaurant dishes online.",
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
            desc:"An application interface powered by React + Vite framework that highlights a simple, modern layout with search, product grid, and category navigation. Currently under active development.",
            liveLink: "https://your-ecommerce-link.com"
        }

    ];

    // === Render Projects ===
    const container = document.getElementById("project-container");

    projects.forEach(project => {
        const section = document.createElement("section");
        section.classList.add("project");

        section.innerHTML = `
            <div class="project-card">
                <img src="${project.image1}" alt="${project.name}" class="project-image top">
                <img src="${project.image2}" alt="${project.name}" class="project-image">
            </div>
            <div class="project-info">
                <h2>${project.name} <a href="${project.liveLink}" target="_blank" class="project-link-btn">View Live</a></h2>
                <p>${project.desc}</p>
            </div>
        `;

        container.appendChild(section);

        const card = section.querySelector(".project-card");
        const images = card.querySelectorAll(".project-image");
        let current = 0; // track which image is on top

        // === Click-to-toggle image ===
        card.addEventListener("click", () => {
            images[current].style.zIndex = 1;
            current = (current + 1) % images.length;
            images[current].style.zIndex = 2;
        });

        // === Timer-based auto-slide ===
        let timer;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const topImage = images[0];
                if(entry.isIntersecting && entry.intersectionRatio === 1){
                    // fully visible
                    timer = setTimeout(() => {
                        topImage.style.transform = "translateX(-100%)";
                    }, 1710); // 1.7 seconds= mil
                } else {
                    // reset if not fully visible
                    clearTimeout(timer);
                    topImage.style.transform = "translateX(0)";
                }
            });
        }, { threshold: 1.0 });

        observer.observe(card);
    });
});
