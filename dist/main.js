/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProjectModal: () => (/* binding */ addProjectModal),
/* harmony export */   addProjectToDisplay: () => (/* binding */ addProjectToDisplay),
/* harmony export */   closeAllModal: () => (/* binding */ closeAllModal),
/* harmony export */   "default": () => (/* binding */ sidebarButtonSelection),
/* harmony export */   deleteProject: () => (/* binding */ deleteProject)
/* harmony export */ });
/* harmony import */ var _projectsContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectsContainer */ "./src/projectsContainer.js");





const addProjectsBtn = document.querySelector(".addProjects");
const ProjectsModal = document.querySelector(".addProjectsBox")
function addProjectModal()
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



function closeAllModal() {
        cancelProjectsModalBtn.addEventListener("click", closeProjectModal);
        crossProjectModalBtn.addEventListener("click", closeProjectModal);

    }

function closeProjectModal(){
    projectModalInput.value = "";
    ProjectsModal.close();
}

function addProjectToDisplay(){
    addProjectsBtnModal.addEventListener("click", () => {
        let projectTitle = projectModalInput.value;
        if(projectModalInput.checkValidity()){
            (0,_projectsContainer__WEBPACK_IMPORTED_MODULE_0__.addProjectsToArr)(projectTitle);
            closeProjectModal();
            if(ProjectDropDownBtn.classList.contains("projects-dropdown-active")){
                // projectContainerDiv.innerHTML = "";
                // loopProjects(projectContainerDiv);
                // editProject();
                // deleteProject();
                (0,_projectsContainer__WEBPACK_IMPORTED_MODULE_0__.renderProjects)()
            } else projectContainerDiv.innerHTML = "";
            
        }
        else projectModalInput.reportValidity()
        ;(0,_projectsContainer__WEBPACK_IMPORTED_MODULE_0__.displayLog)();
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
            (0,_projectsContainer__WEBPACK_IMPORTED_MODULE_0__.renderProjects)();
            
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
function sidebarButtonSelection()
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
        (0,_projectsContainer__WEBPACK_IMPORTED_MODULE_0__.editProjectsName)(index)
        Btn.addEventListener("click", () => {
        console.log("edit button is working!")
    })})
    
}


function updateProjectIndexes() {
    const deleteProjectBtnAll = document.querySelectorAll(".project-delete");
    deleteProjectBtnAll.forEach((Btn, index) => {
        Btn.setAttribute("project-index", index);
    });
}

function deleteProject() {
    const deleteProjectBtnAll = document.querySelectorAll(".project-delete");
    deleteProjectBtnAll.forEach(Btn => {
        Btn.addEventListener("click", () => {
            console.log("delete button is on action");
            const projectIndex = Btn.getAttribute("project-index");
            console.log("Index:", projectIndex); // Add this line to check the index
            (0,_projectsContainer__WEBPACK_IMPORTED_MODULE_0__.deleteFromArr)(projectIndex);
            Btn.parentElement.remove();
            projectContainerDiv.innerHTML = "";
            (0,_projectsContainer__WEBPACK_IMPORTED_MODULE_0__.loopProjects)(projectContainerDiv);
        });
    });
}


/***/ }),

/***/ "./src/createTodoItem.js":
/*!*******************************!*\
  !*** ./src/createTodoItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTodoItem)
/* harmony export */ });
// export default function createTodoItem(title, description, dueDate, priority){
//     title = title;
//     description = description;
//     dueDate = dueDate;
//     priority = priority;
//     const getTitle = () => title;
//     const getDescription = () => description;
//     const getDueDate = () => dueDate;
//     const getPriority = () => priority;
//     const setTitle = (newTitle) => {
//         title = newTitle;
//     }
//     return{getTitle, getDescription, getDueDate, getPriority, setTitle}
// }

class createTodoItem{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}


/***/ }),

/***/ "./src/projectsContainer.js":
/*!**********************************!*\
  !*** ./src/projectsContainer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddProjects: () => (/* binding */ AddProjects),
/* harmony export */   addProjectsToArr: () => (/* binding */ addProjectsToArr),
/* harmony export */   deleteFromArr: () => (/* binding */ deleteFromArr),
/* harmony export */   displayLog: () => (/* binding */ displayLog),
/* harmony export */   editProjectsName: () => (/* binding */ editProjectsName),
/* harmony export */   loopProjects: () => (/* binding */ loopProjects),
/* harmony export */   renderProjects: () => (/* binding */ renderProjects)
/* harmony export */ });
const projectContainer = [
    {
        projectTitle: "default",
        todoLists: []
    },
];

function AddProjects(name){
   return { 
    projectTitle: name,
    todoLists: [],
    }
}


function addProjectsToArr(title){
    projectContainer.push(AddProjects(title));
}

function displayLog(){
    console.table(projectContainer)
}

// write a function that loop through all elements in the project container

function loopProjects(selectedDiv){
    projectContainer.forEach((project, index) => {
        selectedDiv.innerHTML += `<div class= "catagories">
            <p>${project.projectTitle}</p>
            <svg class="project-edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z" /></svg>
            <svg project-index = ${index} class="project-delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
            </div>`
            const deleteProjectBtnAll = document.querySelectorAll(".project-delete");
    deleteProjectBtnAll.forEach(Btn => {
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
    })
}

function renderProjects(){
    const selectedDiv = document.querySelector(".project-container-div");
    selectedDiv.innerHTML = "";
    projectContainer.forEach((project, index) => {
            const newProjectDiv = document.createElement("div");
            const newProjectDivTxt = document.createElement("p");
            const deleteProjectBtn = document.createElement("button");
            deleteProjectBtn.innerText = "delete";
            newProjectDivTxt.textContent = project.projectTitle;
            newProjectDiv.appendChild(newProjectDivTxt);
            newProjectDiv.appendChild(deleteProjectBtn);
            selectedDiv.appendChild(newProjectDiv)
            deleteProjectBtn.addEventListener("click", (e) => {
                console.log(e.target);
                console.log(deleteProjectBtn.parentElement)
                deleteProjectBtn.parentElement.remove();
                console.table(projectContainer)
                renderProjects();
            })
            
        })
        
}

function deleteProject() {
    const deleteProjectBtnAll = document.querySelectorAll(".project-delete");
    deleteProjectBtnAll.forEach(Btn => {
        Btn.addEventListener("click", () => {
            console.log("delete button is on action");
            const projectIndex = Btn.getAttribute("project-index");
            console.log("Index:", projectIndex); // Add this line to check the index
            deleteFromArr(projectIndex);
            Btn.parentElement.remove();
        });
    });
}

function editProjectsName(index){
    return
}

function deleteFromArr(index){
    projectContainer.splice(index, 1);
    console.table(projectContainer);
    // renderProjects();
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createTodoItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodoItem.js */ "./src/createTodoItem.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _projectsContainer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsContainer.js */ "./src/projectsContainer.js");








// const task1 = new createTodoItem("reading books", "", "2024-03-25", "high");
// const task2 = new createTodoItem("playing football", "hurray!", "2024-03-09", "medium")
// projectContainer.forEach(project => {
//     if(project.projectTitle == "default"){
//         project.todoLists.push(task1)
//     }
// return project.todoLists})
// console.table(projectContainer[0].todoLists);



(0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.addProjectModal)();
(0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.closeAllModal)();
(0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.addProjectToDisplay)();
(0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
// editProject();
// deleteProject();


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXVEO0FBQ3NEOzs7O0FBSTdHO0FBQ0E7QUFDTztBQUNQLEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJTztBQUNQO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxZQUFZLG9FQUFnQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0VBQWM7QUFDOUIsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0RBQVU7QUFDbEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLEVBQUU7QUFDckIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0VBQWM7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixFQUFFO0FBQ2xCLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ2U7QUFDZixNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0VBQWdCO0FBQ3hCO0FBQ0E7QUFDQSxLQUFLLEVBQUU7QUFDUDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsWUFBWSxpRUFBYTtBQUN6QjtBQUNBO0FBQ0EsWUFBWSxnRUFBWTtBQUN4QixTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7QUN2SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDMUdBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05pRDtBQUMyRTtBQUN4RTs7Ozs7O0FBTXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qjs7OztBQUlBLHdEQUFlO0FBQ2Ysc0RBQWE7QUFDYiw0REFBbUI7QUFDbkIsbURBQXNCO0FBQ3RCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfdG9kb19hcHAvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL3RvcF90b2RvX2FwcC8uL3NyYy9jcmVhdGVUb2RvSXRlbS5qcyIsIndlYnBhY2s6Ly90b3BfdG9kb19hcHAvLi9zcmMvcHJvamVjdHNDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF90b2RvX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX3RvZG9fYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFkZFByb2plY3RzVG9BcnIgfSBmcm9tIFwiLi9wcm9qZWN0c0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgZGlzcGxheUxvZyxsb29wUHJvamVjdHMsZWRpdFByb2plY3RzTmFtZSxkZWxldGVGcm9tQXJyLCByZW5kZXJQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzQ29udGFpbmVyXCI7XG5cblxuXG5jb25zdCBhZGRQcm9qZWN0c0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdHNcIik7XG5jb25zdCBQcm9qZWN0c01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0c0JveFwiKVxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RNb2RhbCgpXG4gICAge2FkZFByb2plY3RzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHtcbiAgICAgICAgUHJvamVjdHNNb2RhbC5zaG93TW9kYWwoKVxufSl9XG5cbmNvbnN0IGNhbmNlbFByb2plY3RzTW9kYWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFByb2plY3RNb2RhbFwiKTtcbmNvbnN0IGNyb3NzUHJvamVjdE1vZGFsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjcm9zcy1idXR0b25cIik7XG5jb25zdCBwcm9qZWN0TW9kYWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W2lkPVwicHJvamVjdE5hbWVcIl1gKTtcbmNvbnN0IGFkZFByb2plY3RzQnRuTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RNb2RhbFwiKTtcbmNvbnN0IFByb2plY3REcm9wRG93bkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcC1kb3duXCIpO1xuY29uc3QgcHJvamVjdENvbnRhaW5lckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1jb250YWluZXItZGl2XCIpO1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2lkZWJhclwiKTtcblxuXG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZUFsbE1vZGFsKCkge1xuICAgICAgICBjYW5jZWxQcm9qZWN0c01vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVByb2plY3RNb2RhbCk7XG4gICAgICAgIGNyb3NzUHJvamVjdE1vZGFsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZVByb2plY3RNb2RhbCk7XG5cbiAgICB9XG5cbmZ1bmN0aW9uIGNsb3NlUHJvamVjdE1vZGFsKCl7XG4gICAgcHJvamVjdE1vZGFsSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIFByb2plY3RzTW9kYWwuY2xvc2UoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RUb0Rpc3BsYXkoKXtcbiAgICBhZGRQcm9qZWN0c0J0bk1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0TW9kYWxJbnB1dC52YWx1ZTtcbiAgICAgICAgaWYocHJvamVjdE1vZGFsSW5wdXQuY2hlY2tWYWxpZGl0eSgpKXtcbiAgICAgICAgICAgIGFkZFByb2plY3RzVG9BcnIocHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgIGNsb3NlUHJvamVjdE1vZGFsKCk7XG4gICAgICAgICAgICBpZihQcm9qZWN0RHJvcERvd25CdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdHMtZHJvcGRvd24tYWN0aXZlXCIpKXtcbiAgICAgICAgICAgICAgICAvLyBwcm9qZWN0Q29udGFpbmVyRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgLy8gbG9vcFByb2plY3RzKHByb2plY3RDb250YWluZXJEaXYpO1xuICAgICAgICAgICAgICAgIC8vIGVkaXRQcm9qZWN0KCk7XG4gICAgICAgICAgICAgICAgLy8gZGVsZXRlUHJvamVjdCgpO1xuICAgICAgICAgICAgICAgIHJlbmRlclByb2plY3RzKClcbiAgICAgICAgICAgIH0gZWxzZSBwcm9qZWN0Q29udGFpbmVyRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHByb2plY3RNb2RhbElucHV0LnJlcG9ydFZhbGlkaXR5KClcbiAgICAgICAgZGlzcGxheUxvZygpO1xuICAgIH0pXG4vLyAgICAgUHJvamVjdERyb3BEb3duQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiB7XG4vLyAgICAgICAgIFByb2plY3REcm9wRG93bkJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwicHJvamVjdHMtZHJvcGRvd24tYWN0aXZlXCIpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhQcm9qZWN0RHJvcERvd25CdG4pO1xuLy8gICAgICAgICBpZihQcm9qZWN0RHJvcERvd25CdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwicHJvamVjdHMtZHJvcGRvd24tYWN0aXZlXCIpKXtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG4vLyAgICAgICAgICAgICBsb29wUHJvamVjdHMocHJvamVjdENvbnRhaW5lckRpdik7XG4vLyAgICAgICAgICAgICBlZGl0UHJvamVjdCgpO1xuLy8gICAgICAgICAgICAgZGVsZXRlUHJvamVjdCgpO1xuICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAvLyBjb25zdCBlZGl0UHJvamVjdEJ0bkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1lZGl0XCIpO1xuLy8gICAgICAgICAgICAgLy8gZWRpdFByb2plY3RCdG5BbGwuZm9yRWFjaChCdG4gPT4ge1xuLy8gICAgICAgICAgICAgLy8gICAgIEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZWRpdCBidXR0b24gaXMgd29ya2luZyFcIilcbi8vICAgICAgICAgICAgIC8vIH0pfSlcbi8vICAgICAgICAgfSBlbHNlIHByb2plY3RDb250YWluZXJEaXYuaW5uZXJIVE1MID0gXCJcIjtcbi8vICAgICB9XG4vLyAgICAgKVxuICAgXG4vLyB9XG5cblxuICAgIFByb2plY3REcm9wRG93bkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4ge1xuICAgICAgICBQcm9qZWN0RHJvcERvd25CdG4uY2xhc3NMaXN0LnRvZ2dsZShcInByb2plY3RzLWRyb3Bkb3duLWFjdGl2ZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coUHJvamVjdERyb3BEb3duQnRuKTtcbiAgICAgICAgaWYoUHJvamVjdERyb3BEb3duQnRuLmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3RzLWRyb3Bkb3duLWFjdGl2ZVwiKSl7XG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBjb25zdCBlZGl0UHJvamVjdEJ0bkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1lZGl0XCIpO1xuICAgICAgICAgICAgLy8gZWRpdFByb2plY3RCdG5BbGwuZm9yRWFjaChCdG4gPT4ge1xuICAgICAgICAgICAgLy8gICAgIEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiZWRpdCBidXR0b24gaXMgd29ya2luZyFcIilcbiAgICAgICAgICAgIC8vIH0pfSlcbiAgICAgICAgfSBlbHNlIHByb2plY3RDb250YWluZXJEaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB9XG4gICAgKVxuICAgXG59XG5cbmNvbnN0IHNpZGViYXJDYXRhZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXRhZ29yaWVzXCIpO1xubGV0IHNlbGVjdGVkQnRuID0gbnVsbDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpZGViYXJCdXR0b25TZWxlY3Rpb24oKVxuICAgIHsgc2lkZWJhckNhdGFnb3JpZXMuZm9yRWFjaChidXR0b24gPT5cbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJ1dHRvbik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihzZWxlY3RlZEJ0bil7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEJ0biA9IGJ1dHRvbjtcbiAgICB9KSl9XG5cblxuZnVuY3Rpb24gZWRpdFByb2plY3QoKXtcbiAgICBjb25zdCBlZGl0UHJvamVjdEJ0bkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1lZGl0XCIpO1xuICAgIGVkaXRQcm9qZWN0QnRuQWxsLmZvckVhY2goKEJ0biwgaW5kZXgpID0+IHtcbiAgICAgICAgZWRpdFByb2plY3RzTmFtZShpbmRleClcbiAgICAgICAgQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZWRpdCBidXR0b24gaXMgd29ya2luZyFcIilcbiAgICB9KX0pXG4gICAgXG59XG5cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdEluZGV4ZXMoKSB7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0bkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1kZWxldGVcIik7XG4gICAgZGVsZXRlUHJvamVjdEJ0bkFsbC5mb3JFYWNoKChCdG4sIGluZGV4KSA9PiB7XG4gICAgICAgIEJ0bi5zZXRBdHRyaWJ1dGUoXCJwcm9qZWN0LWluZGV4XCIsIGluZGV4KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoKSB7XG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0bkFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC1kZWxldGVcIik7XG4gICAgZGVsZXRlUHJvamVjdEJ0bkFsbC5mb3JFYWNoKEJ0biA9PiB7XG4gICAgICAgIEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkZWxldGUgYnV0dG9uIGlzIG9uIGFjdGlvblwiKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbmRleCA9IEJ0bi5nZXRBdHRyaWJ1dGUoXCJwcm9qZWN0LWluZGV4XCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbmRleDpcIiwgcHJvamVjdEluZGV4KTsgLy8gQWRkIHRoaXMgbGluZSB0byBjaGVjayB0aGUgaW5kZXhcbiAgICAgICAgICAgIGRlbGV0ZUZyb21BcnIocHJvamVjdEluZGV4KTtcbiAgICAgICAgICAgIEJ0bi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lckRpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgbG9vcFByb2plY3RzKHByb2plY3RDb250YWluZXJEaXYpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsIi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpe1xuLy8gICAgIHRpdGxlID0gdGl0bGU7XG4vLyAgICAgZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbi8vICAgICBkdWVEYXRlID0gZHVlRGF0ZTtcbi8vICAgICBwcmlvcml0eSA9IHByaW9yaXR5O1xuLy8gICAgIGNvbnN0IGdldFRpdGxlID0gKCkgPT4gdGl0bGU7XG4vLyAgICAgY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoKSA9PiBkZXNjcmlwdGlvbjtcbi8vICAgICBjb25zdCBnZXREdWVEYXRlID0gKCkgPT4gZHVlRGF0ZTtcbi8vICAgICBjb25zdCBnZXRQcmlvcml0eSA9ICgpID0+IHByaW9yaXR5O1xuLy8gICAgIGNvbnN0IHNldFRpdGxlID0gKG5ld1RpdGxlKSA9PiB7XG4vLyAgICAgICAgIHRpdGxlID0gbmV3VGl0bGU7XG4vLyAgICAgfVxuLy8gICAgIHJldHVybntnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIGdldER1ZURhdGUsIGdldFByaW9yaXR5LCBzZXRUaXRsZX1cbi8vIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgY3JlYXRlVG9kb0l0ZW17XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSl7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxufVxuIiwiY29uc3QgcHJvamVjdENvbnRhaW5lciA9IFtcbiAgICB7XG4gICAgICAgIHByb2plY3RUaXRsZTogXCJkZWZhdWx0XCIsXG4gICAgICAgIHRvZG9MaXN0czogW11cbiAgICB9LFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIEFkZFByb2plY3RzKG5hbWUpe1xuICAgcmV0dXJuIHsgXG4gICAgcHJvamVjdFRpdGxlOiBuYW1lLFxuICAgIHRvZG9MaXN0czogW10sXG4gICAgfVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0c1RvQXJyKHRpdGxlKXtcbiAgICBwcm9qZWN0Q29udGFpbmVyLnB1c2goQWRkUHJvamVjdHModGl0bGUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlMb2coKXtcbiAgICBjb25zb2xlLnRhYmxlKHByb2plY3RDb250YWluZXIpXG59XG5cbi8vIHdyaXRlIGEgZnVuY3Rpb24gdGhhdCBsb29wIHRocm91Z2ggYWxsIGVsZW1lbnRzIGluIHRoZSBwcm9qZWN0IGNvbnRhaW5lclxuXG5leHBvcnQgZnVuY3Rpb24gbG9vcFByb2plY3RzKHNlbGVjdGVkRGl2KXtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgIHNlbGVjdGVkRGl2LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz0gXCJjYXRhZ29yaWVzXCI+XG4gICAgICAgICAgICA8cD4ke3Byb2plY3QucHJvamVjdFRpdGxlfTwvcD5cbiAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJwcm9qZWN0LWVkaXRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMjAuNzEsNy4wNEMyMS4xLDYuNjUgMjEuMSw2IDIwLjcxLDUuNjNMMTguMzcsMy4yOUMxOCwyLjkgMTcuMzUsMi45IDE2Ljk2LDMuMjlMMTUuMTIsNS4xMkwxOC44Nyw4Ljg3TTMsMTcuMjVWMjFINi43NUwxNy44MSw5LjkzTDE0LjA2LDYuMThMMywxNy4yNVpcIiAvPjwvc3ZnPlxuICAgICAgICAgICAgPHN2ZyBwcm9qZWN0LWluZGV4ID0gJHtpbmRleH0gY2xhc3M9XCJwcm9qZWN0LWRlbGV0ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmRlbGV0ZTwvdGl0bGU+PHBhdGggZD1cIk0xOSw0SDE1LjVMMTQuNSwzSDkuNUw4LjUsNEg1VjZIMTlNNiwxOUEyLDIgMCAwLDAgOCwyMUgxNkEyLDIgMCAwLDAgMTgsMTlWN0g2VjE5WlwiIC8+PC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5gXG4gICAgICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWRlbGV0ZVwiKTtcbiAgICBkZWxldGVQcm9qZWN0QnRuQWxsLmZvckVhY2goQnRuID0+IHtcbiAgICAgICAgQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSBidXR0b24gaXMgb24gYWN0aW9uXCIpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gQnRuLmdldEF0dHJpYnV0ZShcInByb2plY3QtaW5kZXhcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluZGV4OlwiLCBwcm9qZWN0SW5kZXgpOyAvLyBBZGQgdGhpcyBsaW5lIHRvIGNoZWNrIHRoZSBpbmRleFxuICAgICAgICAgICAgZGVsZXRlRnJvbUFycihwcm9qZWN0SW5kZXgpO1xuICAgICAgICAgICAgQnRuLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgICAgICAvLyBjb25zdCBuZXdQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgLy8gY29uc3QgbmV3UHJvamVjdERpdlR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAvLyBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gICAgICAgIC8vIGVkaXRCdG4uc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIxMDBcIik7XG4gICAgICAgIC8vIGVkaXRCdG4uc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTAwXCIpO1xuICAgICAgICAvLyBlZGl0QnRuLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XG4gICAgICAgIC8vIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZWRpdFwiKTtcbiAgICAgICAgLy8gY29uc3QgZWRpdHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInBhdGhcIik7XG4gICAgICAgIC8vIGVkaXRwYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgXCJNMjAuNzEsNy4wNEMyMS4xLDYuNjUgMjEuMSw2IDIwLjcxLDUuNjNMMTguMzcsMy4yOUMxOCwyLjkgMTcuMzUsMi45IDE2Ljk2LDMuMjlMMTUuMTIsNS4xMkwxOC44Nyw4Ljg3TTMsMTcuMjVWMjFINi43NUwxNy44MSw5LjkzTDE0LjA2LDYuMThMMywxNy4yNVpcIik7XG4gICAgICAgIC8vIGVkaXRCdG4uY2xhc3NMaXN0LmFkZChcInByb2plY3QtZWRpdFwiKTtcbiAgICAgICAgLy8gbmV3UHJvamVjdERpdlR4dC50ZXh0Q29udGVudCA9IHByb2plY3QucHJvamVjdFRpdGxlO1xuICAgICAgICAvLyBuZXdQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJjYXRhZ29yaWVzXCIpO1xuICAgICAgICAvLyBlZGl0QnRuLmFwcGVuZENoaWxkKGVkaXRwYXRoKTtcbiAgICAgICAgLy8gbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0RGl2VHh0KTtcbiAgICAgICAgLy8gbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAgICAgLy8gc2VsZWN0ZWREaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdERpdik7XG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCl7XG4gICAgY29uc3Qgc2VsZWN0ZWREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtY29udGFpbmVyLWRpdlwiKTtcbiAgICBzZWxlY3RlZERpdi5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHByb2plY3RDb250YWluZXIuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdERpdlR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0QnRuLmlubmVyVGV4dCA9IFwiZGVsZXRlXCI7XG4gICAgICAgICAgICBuZXdQcm9qZWN0RGl2VHh0LnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0VGl0bGU7XG4gICAgICAgICAgICBuZXdQcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3REaXZUeHQpO1xuICAgICAgICAgICAgbmV3UHJvamVjdERpdi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcbiAgICAgICAgICAgIHNlbGVjdGVkRGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3REaXYpXG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkZWxldGVQcm9qZWN0QnRuLnBhcmVudEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ0bi5wYXJlbnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUudGFibGUocHJvamVjdENvbnRhaW5lcilcbiAgICAgICAgICAgICAgICByZW5kZXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgICAgICBcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LWRlbGV0ZVwiKTtcbiAgICBkZWxldGVQcm9qZWN0QnRuQWxsLmZvckVhY2goQnRuID0+IHtcbiAgICAgICAgQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZSBidXR0b24gaXMgb24gYWN0aW9uXCIpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gQnRuLmdldEF0dHJpYnV0ZShcInByb2plY3QtaW5kZXhcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluZGV4OlwiLCBwcm9qZWN0SW5kZXgpOyAvLyBBZGQgdGhpcyBsaW5lIHRvIGNoZWNrIHRoZSBpbmRleFxuICAgICAgICAgICAgZGVsZXRlRnJvbUFycihwcm9qZWN0SW5kZXgpO1xuICAgICAgICAgICAgQnRuLnBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFByb2plY3RzTmFtZShpbmRleCl7XG4gICAgcmV0dXJuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVGcm9tQXJyKGluZGV4KXtcbiAgICBwcm9qZWN0Q29udGFpbmVyLnNwbGljZShpbmRleCwgMSk7XG4gICAgY29uc29sZS50YWJsZShwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAvLyByZW5kZXJQcm9qZWN0cygpO1xufVxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVUb2RvSXRlbSBmcm9tIFwiLi9jcmVhdGVUb2RvSXRlbS5qc1wiO1xuaW1wb3J0IHNpZGViYXJCdXR0b25TZWxlY3Rpb24se2FkZFByb2plY3RNb2RhbCxjbG9zZUFsbE1vZGFsLGFkZFByb2plY3RUb0Rpc3BsYXksZWRpdFByb2plY3QsZGVsZXRlUHJvamVjdH0gZnJvbSBcIi4vRE9NLmpzXCI7XG5pbXBvcnQgeyBkaXNwbGF5TG9nIH0gZnJvbSBcIi4vcHJvamVjdHNDb250YWluZXIuanNcIjtcblxuXG5cblxuXG4vLyBjb25zdCB0YXNrMSA9IG5ldyBjcmVhdGVUb2RvSXRlbShcInJlYWRpbmcgYm9va3NcIiwgXCJcIiwgXCIyMDI0LTAzLTI1XCIsIFwiaGlnaFwiKTtcbi8vIGNvbnN0IHRhc2syID0gbmV3IGNyZWF0ZVRvZG9JdGVtKFwicGxheWluZyBmb290YmFsbFwiLCBcImh1cnJheSFcIiwgXCIyMDI0LTAzLTA5XCIsIFwibWVkaXVtXCIpXG4vLyBwcm9qZWN0Q29udGFpbmVyLmZvckVhY2gocHJvamVjdCA9PiB7XG4vLyAgICAgaWYocHJvamVjdC5wcm9qZWN0VGl0bGUgPT0gXCJkZWZhdWx0XCIpe1xuLy8gICAgICAgICBwcm9qZWN0LnRvZG9MaXN0cy5wdXNoKHRhc2sxKVxuLy8gICAgIH1cbi8vIHJldHVybiBwcm9qZWN0LnRvZG9MaXN0c30pXG4vLyBjb25zb2xlLnRhYmxlKHByb2plY3RDb250YWluZXJbMF0udG9kb0xpc3RzKTtcblxuXG5cbmFkZFByb2plY3RNb2RhbCgpO1xuY2xvc2VBbGxNb2RhbCgpO1xuYWRkUHJvamVjdFRvRGlzcGxheSgpO1xuc2lkZWJhckJ1dHRvblNlbGVjdGlvbigpO1xuLy8gZWRpdFByb2plY3QoKTtcbi8vIGRlbGV0ZVByb2plY3QoKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9