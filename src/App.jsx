import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import AuthPage from "./pages/auth/AuthPage"
import PageLayout from "./layout/pageLayout/PageLayout"
import ProfilePage from "./pages/profilepage/ProfilePage"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "./firebase/firebase"

function App() {
  const [authUser] = useAuthState(auth);

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/auth" />} />
        <Route path="/auth" element={!authUser ? <AuthPage /> : <Navigate to="/" />} />
        <Route path="/:username" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  )
}

export default App
