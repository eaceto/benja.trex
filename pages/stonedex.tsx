import { Inter } from '@next/font/google'
import styles from '../app/page.module.css'


export default function Stonedex() {
    return (
        <div>
            <h1>Stonedex</h1>
            <p>Una Pokedex pero de piedras energéticas</p>
            <div className={styles.pokecontainer}>            
                { crearPiedra(1, "Pirita", "Dorado Brillante", 7, ["Aries", "Libra", "Sagitario", "Piscis"]) }
                { crearPiedra(2, "Agata", "Clores Varios", 1, ["Libra", "Leo", "Géminis", "Cáncer", "Virgo", "Piscis", "Escorpio"]) }
                { crearPiedra(3, "Cristal de Roca", "Transparente", 9, ["Todos"]) }
                { crearPiedra(4, "Cuarzo Rosa", "De rosa claro a rosa rojizo", 7, ["Tauro", "Leo", "Cáncer", "Libra"]) }
            </div>
        </div>
    )
}

const colors = [
    '#FDDFDF',
    '#DEFDE0',
	'#FCF7DE',
	'#DEF3FD',
	'#f4e7da',
	'#d5d5d4',
	'#fceaff',
	'#98d7a5',
	'#f8d5a3',
	'#97b3e6',
	'#eaeda1',
	'#F5F5F5',
	'#E6E0D4',
	 '#F5F5F5'
];

function crearPiedra(numero: number, nombre: string, colorName: string, numeroAsociado: number, signos: string[]) {
    const id = numero.toString().padStart(3, '0')
    const identificador = `#${id}`
    const color = colors[numero % colors.length]
    
    return <div className={styles.pokemon} style={{backgroundColor: color}}>
        <div className="imgcontainer">
            <img src={"./stonedex/" + nombre.replaceAll(' ', '_') + ".JPG"} style={{ width: 64, height: 64 }} alt={nombre} />
        </div>
        <div className={styles.info}>
            <span className={styles.number}>{identificador}</span>
            <h3 className={styles.name}>{nombre}</h3>
            <small className={styles.type}>Color: <span>{colorName}</span></small><br />
            <small className={styles.type}>Afinindad de Signos:
                <ul>
                {signos.map((signo: String) => {
                    return <li>{signo}</li>
                })}
                </ul>
            </small>
            <small className={styles.type}>Número asociado: <span>{numeroAsociado}</span></small><br />
        </div>
    </div>
}

