import './App.css';
import { AuthProvider } from "./context/AuthContext.tsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ProtectedRoute from "./components/ProtectedRoute.tsx";

function App() {
    return (
        <AuthProvider>
            <Router>

                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/" element={
                            <ProtectedRoute>
                                <MainPage />
                            </ProtectedRoute>
                        } />
                    </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;