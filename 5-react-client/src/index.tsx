import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Auth0Provider } from '@auth0/auth0-react'
import history from './utils/history'

const domain = process.env.REACT_APP_AUTH_DOMAIN ?? ''
const clientId = process.env.REACT_APP_AUTH_CLIENT_ID ?? ''

const onRedirectCallback = (appState: any) => {
  history.push(appState && appState.returnTo ? appState.returnTo : window.location.pathname)
}

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
    audience='http://localhost:3001' // audience must match the audience set up in express js backend and configured on the Auth0 website
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
