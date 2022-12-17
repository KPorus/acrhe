
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';


function App() {
  let route = createBrowserRouter([
    {path:"/",element:<div ><Main></Main></div>}
  ])
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
