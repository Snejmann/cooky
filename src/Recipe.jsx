import { h, Component } from 'preact'

export default class Recipe extends Component {
	render({ name, changeName }) {
		return (<li>{name}</li>) 
	}
}
