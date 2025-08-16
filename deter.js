/// deter.js
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
            desc: "A user-friendly platform that allows you to create, read, update and delete blog posts.Built with React and Vite, with a clean and responsive UI.",
            liveLink: "https://blogger-red.vercel.app/"
        },
        {
            id: 2,
            name: "RESTAURANT WEBSITE",
            image1: "rest.jpg",
            image2: "rest2.jpg",
            desc:  "A user-friendly platform that allows customers to browse a menu, view detailed food items and place orders.Built with React and Vite, and ideal for showcasing restaurant dishes online.",
            liveLink: "https://restaurant-zeta-khaki.vercel.app/"
        },
    {
        id: 4,
        name: "PORTFOLIO WEBSITE",
        image1: "port.jpg",
        image2: "port2.jpg",
        desc: "A showcase of my personal devlopment project, skills and contact info. users can view project and explore my tech stack.Built with React and vite, it's responsive and easy to navigate.",
        liveLink: "https://portfolio-peach-one-98.vercel.app/"
    },
        {
            id: 3,
            name: "E-COMMERCE STORE",
            image1: "comin.jpg",
            image2: "comin2.jpg",
            desc: "A showcase of my personal devlopment project, skills and contact info. users can view project and explore my tech stack.Built with React and vite, it's responsive and easy to navigate.This project is currently in development. Check back later!😊",
            liveLink: "https://your-ecommerce-link.com"
        }
    ];

    // === Render Projects ===
    const container = document.getElementById("project-container");

    projects.forEach(project => {
        const section = document.createElement("section");
        section.classList.add("project");   // full screen

section.innerHTML = `
    <div class="project-card">
        <img src="${project.image1}" alt="${project.name}" class="project-image top">
        <img src="${project.image2}" alt="${project.name}" class="project-image">
    </div>
    <div class="project-info">
        <h2>${project.name}<a href="${project.liveLink}" target="_blank" class="project-link-btn">View live</a></h2>
        <p>${project.desc}</p>
    </div>
`;


        container.appendChild(section);
    });
});