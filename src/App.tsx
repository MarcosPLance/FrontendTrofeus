import './app.css'
import Login from './pages/login'
import Home from './pages/home'
import Detalhes from './pages/detalhes'

import {BrowserRouter, Routes, Route} from "react-router"

import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import { ToastContainer, toast } from 'react-toastify/unstyled'
import CartProvider from './contexts/cartContext'

const queryClient = new QueryClient();

export default function App() {

  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/"         element={<Login />} />
            <Route path="/home"     element={<Home />} />
            <Route path="/jogo/:id"  element={<Detalhes />} />
          </Routes>
        </BrowserRouter>
      
        <ToastContainer position="top-left"/>
      
      </QueryClientProvider>
    </CartProvider>
    );
}