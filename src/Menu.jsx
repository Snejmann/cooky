import { h, Component } from 'preact'

export default class Menu extends Component {

    render() {
        return (
            <nav>
            <ul class="navigation">
                <li class="recipes active">Rezepte</li>
                <li class="favorites">Favoriten</li>
                <li class="shopping-list">Einkaufsliste</li>
            </ul>
            </nav>
        )
    }
}
