import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import './App.scss';
import ResumePage from './components/ResumePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/resume",
        element: <ResumePage />
      }
    ]
  },
]);

// 4️⃣ RouterProvider added
const App = () => {
  return(
    <RouterProvider router={router} />
  );
}

export default App;
