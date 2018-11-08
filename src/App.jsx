import { h, Component } from 'preact'
import RecipeList from './RecipeList'
import Menu from './Menu'

export default class App extends Component {
	state = {
		viewMode: 0,
		favorites: []
	}

	handleChangePage = (viewMode) => {
		this.setState({viewMode})
	}

	addFavorite = (id) => {
		let favorites = this.state.favorites
		favorites.push(id)
		this.setState({favorites})
	}

	removeFavorite = (id) => {
		let favorites = this.state.favorites
			.filter((_id) => id !== _id)
		this.setState({favorites})
	}

	toggleFavorite = (id) => {
		if (this.isFavorite(id)) {
			this.removeFavorite(id)
		} else {
			this.addFavorite (id)
		}
	}

	isFavorite = (id) => {
		return this.state.favorites
			.filter((_id) => _id === id)
			.length > 0
	}

	render({ markets, recipes, products }, { viewMode }) {
		return (
			<div class="app">
				<header>
					<h1><a href="https://www.martin-wree.de/cooky/">Cooky</a></h1>
					<h2 class="headline">Rezepte auswählen</h2>
					<p class="subline">Gesunde 20 Minuten Rezepte</p>
				</header>
				<main>
					<RecipeList
						onChange={this.onChange}
						onToggleFavorite={this.toggleFavorite}
						onIsFavorite={this.isFavorite}
						recipes={recipes} />
				</main>
				<Menu onChange={this.handleChangePage} />
			</div>
		)
	}
}
