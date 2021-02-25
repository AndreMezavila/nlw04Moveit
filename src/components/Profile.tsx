import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/AndreMezavila.png" alt="Andre Mezavila"/>
            <div>
                <strong>André Mezavila</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 10
                </p>
            </div>
        </div>
    )
} 