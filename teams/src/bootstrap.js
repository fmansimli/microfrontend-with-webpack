export const mount = (element) => {
  const teams = [
    { title: "team title 1", description: "team description 1" },
    { title: "team title 2", description: "team description 2" },
    { title: "team title 3", description: "team description 3" },
  ];

  let template = '<div class="teams-list">';

  for (const team of teams) {
    template += ` <div class="team-item">
                            <span class="team-title">${team.title}</span>
                            <div class="team-description">${team.description}</div>
                        </div>
                       `;
  }
  template += "</div>";

  element.innerHTML = template;
};

if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#app-teams");
  if (element) {
    mount(element);
  }
}
