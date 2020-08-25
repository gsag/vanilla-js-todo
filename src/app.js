import TodoListComponent from './app/todo-list/todo-list.component';

export default class App
{
	constructor()
	{
		this._DEFAULT_PATH = "./app";
		this.init();
	}//func

	async init()
	{
		const currentComponent = new TodoListComponent();
		await this._run(currentComponent);
	}//func

	async _run(currentComponent)
	{
		return new Promise((resolve) => resolve(this._loadHtml(currentComponent.getView())))
				.then(componentHtml => document.getElementById("app").innerHTML = componentHtml)
				.then(() => currentComponent.onInit());
	}//func
	
	async _loadHtml(htmlFilePath)
	{
		const basePath = this._DEFAULT_PATH;
		const htmlFile = await fetch(`${basePath}/${htmlFilePath}`);
		const htmlContent = await htmlFile.text();
		return htmlContent;
	}//func

}//class