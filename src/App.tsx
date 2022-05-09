import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '@/presentation/pages/home'
import { List } from '@/presentation/pages/list'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
