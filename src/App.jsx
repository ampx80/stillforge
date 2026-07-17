import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Play from './pages/Play'
import Shop from './pages/Shop'
import Commission from './pages/Commission'
import Craft from './pages/Craft'
import Story from './pages/Story'
import Contact from './pages/Contact'
import Guides from './pages/Guides'
import Article from './pages/Article'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="play" element={<Play />} />
          <Route path="shop" element={<Shop />} />
          <Route path="commission" element={<Commission />} />
          <Route path="craft" element={<Craft />} />
          <Route path="story" element={<Story />} />
          <Route path="contact" element={<Contact />} />
          <Route path="guides" element={<Guides />} />
          <Route path="guides/:slug" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
