import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Navegacion() {

  const router = useRouter()

  return (
    <nav className='navegacion'>
        <Link href='/' className={router.pathname === '/' ? 'active' : ''}>Inicio</Link>
        <Link href='/nosotros' className={router.pathname === '/nosotros' ? 'active' : ''}>Nosotros</Link>
        <Link href='/tienda' className={router.pathname === '/tienda' ? 'active' : ''}>Tienda</Link>
        <Link href='/blog' className={router.pathname === '/blog' ? 'active' : ''}>Blog</Link>
        <Link href='/carrito' className={router.pathname === '/carrito' ? 'active' : ''}>
          <Image width={30} height={25} src="/img/carrito.png" alt='imagen-carrtio' />
        </Link>
    </nav>
  )
}
