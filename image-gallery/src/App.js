import { Routes, Route } from "react-router-dom";
import {DndContext} from '@dnd-kit/core';

import { Header, Body } from "./components";
import { Login } from "./pages";

function App() {
  return (
    <div className="w-full">
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/images/*" element={<Home />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <Header />
      <DndContext>
        <Routes>
          <Route path="/" element={<Body />} />
        </Routes>
      </DndContext>
    </div>
  )
}
export default App;
