import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from "../styles/blog.module.css"
import { formatearFecha } from '@/utils/helpers'

export default function Post({post}) {

    const { imagen, contenido, titulo, url, publishedAt} = post

    return (
        <article className={styles.post}>
            <Image src={imagen.data[0].attributes.formats.small.url} alt={`Imagen de ${titulo}`} className={styles.imagen} width={600} height={400} />
            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{contenido}</p>
                <Link className={styles.enlace} href={`/blog/${url}`}>Leer Post</Link>
            </div>
        </article>
    )
}
