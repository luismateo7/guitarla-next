import Image from "next/image"
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
        title="Nosotros"
        description="GuitarLA - Nosotros"
    >
        <main className={`${styles.nosotros} contenedor`}>
          <h2 className="heading">Nosotros</h2>
          <div className={styles.contenido}>
            <Image src='/img/nosotros.jpg' alt="imagen sobre nosotros" width={1000} height={800}/>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, dolor exercitationem consectetur cumque debitis non molestias possimus nulla, praesentium corrupti officiis, nesciunt dolorem. Vero praesentium qui vel esse animi dignissimos.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nulla optio molestias officia sed iusto, temporibus quisquam blanditiis.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, dolor exercitationem consectetur cumque debitis non molestias possimus nulla, praesentium corrupti officiis, nesciunt dolorem. Vero praesentium qui vel esse animi dignissimos.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores nulla optio molestias officia sed iusto, temporibus quisquam blanditiis.
              </p>
            </div>
          </div>
        </main>
    </Layout>
  )
}
