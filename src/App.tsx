import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>RAIZ</div>,
  },
  {
    path: "/teste",
    element: <div>PAGINA TESTE</div>,
  },
]);

export function App(){
  return <RouterProvider router={router} />
}