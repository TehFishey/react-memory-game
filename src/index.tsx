import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './pages/App'
import store from './store'
import './config/IconLibrary'

if (process.env.NODE_ENV === 'development') {
  import('./mocks/browser').then((module) => {
    const { worker } = module
    worker.start({ onUnhandledRequest: 'bypass' })
  })
}

const Redux: React.FC = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

ReactDOM.render(<Redux />, document.getElementById('halloween2023Game'))
