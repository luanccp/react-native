import React from 'react'
import ReactDOM from 'react-dom'
import Component, { Primeiro, Segundo } from './componente'

ReactDOM.render(
    <div>
        <Primeiro></Primeiro>
        <Segundo/>
    </div>, document.getElementById('app')
)