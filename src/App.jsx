import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { Helmet } from 'react-helmet';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Amer Fathullah Nuaim bin Zakaria",
  "url": "https://amerfathullah.com",
  "image": "https://amerfathullah.com/static/media/me-about.51fb11cf969c73f7e273.jpg",
  "sameAs": [
    "https://www.linkedin.com/in/amerfathullah",
    "https://twitter.com/AmerFathullah",
    "https://www.instagram.com/amer_fathullah",
    "https://www.facebook.com/amer.fathullah",
    "https://github.com/amerfathullah"
  ],
  "email": "amerfathullah@gmail.com",
  "gender": "male",
  "birthDate": "1997-08-17",
  "jobTitle": "Full-Stack Software Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "TFX Islamic Sdn Bhd"
  },
  "nationality": "Malaysian",
  "description": "Amer Fathullah Nuaim bin Zakaria is a Full-Stack Software Developer based in Malaysia. He have diverse software engineering experience such as front-end development, back-end development, mobile development and machine learning.",
};

const App = () => {
  return (
    <>
        <Helmet>
          <link rel="canonical" href="https://amerfathullah.com" />
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>
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
  )
}

export default App