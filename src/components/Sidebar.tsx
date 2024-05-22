import { FC } from 'react'
import { Link } from "react-router-dom"
import { PiMoneyWavyBold } from "react-icons/pi";
import { AiOutlineStock } from "react-icons/ai";
import { RiBitCoinLine, RiAccountCircleLine  } from "react-icons/ri";

const Sidebar: FC = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-10">
      <Link to='finance' className='p-3 text-2xl text-blue-100'><PiMoneyWavyBold/></Link>
      <Link to='stocks' className='p-3 text-2xl text-blue-100'><AiOutlineStock/></Link>
      <Link to='crypto' className='p-3 text-2xl text-blue-100'><RiBitCoinLine/></Link>
      <Link to='profile' className='p-3 text-2xl text-blue-100'><RiAccountCircleLine/></Link>
    </div>
  )
}

export default Sidebar
