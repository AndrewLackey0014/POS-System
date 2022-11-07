import NavBar from "./NavBar";
import Pricing from "./pages/Pricing"
import About from "./pages/About"
import Home from "./pages/Home"

function App() {
  let component
  switch (window.location.pathname) {
    case "/pricing":
      component = <Pricing/>
      break
    case "/about":
      component = <About/>
      break
    default: 
      component = <Home/>
      break
  }
  return (
    <>
      <NavBar/>
      {component}
    </>
  )

}

export default App;
