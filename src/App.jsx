import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

function App() {

  const metadata = {
    title: "Mi primer app en React",
    subtitle: "Este es un parrafo"
  }

  return (
    <>
    <Header title = {metadata.title}
    subtitle={metadata.subtitle}/>
    <p>
      Hola mundo
    </p>
    <Content/>
    <Footer/>
    </>
  )
}

export default App
