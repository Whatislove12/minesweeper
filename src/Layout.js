import { Footer } from "./components/Footer"
import { Minesweeper } from "./components/Minesweeper"
import styles from './styles/Layout.module.scss'


export const Layout = () => {

    return (
        <div className={styles.layout}>
            <Minesweeper />
            <Footer />
        </div>
    )

}