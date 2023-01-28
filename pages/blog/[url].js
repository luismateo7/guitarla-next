import Layout from "@/components/layout"
import Image from "next/image"
import styles from "../../styles/blog.module.css"
import { formatearFecha } from "@/utils/helpers"

export default function Entradas({post}) {

    const { titulo, contenido, imagen, publishedAt } = post[0].attributes

    return (
        <Layout
          title={`${titulo}`}
          description={`Entrada sobre: ${titulo}`}
        >
            <main className={`${styles.post} ${styles['mt-3']}`}>
                <Image className={styles.imagen} src={imagen?.data[0]?.attributes?.url} alt={`imagen del post ${titulo}`} width={1000} height={600} />
                <div className={styles.contenido}>
                    <h3>{titulo}</h3>
                    <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                    <p className={styles.texto}>{contenido}</p>
                </div>
            </main>
        </Layout>
    )
}

export async function getStaticPaths(){

    const respuesta = await fetch(`${process.env.API_URL}/posts`)
    const { data }= await respuesta.json()
  
    const paths = data?.map(post => ({
      params:{
        url: post.attributes.url
      }
    }))
  
    return{
      paths,
      fallback: false
    }
  }
  
  export async function getStaticProps({params: {url}}){

    console.log("Esto son los params: " + url)

      const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)
      const { data: post } = await respuesta.json()
      return{
        props:{
          post
        }
      }
  }