import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'

import '@userstory/styles/general.scss'

import { App } from '@userstory/index'

ReactDOM.render(<App />, document.getElementById('app'))