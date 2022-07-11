import { Outlet } from "react-router-dom"

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>I am the navigation bar</h1>
        <Outlet />
      </div>
    </div>
  )
}

export default Navigation