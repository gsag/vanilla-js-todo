import './todo-list.component.html';
import './todo-list.component.scss';

export default class TodoListComponent
{
	constructor()
	{
		//DOES NOTHING
	}//func

	getView()
	{
		return "todo-list/todo-list.component.html";
	}//func

	onInit()
	{
		this.INPUT_ADD_TODO = document.querySelector("#input-add-todo");
		this.BUTTON_ADD_TODO = document.querySelector("#btn-add-todo");
		this._loadEvents();
	}//func

	_loadEvents()
	{
		this._addTodoEvent();
		this._fetchTodos();
	}//func

	_addTodoEvent()
	{
		this.BUTTON_ADD_TODO.addEventListener("click", () =>
		{
			let item = this.INPUT_ADD_TODO.value;
			if(item.trim()){
				const obj = {id: Date.now(), title: item.trim()};
				this._pushTodoListItem(obj);
				this.INPUT_ADD_TODO.value = null;
			}//if
		});
	}//func

	_fetchTodos()
	{
		Object
			.values(localStorage)
			.filter(v => v.startsWith("{"))
			.map(v => JSON.parse(v))
			.sort((parsedA, parsedB) => parsedA.id - parsedB.id)
			.forEach(parsed => this._createTodoElement(parsed));
	}//func

	_pushTodoListItem(todoItem)
	{
		this._createTodoElement(todoItem);
		localStorage.setItem(todoItem.id, JSON.stringify(todoItem));
	}//func

	_createTodoElement(todoItem)
	{
		const spanTodo = document.createElement("span");
		spanTodo.append(document.createTextNode(todoItem.title));

		const btnTodo = document.createElement("button");
		btnTodo.setAttribute("data-id", todoItem.id);
		btnTodo.setAttribute("title", "Remove task");
		btnTodo.setAttribute("aria-label", "Remove task");
		btnTodo.append(document.createTextNode("X"));
		btnTodo.addEventListener("click", (event) => this._removeTodoElement(event.target));

		const listItem = document.createElement("li");
		listItem.appendChild(spanTodo);
		listItem.appendChild(btnTodo);

		const todoList = document.querySelector(".todo-list");
		todoList.appendChild(listItem);
		return todoList;
	}//func

	_removeTodoElement(element)
	{
		element.parentNode.remove();
		localStorage.removeItem(element.getAttribute("data-id"));
	}//func

}//class
