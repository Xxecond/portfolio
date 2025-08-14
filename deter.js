document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            id: 1,
            name: "BLOGGER-APPLICATION",
            className: "Stop",
            text: "TAP TO VIEW",
            liveLink: "https://blogger-git-main-xxeconds-projects.vercel.app/"
        },
        {
            id: 2,
            name: "RESTAURANT SITE",
            className: "Sright",
            text: "TAP TO VIEW",
            liveLink: "https://restaurant-git-main-xxeconds-projects.vercel.app/"
        },
        {
            id: 3,
            name: "PORTFOLIO",
            className: "Sleft",
            text: "TAP TO VIEW",
            liveLink: "https://portfolio-git-main-xxeconds-projects.vercel.app/"
        },
        {
            id: 4,
            name: "COMING SOON",
            className: "Sbottom",
            text: "TAP TO VIEW",
            liveLink: "#"
        }
    ];

    const container = document.getElementById("project-container");

    projects.forEach(project => {
        const link = document.createElement("a");
        link.href = project.liveLink;
        link.target = "_blank";

        const box = document.createElement("div");
        box.className = `project-box ${project.className}`;

        const textContainer = document.createElement("div");
        textContainer.className = "project-text-container";

        const tapText = document.createElement("p");
        tapText.className = "tap-text";
        tapText.textContent = project.text;

        const nameText = document.createElement("p");
        nameText.className = "project-name";
        nameText.textContent = project.name;

        textContainer.appendChild(tapText);
        textContainer.appendChild(nameText);
        box.appendChild(textContainer);
        link.appendChild(box);
        container.appendChild(link);
    });

    // Theme toggle switch
const toggleBtn = document.getElementById("theme-toggle");

// Listen for a click on the button
toggleBtn.addEventListener("click", () => {
      document.documentElement.classList.toggle("light-mode");;
    
});

    });