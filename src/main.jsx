import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Triage from './pages/Triage.jsx';
import './styles/global.css';

function App() { return <ThemeProvider><BrowserRouter><Routes><Route path="/" element={<Navigate to="/login" replace />} /><Route path="/login" element={<Login />} /><Route path="/dashboard" element={<Dashboard />} /><Route path="/triage" element={<Triage />} /><Route path="/triage/:alertId" element={<Triage />} /><Route path="*" element={<Navigate to="/login" replace />} /></Routes></BrowserRouter></ThemeProvider>; }
createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
