// Sample project data (replace with your actual projects)
const projects = [
    {
        title: "Project 1",
        description: "Short description of project 1.",
        link: "#" // Link to project page or GitHub repo
    },
    {
        title: "Project 2",
        description: "Short description of project 2.",
        link: "#"
    },
    // Add more projects here
];

const projectGrid = document.querySelector(".project-grid");

projects.forEach(project => {
    const projectElement = `
        <div class="project">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">Learn More</a>
        </div>
    `;
    projectGrid.innerHTML += projectElement;
});