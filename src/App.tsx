import Navbar from "@/scenes/navbar";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState('home')
  return (
    <>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </>
  )
}

export default App
