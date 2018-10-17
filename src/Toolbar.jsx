import { h, Component } from 'preact'

export default class Toolbar extends Component {
	state = {
		newRecipe: {
			name: ''
		}
	}

	setName = (name) => {
		let newRecipe = this.state.newRecipe
		newRecipe.name = name
	
		this.setState({newRecipe})
	}
	
	onAddRecipe = () => {
		let newRecipe = this.state.newRecipe
		this.props.onAddNewRecipe(newRecipe)
	}

	render({ onAddNewRecipe }, {newRecipe}) {
		return (<div>
			<input onInput={e => this.setName(e.target.value)} />
			<button onClick={this.onAddRecipe}>
				Add Recipe
			</button>
		</div>)
	}
}