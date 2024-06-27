import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import './index.css'

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout