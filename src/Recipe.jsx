import { h, Component } from 'preact'

export default class Recipe extends Component {
	render({ name, isFavorite, onToggleFavorite }) {
		console.log(isFavorite)
		return (<li class={'item' + (isFavorite ? ' item-favorite' : '')}>
			<h3>{name} <a onClick={onToggleFavorite} class="btn btn-fav">♥</a></h3>
                <ul class="ingredients">
                    <li><span>300g</span>Nudeln</li>
                    <li><span>1</span>Tomatensoße</li>
                </ul>
		</li>) 
	}
}
