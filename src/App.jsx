import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />, 
    children: [
      { index: true, element: <Home /> },    
      { path: 'projects', element: <Projects /> },   
      { path: 'experience', element: <Experience /> }, 
      { path: 'contact', element: <Contact /> },     
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}