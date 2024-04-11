import createTodoItem from "./createTodoItem.js";
import sidebarButtonSelection,{addProjectModal,closeAllModal,addProjectToDisplay,editProject,deleteProject} from "./DOM.js";
import { displayLog } from "./projectsContainer.js";





// const task1 = new createTodoItem("reading books", "", "2024-03-25", "high");
// const task2 = new createTodoItem("playing football", "hurray!", "2024-03-09", "medium")
// projectContainer.forEach(project => {
//     if(project.projectTitle == "default"){
//         project.todoLists.push(task1)
//     }
// return project.todoLists})
// console.table(projectContainer[0].todoLists);



addProjectModal();
closeAllModal();
addProjectToDisplay();
sidebarButtonSelection();
// editProject();
// deleteProject();

