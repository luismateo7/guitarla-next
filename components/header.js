import Image from 'next/image'
import Link from 'next/link'
import Navegacion from './navegacion'

export default function Header() {
  return (
    <header className='header'>
        <div className='barra'>
            <Link href='/'>            
              <Image src='/img/logo.svg' width={300} height={40} alt='imagen logotipo'/>
            </Link>

            <Navegacion />
        </div>
    </header>
  )
}
