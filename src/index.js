import { h, render } from 'preact'
import App from './App'

let loadingScreen = document.createElement('h1')
    loadingScreen.innerText = 'Lädt...'
let app = document.getElementById('app')
    app.appendChild(loadingScreen)

let load = (dataSourceName, callback) => {
    let request = new XMLHttpRequest()
    request.open('GET', `dataSource/${dataSourceName}.json`)
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            callback(JSON.parse(this.response))
        }
    }
    request.onerror = (event) => {
        console.log("ERROR", event)
    }
    request.send()
}

Promise.all([
    new Promise((resolve) => load('markets', resolve)), 
    new Promise((resolve) => load('products', resolve)), 
    new Promise((resolve) => load('recipes', resolve))
]).then((value) => {
    app.removeChild(loadingScreen)
    render(<App
        markets={value[0]}
        products={value[1]}
        recipes={value[2]} 
    />, app)
})


