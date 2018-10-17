import { h, Component } from 'preact'
import RecipeList from './RecipeList'
import Toolbar from './Toolbar'

export default class App extends Component {
	state = {
		viewMode: 0,
		recipes: [
			{
				name: 'Kürbissuppe'
			}
		]
	}

	onChangeRecipes = (recipes) => {
		this.setState({recipes})
	}
	
	onAddNewRecipe = (recipe) => {
		let recipes = this.state.recipes
		recipes.push(recipe)
	
		this.setState({recipes})
	}

	render(props, { recipes, viewMode }) {
		return (
			<div>
				<RecipeList 
					onChangeRecipes={this.onChangeRecipes} 
					recipes={recipes} />
				<Toolbar onAddNewRecipe={this.onAddNewRecipe} />
			</div>
		)
	}
}
