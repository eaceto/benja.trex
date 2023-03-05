import { Inter } from '@next/font/google'
import styles from '../app/page.module.css'


export default function Multiplicaciones() {
    return (
        <div>
            <main className={styles.main} style={{zIndex: 1}}>
                <h1>
                    Esto es un juego para aprender las tablas del 1 al 10
                </h1>
                <h2>
                    Tabla del 1
                </h2>
                <div>
                    <ul>
                        <li>1 * 1 = 1</li>
                        <li>1 * 2 = 2</li>
                        <li>1 * 3 = 3</li>
                        <li>1 * 4 = 4</li>
                        <li>1 * 5 = 5</li>
                        <li>1 * 6 = 6</li>
                        <li>1 * 7 = 7</li>
                        <li>1 * 8 = 8</li>
                        <li>1 * 9 = 9</li>
                        <li >1 * 10 = 10</li>
                    </ul>
                </div>
            </main>
        </div>
    )
}
