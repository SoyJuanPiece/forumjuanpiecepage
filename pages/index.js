import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {

  return (
    <Layout>
        <h1 className='is-size-2 is-size-4-mobile'>Foro de JuanPiece</h1>
        <h2 className='is-size-4 mb-5'>Un espacio para nuestra comunidad. <br />Comparte tus ideas, haz preguntas y conecta con otros miembros.</h2>

        <div>
          <Link href='/posts'><button className="button is-outlined mr-1">Entrar al Foro</button></Link>
        </div>
    </Layout>
  )
}