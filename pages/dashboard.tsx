'use client'
import DashBoardNav from "../components/DashBoardNav/DashBoardNav"
import XFunds from "../components/XFunds/XFunds"
export default function Dashboard() {

return(<div className="relative h-screen flex overflow-hidden bg-gray-100">

<DashBoardNav ><XFunds /></DashBoardNav>
  
</div>)

}