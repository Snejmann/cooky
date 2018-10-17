import { h, Component } from 'preact'
import Recipe from './Recipe'

export default class RecipeList extends Component {
	render({ recipes, onChangeRecipes }) {
		return (
			<ul>
				{recipes.map((recipe, index) => {
						return (<Recipe 
							changeName={(recipe) => {
								recipe[index] = recipe
								onChangeRecipes(recipes)
							}} 
							{...recipe} /> )
				})}
			</ul>
		)
	}
}
