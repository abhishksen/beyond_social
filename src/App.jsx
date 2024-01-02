import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import AuthPage from "./pages/auth/AuthPage"
import PageLayout from "./layout/pageLayout/PageLayout"
import ProfilePage from "./pages/profilepage/ProfilePage"

function App() {

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  )
}

export default App
