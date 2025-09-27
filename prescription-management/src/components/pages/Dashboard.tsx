import { useEffect } from "react"


function Dashboard() {
  useEffect (()=>{
        document.title ="Dashboard"
    })
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard