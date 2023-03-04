import { mount as mountTeams } from "teams/TeamsIndex";
import { mount as mountProjects } from "projects/ProjectsIndex";

const links = [
  { name: "Home", src: "/" },
  { name: "Projects", src: "/projects" },
  { name: "Teams", src: "/teams" },
  { name: "About", src: "/about" },
  { name: "Contact", src: "/contact" },
  { name: "Login", src: "/auth/login" },
  { name: "Register", src: "/auth/register" },
];

let template = "";

for (const link of links) {
  template += `<li class="menu-item"><a href="${link.src}">${link.name}</a></li>`;
}

document.querySelector(".app-menu").innerHTML = template;

mountTeams(document.querySelector("#app-teams"));
mountProjects(document.querySelector("#app-projects"));
