import { FC } from 'react'
import { Link } from "react-router-dom"

const Sidebar: FC = () => {
  return (
    <div className="flex flex-col">
      <Link to='finance'>F</Link>
      <Link to='stocks'>S</Link>
      <Link to='crypto'>C</Link>
    </div>
  )
}

export default Sidebar
