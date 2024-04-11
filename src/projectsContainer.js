const projectContainer = [
  {
    projectTitle: "default",
    todoLists: [],
  },
];

export function AddProjects(name) {
  return {
    projectTitle: name,
    todoLists: [],
  };
}

export function addProjectsToArr(title) {
  projectContainer.push(AddProjects(title));
}

export function displayLog() {
  console.table(projectContainer);
}

// write a function that loop through all elements in the project container

export function loopProjects(selectedDiv) {
  projectContainer.forEach((project, index) => {
    selectedDiv.innerHTML += `<div class= "catagories">
            <p>${project.projectTitle}</p>
            <svg class="project-edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
            <svg project-index = ${index} class="project-delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
            </div>`;
    const deleteProjectBtnAll = document.querySelectorAll(".project-delete");
    deleteProjectBtnAll.forEach((Btn) => {
      Btn.addEventListener("click", () => {
        console.log("delete button is on action");
        const projectIndex = Btn.getAttribute("project-index");
        console.log("Index:", projectIndex); // Add this line to check the index
        deleteFromArr(projectIndex);
        Btn.parentElement.remove();
      });
    });
    // const newProjectDiv = document.createElement("div");
    // const newProjectDivTxt = document.createElement("p");
    // const editBtn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // editBtn.setAttribute("width", "100");
    // editBtn.setAttribute("height", "100");
    // editBtn.setAttribute("viewBox", "0 0 24 24");
    // editBtn.classList.add("project-edit");
    // const editpath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    // editpath.setAttribute("d", "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z");
    // editBtn.classList.add("project-edit");
    // newProjectDivTxt.textContent = project.projectTitle;
    // newProjectDiv.classList.add("catagories");
    // editBtn.appendChild(editpath);
    // newProjectDiv.appendChild(newProjectDivTxt);
    // newProjectDiv.appendChild(editBtn);
    // selectedDiv.appendChild(newProjectDiv);
  });
}

export function renderProjects() {
  const selectedDiv = document.querySelector(".project-container-div");
  selectedDiv.innerHTML = "";
  projectContainer.forEach((project, index) => {
    const newProjectDiv = document.createElement("div");
    const newProjectDivTxt = document.createElement("p");
    const deleteProjectBtn = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    deleteProjectBtn.setAttribute("width", "100");
    deleteProjectBtn.setAttribute("height", "100");
    deleteProjectBtn.setAttribute("viewBox", "0 0 24 24");
    deleteProjectBtn.classList.add("project-delete");
    deleteProjectBtn.setAttribute("project-index", index);
    const deletePath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    deletePath.setAttribute(
      "d",
      "M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
    );
    newProjectDivTxt.textContent = project.projectTitle;
    const editBtn = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    editBtn.setAttribute("width", "100");
    editBtn.setAttribute("height", "100");
    editBtn.setAttribute("viewBox", "0 0 24 24");
    editBtn.classList.add("project-edit");
    const editpath = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    editpath.setAttribute(
      "d",
      "M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
    );
    editBtn.appendChild(editpath);
    newProjectDiv.appendChild(newProjectDivTxt);
    newProjectDiv.appendChild(editBtn);
    deleteProjectBtn.appendChild(deletePath);
    newProjectDiv.appendChild(deleteProjectBtn);
    newProjectDiv.classList.add("catagories");
    selectedDiv.appendChild(newProjectDiv);
    deleteProjectBtn.addEventListener("click", (e) => {
      // newProjectDiv.appendChild(newProjectDivTxt);
      deleteProjectBtn.parentElement.remove();
      const projectIndex = deleteProjectBtn.getAttribute("project-index");
      console.log(projectIndex);
      projectContainer.splice(projectIndex, 1);
      console.table(projectContainer);
      renderProjects();
    });
  });
}

function deleteProject() {
  const deleteProjectBtnAll = document.querySelectorAll(".project-delete");
  deleteProjectBtnAll.forEach((Btn) => {
    Btn.addEventListener("click", () => {
      console.log("delete button is on action");
      const projectIndex = Btn.getAttribute("project-index");
      console.log("Index:", projectIndex); // Add this line to check the index
      deleteFromArr(projectIndex);
      Btn.parentElement.remove();
    });
  });
}

export function editProjectsName(index) {
  return;
}

export function deleteFromArr(index) {
  projectContainer.splice(index, 1);
  console.table(projectContainer);
  // renderProjects();
}
