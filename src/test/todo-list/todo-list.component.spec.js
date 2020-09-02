import TodoListComponent from "../../app/todo-list/todo-list.component.js";

const getBasicComponentHtmlForTest = () => {
	return `
		<main id="app">
			<section class="todo-list_container">
				<div class="input-group">
					<input id="input-add-todo" type="text">
					<div class="input-group-append">
						<button id="btn-add-todo">Add task</button>
					</div>
				</div>
				<ul class="todo-list"></ul>
			</section>
		</main>
	`;
};

const addTodoToLocalstorage = (idx = 0) => {
	const id = Date.now() + idx;
	const testObj = {"id": id, "title": `Jest ${idx}!`};
	localStorage.setItem(id, JSON.stringify(testObj));
	return id;
};

//https://devhints.io/jest
describe("Todo-List Component", () => {
	let component;

	beforeEach(() => {
		localStorage.clear();
		component = new TodoListComponent();
		document.body.innerHTML = getBasicComponentHtmlForTest();
	});

	it("Should have declared view file", () => {
		expect(component.getView()).toBe("todo-list/todo-list.component.html");
	});

	it("Should have loaded DOM events", () => {
		component.onInit();
		expect(component.BUTTON_ADD_TODO).not.toBeUndefined();
		expect(component.INPUT_ADD_TODO).not.toBeUndefined();
	});

	it("Should have fetched data from localstorage", () => {
		addTodoToLocalstorage(1);
		addTodoToLocalstorage(2);

		component.onInit();
		const itemsList = document.querySelector(".todo-list").getElementsByTagName("li");

		expect(itemsList.length).toBe(2);
	});

	it("Should have added new to-do when submited", () => {
		component.onInit();
		const input = component.INPUT_ADD_TODO;
		const button = component.BUTTON_ADD_TODO;

		input.value = "New Jest To-do!";
		button.click();

		const itemsList = document.querySelector(".todo-list").getElementsByTagName("li");

		expect(itemsList.length).toBe(1);
	});

	it("Should not have added new empty to-do when submited", () => {
		component.onInit();
		const input = component.INPUT_ADD_TODO;
		const button = component.BUTTON_ADD_TODO;

		input.value = " ";
		button.click();

		const itemsList = document.querySelector(".todo-list").getElementsByTagName("li");

		expect(itemsList.length).toBe(0);
	});

	it("Should have removed to-do when clicked on remove button", () => {
		const todoId = addTodoToLocalstorage();
		component.onInit();

		const todoRemoveButton = document.querySelector(`[data-id="${todoId}"]`);
		todoRemoveButton.click();

		const itemsList = document.querySelector(".todo-list").getElementsByTagName("li");

		expect(itemsList.length).toBe(0);
	});
});


