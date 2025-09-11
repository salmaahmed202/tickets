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


const isAuthenticated = true; 

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={<Login />} 
        />
        <Route 
          path="/" 
          element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}
        >
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="tickets" element={<Tickets />} />
          <Route path="add-ticket-form" element={<AddTicketForm />} />
          <Route path="Add-member" element={<AddMember />} />
          <Route path="teamsDashboard" element={<TeamsDashboard />} />
          <Route path="productPage" element={<ProductPage />} />
          <Route path="infrastructure" element={<Infrastructure />} />
          <Route path="safe" element={<Safe />} />
          <Route path="documents" element={<Documents />} />
          <Route path="knowledge-bases" element={<KnowledgeBase />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="communication" element={<Communication />} />
          <Route path="reports" element={<Reports />} />
        </Route>

        <Route 
          path="*" 
          element={<Navigate to="/login" />} 
        />
      </Routes>
    </Router>
  );
}

export default App;