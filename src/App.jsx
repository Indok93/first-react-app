import './App.scss'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'
import { ContentWrapper } from './components/ContentWrapper/ContentWrapper'

function App() {
  return (
    <>
    <Header />
    <ContentWrapper title="Dette er en sidetitel">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi repellendus error repudiandae temporibus itaque rerum molestias adipisci eum veniam asperiores eos deleniti cupiditate in corrupti, voluptatem nisi porro laudantium dolores.</p>
    </ContentWrapper>
    <Main />
    <Footer />
    </>
  )
}

export default App
