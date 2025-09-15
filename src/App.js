import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TeamsDashboard from '../src/pages/TeamsDashboard';
import AddMember from "../src/pages/AddMember";
import Layout from '../src/pages/Layout';
import ProductPage from '../src/pages/ProductPage';
import AddTicketForm from '../src/pages/AddTicketForm';
import Dashboard from './pages/Dashboard';
import Tickets from './pages/Tickets';
import Infrastructure from './pages/Infrastructure';
import Safe from './pages/Safe';
import Documents from './pages/Documents';
import KnowledgeBase from './pages/KnowledgeBase';
import Tasks from './pages/Tasks';
import Communication from './pages/Communication';
import Reports from './pages/Reports';
import Login from './pages/Login';

// Simple authentication state (replace with real auth logic)
const isAuthenticated = true; // Set to true for testing

function App() {
  return (
    <Router>
      <Routes>
        {/* Login Route - Outside Layout */}
        <Route 
          path="/login" 
          element={<Login />} 
        />

        {/* Protected Routes - Each wrapped individually with Layout */}
        <Route 
          path="/" 
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
        />
        <Route 
          path="/dashboard" 
          element={isAuthenticated ? <Layout><Dashboard /></Layout> : <Navigate to="/login" />}
        />
        <Route 
          path="/tickets" 
          element={isAuthenticated ? <Layout><Tickets /></Layout> : <Navigate to="/login" />}
        />
        <Route 
          path="/add-ticket-form" 
          element={isAuthenticated ? <Layout><AddTicketForm /></Layout> : <Navigate to="/login" />}
        />
        <Route 
          path="/Add-member" 
          element={isAuthenticated ? <Layout><AddMember /></Layout> : <Navigate to="/login" />}
        />
        <Route 
          path="/teamsDashboard" 
          element={isAuthenticated ? <Layout><TeamsDashboard /></Layout> : <Navigate to="/login" />}
        />
        <Route 
          path="/productPage" 
          element={isAuthenticated ? <Layout><ProductPage /></Layout> : <Navigate to="/login" />}
        />
        <Route 
          path="/infrastructure" 
          element={isAuthenticated ? <Layout><Infrastructure /></Layout> : <Navigate to="/login" />}
        />
        <Route 
          path="/safe" 
          element={isAuthenticated ? <Layout><Safe /></Layout> : <Navigate to="/login" />}
        />
        <Route 
          path="/documents" 
          element={isAuthenticated ? <Layout><Documents /></Layout> : <Navigate to="/login" />}
        />
        <Route 
          path="/knowledge-bases" 
          element={isAuthenticated ? <Layout><KnowledgeBase /></Layout> : <Navigate to="/login" />}
        />
        <Route 
          path="/tasks" 
          element={isAuthenticated ? <Layout><Tasks /></Layout> : <Navigate to="/login" />}
        />
        <Route 
          path="/communication" 
          element={isAuthenticated ? <Layout><Communication /></Layout> : <Navigate to="/login" />}
        />
        <Route 
          path="/reports" 
          element={isAuthenticated ? <Layout><Reports /></Layout> : <Navigate to="/login" />}
        />

        {/* Redirect to login for any unmatched paths */}
        <Route 
          path="*" 
          element={<Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;