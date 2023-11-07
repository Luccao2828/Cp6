import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import EditarPedido from './routes/EditarPedido.jsx'
import ExcluirPedido from './routes/ExcluirPedido.jsx'
import InserirPedido from './routes/InserirPedido.jsx'
import Pedido from './routes/Pedido.jsx'
import Livros from './routes/Livros.jsx'
import InserirLivro from './routes/InserirLivro.jsx'
import EditarLivro from './routes/EditarLivro.jsx'
import ExcluirLivro from './routes/ExcluirLivro.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Sobre from './routes/Sobre.jsx'
import Error from './components/Error.jsx'
import Card from './components/ProductCard.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<Error />,

    children:[
      { path: '/', element:<Home />},
      { path: '/EditarPedido', element:<EditarPedido />},
      { path: '/ExcluirPedido', element:<ExcluirPedido />},
      { path: '/InserirPedido', element:<InserirPedido />},
      { path: '/Pedido', element:<Pedido/>},
      { path: '/Livros', element:<Livros/>},
      { path: '/InserirLivro', element:<InserirLivro/>},
      { path: '/EditarLivro', element:<EditarLivro/>},
      { path: '/ExcluirLivro', element:<ExcluirLivro/>},
      { path: '/Login', element:<Login />},
      { path: '/Sobre', element:<Sobre />},
      { path: '/Home', element:<Home />},
      { path: '/Card', element:<Card />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router} />,

)
