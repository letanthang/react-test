import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'

ReactDOM.render(
    <Provider store={createStore()}>
        <App />
    </Provider>
    , document.querySelector('#root')
)
