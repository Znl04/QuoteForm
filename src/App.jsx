import './App.css'
import CreditFormPage from './pages/CreditFormPage/CreditFormPage'
import QueryFormPage from './pages/QueryFormPage/QueryFormPage'
import OpenCardPage from './pages/OpenCardPage/OpenCardPage'

function App() {
  
  return (
    <>
      <QueryFormPage/>
      <CreditFormPage user={{ fullName: "Иван Иванов", iin: "123456789012" }} />
      <OpenCardPage fullName="Иван Иванов" />
    </>
  )
}

export default App
