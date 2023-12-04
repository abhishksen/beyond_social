import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import AuthPage from "./pages/auth/AuthPage"
import PageLayout from "./layout/pageLayout/PageLayout"

function App() {

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </PageLayout>
  )
}

export default App
