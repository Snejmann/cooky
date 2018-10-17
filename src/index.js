import { h, render } from 'preact'
import App from './App'

let startApp = (element) => {
    render(<App />, element)
}

startApp(document.getElementById('app'))
