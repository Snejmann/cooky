import { h, Component } from 'preact'
import Recipe from './Recipe'

export default class RecipeList extends Component {
	render({ recipes, favorites, onToggleFavorite, onIsFavorite }) {
		return (
			<ul class="reciepe-list">
				{recipes.map(({ _id, ...recipe }) => (
					<Recipe 
						onToggleFavorite={(e) => {
							e.preventDefault()
							onToggleFavorite(_id)}}
						isFavorite={onIsFavorite(_id)}
						{...recipe} />)
						
				)}
			</ul>
		)
	}
}
