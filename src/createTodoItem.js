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

export default class createTodoItem{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}
