import React, { useState } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import NotFoundPage from './components/notFoundPage/NotFoundPage'

const App = () => {
  const [isValidPage, setIsValidPage] = useState(true);

  // function to check if the current path is valid
  const checkValidPath = () => {
    const validPaths = ['/', '/about', '/skills', '/contact'];
    if (!validPaths.includes(window.location.pathname)) {
      setIsValidPage(false);
    }
  }

  // check for valid path on mount
  React.useEffect(() => {
    checkValidPath();
  }, []);

  return (
    <>
        {isValidPage ? (
          <>
            <Header />
            <Nav />
            <About />
            <Skills />
            {/* <Experience /> */}
            {/* <Services /> */}
            {/* <Portfolio /> */}
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
          </>
        ) : (
          <NotFoundPage />
        )}
    </>
  )
}

export default App
