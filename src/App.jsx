import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Clientele from "./components/collection_clientele/Clientele"
import Lahenga_sherwani from "./components/Couple_collection_Lahenga_sherwani/Lahenga_sherwani"
import Punjabi from "./components/Couple_collection_Punjabi/Punjabi"
import Home from "./components/Home"
import Juti from "./components/juti-collection/Juti"
import MensCollection from "./components/Men_collection_Dhuti/MensCollection"
import Kurta from "./components/Men_collection_kurta/Kurta"
import Sherwani from "./components/Men_collection_sherwani/Sherwani"
import Blouse from "./components/Women_collection_Blouse/Blouse"
import Lahenga from "./components/Women_collection_Lahenga/Lahenga"
import Saree from "./components/Women_collection_Saree/Saree"
import MainLayout from "./components/MainLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/man",
    element: <MainLayout />,
    children: [
      { path: "dhuti", element: <MensCollection /> },
      { path: "kurta", element: <Kurta /> },
      { path: "sherwani", element: <Sherwani /> }
    ]
  },
  {
    path: "/women",
    element: <MainLayout />,
    children: [
      { path: "saree", element: <Saree /> },
      { path: "lahenga", element: <Lahenga /> },
      { path: "blouse", element: <Blouse /> }
    ]
  },
  {
    path: "/couple",
    element: <MainLayout />,
    children: [
      { path: "punjabi", element: <Punjabi /> },
      { path: "lahenga_sherwani", element: <Lahenga_sherwani /> }
    ]
  },
  {
    path: "/juti",
    element: <MainLayout />,
    children: [
      { index: true, element: <Juti /> }  
    ]
  },
  {
    path: "/clintele",
    element: <MainLayout />,
    children: [
      { index: true, element: <Clientele /> }  
    ]
  }
]);
const App = () => {
  return (
    <>
      {/* <Home/> */}
      {/* <MensCollection/> */}
      {/* <Kurta/> */}
      {/* <Sherwani/> */}
      {/* <Saree/> */}
      {/* <Lahenga/> */}
      {/* <Blouse/> */}
      {/* <Punjabi/> */}
      {/* <Lahenga_sherwani/> */}
      {/* <Juti/> */}
      {/* <Clientele/> */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App