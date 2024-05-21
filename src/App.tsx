import { FC } from "react"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '@/components/Sidebar.tsx'
import Finance from '@/pages/Finance.tsx'
import Stocks from '@/pages/Stocks.tsx'
import Crypto from '@/pages/Crypto.tsx'

const App: FC = () => {
  return (
        <BrowserRouter>
          <div className="flex w-screen">
            <aside className="h-screen w-12 border-r">
              <Sidebar/>
            </aside>
            <main className="w-full">
              <Routes>
                  <Route path="finance" element={<Finance/>} />
                  <Route path="stocks" element={<Stocks/>} />
                  <Route path="crypto" element={<Crypto/>} />
                  <Route path="*" element={<Navigate to="/finance" />} />
              </Routes>
            </main>
          </div>
        </BrowserRouter>
  )
}

export default App
