import { addProjectsToArr } from "./projectsContainer";
import { displayLog,loopProjects,editProjectsName,deleteFromArr, renderProjects } from "./projectsContainer";



const addProjectsBtn = document.querySelector(".addProjects");
const ProjectsModal = document.querySelector(".addProjectsBox")
export function addProjectModal()
    {addProjectsBtn.addEventListener("click",() => {
        ProjectsModal.showModal()
})}

const cancelProjectsModalBtn = document.querySelector(".cancelProjectModal");
const crossProjectModalBtn = document.querySelector("#cross-button");
const projectModalInput = document.querySelector(`input[id="projectName"]`);
const addProjectsBtnModal = document.querySelector(".addProjectModal");
const ProjectDropDownBtn = document.querySelector(".drop-down");
const projectContainerDiv = document.querySelector(".project-container-div");
const sidebar = document.querySelector(".sidebar");



export function closeAllModal() {
        cancelProjectsModalBtn.addEventListener("click", closeProjectModal);
        crossProjectModalBtn.addEventListener("click", closeProjectModal);

    }

function closeProjectModal(){
    projectModalInput.value = "";
    ProjectsModal.close();
}

export function addProjectToDisplay(){
    addProjectsBtnModal.addEventListener("click", () => {
        let projectTitle = projectModalInput.value;
        if(projectModalInput.checkValidity()){
            addProjectsToArr(projectTitle);
            closeProjectModal();
            if(ProjectDropDownBtn.classList.contains("projects-dropdown-active")){
                // projectContainerDiv.innerHTML = "";
                // loopProjects(projectContainerDiv);
                // editProject();
                // deleteProject();
                renderProjects();
                editProject();
            } else projectContainerDiv.innerHTML = "";
            
        }
        else projectModalInput.reportValidity()
        displayLog();
    })
//     ProjectDropDownBtn.addEventListener("click", (e)=> {
//         ProjectDropDownBtn.classList.toggle("projects-dropdown-active");
//         console.log(ProjectDropDownBtn);
//         if(ProjectDropDownBtn.classList.contains("projects-dropdown-active")){
//             console.log("hello");
//             loopProjects(projectContainerDiv);
//             editProject();
//             deleteProject();
            
//             // const editProjectBtnAll = document.querySelectorAll(".project-edit");
//             // editProjectBtnAll.forEach(Btn => {
//             //     Btn.addEventListener("click", () => {
//             //     console.log("edit button is working!")
//             // })})
//         } else projectContainerDiv.innerHTML = "";
//     }
//     )
   
// }


    ProjectDropDownBtn.addEventListener("click", (e)=> {
        ProjectDropDownBtn.classList.toggle("projects-dropdown-active");
        console.log(ProjectDropDownBtn);
        if(ProjectDropDownBtn.classList.contains("projects-dropdown-active")){
            renderProjects();
            editProject();
            
            // const editProjectBtnAll = document.querySelectorAll(".project-edit");
            // editProjectBtnAll.forEach(Btn => {
            //     Btn.addEventListener("click", () => {
            //     console.log("edit button is working!")
            // })})
        } else projectContainerDiv.innerHTML = "";
    }
    )
   
}

const sidebarCatagories = document.querySelectorAll(".catagories");
let selectedBtn = null;
export default function sidebarButtonSelection()
    { sidebarCatagories.forEach(button =>
            button.addEventListener("click",()=>{
                console.log(button);
            
                if(selectedBtn){
                    selectedBtn.classList.remove("selected");
                }
                button.classList.add("selected");
                selectedBtn = button;
    }))}


function editProject(){
    const editProjectBtnAll = document.querySelectorAll(".project-edit");
    editProjectBtnAll.forEach((Btn, index) => {
        editProjectsName(index)
        Btn.addEventListener("click", () => {
        console.log("edit button is working!");
        renderProjects();
    })})
    
}


function updateProjectIndexes() {
    const deleteProjectBtnAll = document.querySelectorAll(".project-delete");
    deleteProjectBtnAll.forEach((Btn, index) => {
        Btn.setAttribute("project-index", index);
    });
}

export function deleteProject() {
    const deleteProjectBtnAll = document.querySelectorAll(".project-delete");
    deleteProjectBtnAll.forEach(Btn => {
        Btn.addEventListener("click", () => {
            console.log("delete button is on action");
            const projectIndex = Btn.getAttribute("project-index");
            console.log("Index:", projectIndex); // Add this line to check the index
            deleteFromArr(projectIndex);
            Btn.parentElement.remove();
            projectContainerDiv.innerHTML = "";
            loopProjects(projectContainerDiv);
        });
    });
}
