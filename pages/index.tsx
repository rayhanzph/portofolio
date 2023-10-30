import AboutMe from 'components/AboutMe'
import Contact from 'components/Contact'
import Container from 'components/Container'
import Education from 'components/Education'
import Experience from 'components/Experience'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'
import Skills from 'components/Skills'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Container>
      <Navbar />
      <AboutMe />
      <Skills />
      <Education/>
      <Experience />
      <Contact />
      <Footer />
    </Container>
  )
}

export default Home
