import { RouterProvider } from "react-router-dom";
import { publicRoutes } from "./Routers";

function App() {
  return (
    <div className="App">
      <RouterProvider router={publicRoutes} />
    </div>
  );
}

export default App;
