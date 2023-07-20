import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import ServicesPage from "./pages/services/ServicesPage";
import Appointment from "./pages/request-appointment/Appointment";

function App() {
  
  const Layout =()=>{
    return (
      <>
<Header />
<Outlet />
<Footer />
</>

    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/services",
          element:<ServicesPage />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/request-appointment",
          element: <Appointment />,
        }
      ]
    },
  ]);

  return (
<RouterProvider router={router} />
  )
}

export default App
