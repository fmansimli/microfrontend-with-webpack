export const mount = (element) => {
  const projects = [
    { title: "project title 1", description: "project description 1" },
    { title: "project title 2", description: "project description 2" },
    { title: "project title 3", description: "project description 3" },
  ];

  let template = '<div class="projects-list">';

  for (const project of projects) {
    template += ` <div class="project-item">
                            <span class="project-title">${project.title}</span>
                            <div class="project-description">${project.description}</div>
                        </div>
                       `;
  }
  template += "</div>";

  element.innerHTML = template;
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#app-projects");
  if (element) {
    mount(element);
  }
}
