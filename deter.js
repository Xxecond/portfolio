document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");

    //Theme Toggle
    document.documentElement.classList.add("light-mode");
    toggleBtn.checked = false;

    toggleBtn.addEventListener("change", () => {
        if (toggleBtn.checked) {
            document.documentElement.classList.remove("light-mode");
        } else {
            document.documentElement.classList.add("light-mode");
        }
    });
    // Sticky Header when main header scrolls out of view
    const mainHeader = document.querySelector("header");
    const stickyHeader = document.getElementById("sticky-header");
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                stickyHeader.classList.add("active"); // show sticky header
            } else {
                stickyHeader.classList.remove("active"); // hide sticky header
            }
        });
    }, { threshold: 0 }); // trigger when any part of header leaves viewport
    headerObserver.observe(mainHeader);


    // Projects Data
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

    //Render Projects
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
                <h2>${project.name} <a href="${project.liveLink}" target="_blank" class="project-link-btn">Live</a></h2>
                <p>${project.desc}</p>
            </div>
        `;

        container.appendChild(section);

        const card = section.querySelector(".project-card");
        const images = card.querySelectorAll(".project-image");
        let current = 0;

        // Click-to-toggle card (image) 
        card.addEventListener("click", () => {
            images[current].style.zIndex = 1;
            current = (current + 1) % images.length;
            images[current].style.zIndex = 2;
        });

        //  Timer for card slide (swipe)
        let timer;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const topImage = images[0];
                if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
                    timer = setTimeout(() => {
                        topImage.style.transform = "translateX(-100%)";
                    }, 1710);
                } else {
                    clearTimeout(timer);
                    topImage.style.transform = "translateX(0)";
                }
            });
        }, { threshold: 0.7 });

        observer.observe(card);
    });

    // Fullscreen Nav Toggle
    const hamburger = document.getElementById("hamburger");
    const fullscreenNav = document.getElementById("fullscreen-nav");
    const closeBtn = document.querySelector(".close-btn");
    // Open nav
    hamburger.addEventListener("click", () => {
        fullscreenNav.classList.add("active");
    });

    // Close nav
    closeBtn.addEventListener("click", () => {
        fullscreenNav.classList.remove("active");
    });

    // Auto-close when a link is clicked
    const navLinks = fullscreenNav.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            fullscreenNav.classList.remove("active");
        });
    });
});
