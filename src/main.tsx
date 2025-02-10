import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {BrowserRouter} from 'react-router-dom'
import ChangeColor from "./context/changeColor.tsx";
import ChangeLanguage from "./context/changeLanguage.tsx";
import ChangeTheme from "./context/changeTheme.tsx";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter>
          <ChangeTheme>
              <ChangeColor>
                  <ChangeLanguage>
                          <App />
                  </ChangeLanguage>
              </ChangeColor>
          </ChangeTheme>
      </BrowserRouter>
  </React.StrictMode>,
)
