import { routerMap } from './router/index'
import './index.css';
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter
} from 'react-router-dom';
import { Suspense } from 'react'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading ...</div>} />
      <Routes>
        {
          routerMap.map((routerItem, index) =>
            <Route
              key={index}
              path={routerItem.path}
              Component={routerItem.component}
            />
          )
        }
        <Route
          path="*"
          element={<Navigate to="" />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
