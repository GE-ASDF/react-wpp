
import { RouterProvider } from "react-router-dom"
import router from "./route.jsx";

export default function App(){
  return (
    <RouterProvider router={router} />
  )
}