import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from './page/Login.jsx';
import Registration from './page/registration.jsx';
  
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path="/" element={<App />}>
      <Route path="Login" element={<Login />} />
      <Route path="Registration" element={<Registration />} />
      {/* ... etc. */}
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>


);