import '@/styles/globals.css'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {

  const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? [] : null

  const [ carrito, setCarrito ] = useState(carritoLS)
  const [ paginaLista, setPaginaLista ] = useState(false)

  useEffect(()=>{
    setPaginaLista(true)
  }, [])

  useEffect(()=>{
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])
  
  const agregarCarrito = (guitarra)=>{

    if(carrito.some( guitarraState => guitarraState.id === guitarra.id )){ //Bool: Existe duplicado

      const carritoActualizado = carrito.map( guitarraState =>{  //Iterar e identificar el elemento duplicado
        if(guitarraState.id === guitarra.id) guitarraState.cantidad = guitarra.cantidad //Remplazar solo la cantidad
        return guitarraState
      })

      setCarrito(carritoActualizado)
    }

    else setCarrito([...carrito, guitarra]) //Registro nuevo - agregar al carrito
  }

  const actualizarCantidad = guitarra =>{
    const carritoActualizado = carrito.map( guitarraState =>{
      if(guitarraState.id === guitarra.id) guitarraState.cantidad = guitarra.cantidad
      return guitarraState
    })
    setCarrito(carritoActualizado)
  }

  const eliminarGuitarra = id =>{
    const carritoActualizado = carrito.filter( guitarraState => {
      if(guitarraState.id !== id)
      return guitarraState
    })
    setCarrito(carritoActualizado)
  }

  return paginaLista ? <Component {...pageProps}
    carrito ={carrito}
    agregarCarrito={agregarCarrito}
    actualizarCantidad={actualizarCantidad}
    eliminarGuitarra={eliminarGuitarra}
  /> : null
}
