import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import Login from './pages/Login';
import MainLayout from './pages/MainLayout';
import New from './pages/New';

function App() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route
          path=""
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="leaderboard"
          element={
            <ProtectedRoute>
              <Leaderboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="new"
          element={
            <ProtectedRoute>
              <New />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
