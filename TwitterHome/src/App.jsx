import SideBar from "./components/SideBar"
import Middle from "./components/Middle"
import RightBar from "./components/RightBar"

function App() {
  return (
    <>
      <div className="flex w-full mx-auto text-white">

        <SideBar />
        <Middle />
        <RightBar />

      </div>
    </>
  )
}

export default App
