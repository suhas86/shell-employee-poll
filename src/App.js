import { Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-redux-loading-bar';
import { connect } from 'react-redux';
import './App.css';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Leaderboard from './pages/Leaderboard';
import Login from './pages/Login';
import MainLayout from './pages/MainLayout';
import New from './pages/New';
import Poll from './pages/Poll';
import { useEffect } from 'react';
import { handleInitialData } from './actions/shared';
import NotFound from './pages/NotFound';

function App({ dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  return (
    <>
      <LoadingBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
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
            path="/poll/:id"
            element={
              <ProtectedRoute>
                <Poll />
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
    </>
  );
}

export default connect()(App);
