import "regenerator-runtime/runtime"; /* https://stackoverflow.com/a/61517521 babel 7 webpack polyfill es8 async/await */
import './styles.scss';
import {TodoListComponent} from './app/todo-list/todo-list.component';

document.addEventListener("DOMContentLoaded", () => new Index());

class Index
{
	constructor()
	{
		this._DEFAULT_PATH = "./app";
		this.currentComponent = null;
		this.init();
	}//func

	async init()
	{
		this.currentComponent = new TodoListComponent();
		document.getElementById("app").innerHTML = await this.loadHtml(this.currentComponent.getView());
	}//func

	async loadHtml(htmlFilePath)
	{
		const basePath = this._DEFAULT_PATH;
		const htmlFile = await fetch(`${basePath}/${htmlFilePath}`);
		const htmlContent = await htmlFile.text();
		return htmlContent;
	}//func

}//class