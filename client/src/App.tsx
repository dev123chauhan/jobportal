import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Job from './components/Job/Job'
import JobDetail from './components/Job/JobDetail'
import Auth from './components/Authorization/Auth'
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import ScrollToTop from 'react-scroll-to-top'
import { ArrowUp } from 'lucide-react'
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions'
import ScrollToTopFromBottom from './components/ScrollToTop/ScrollToTop'
import Layout from './components/Layout/Layout'

function App() {
  return (
  <>
  <ScrollToTop className="scrollToTop" smooth component={<ArrowUp className="upArrow"/>}/>
  <ScrollToTopFromBottom />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/job' element={<Layout><Job /></Layout>} />
    <Route path='/jobdetail' element={<Layout><JobDetail /></Layout>} />
    <Route path='/auth' element={<Auth />} />
    <Route path='/profile' element={<Layout><Profile /></Layout>} />
    <Route path='/about' element={<Layout><About /></Layout>} />
    <Route path='/privacypolicy' element={<Layout><PrivacyPolicy /></Layout>} />
    <Route path='/terms' element={<Layout><TermsAndConditions /></Layout>} />
  </Routes>
  </>
  )
}

export default App