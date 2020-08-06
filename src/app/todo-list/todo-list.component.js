import './todo-list.component.html';
import './todo-list.component.scss';

export class TodoListComponent
{
	constructor()
	{
		this.API_URL = "https://jsonplaceholder.typicode.com/todos";
		this.fetchTodos();
	}//func

	getView()
	{
		return "todo-list/todo-list.component.html";
	}//func

	fetchTodos()
	{
		fetch(this.API_URL, {method: 'get'})
			.then(response => response.json())
			.then(data => {
				data.forEach(element => {
					this.pushTodoListItem(element);
				});
			})
			.catch(error => {
				console.error(error);
			});
	}//func

	pushTodoListItem(todoItem)
	{
		const list = document.querySelector(".todo-list");
		const listItem = document.createElement("li");
		listItem.appendChild(document.createTextNode(todoItem.title));
		list.appendChild(listItem);
	}//func

}//class
