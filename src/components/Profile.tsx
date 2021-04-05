import { useContext } from 'react'
import styles from '../styles/components/Profile.module.css'
import { ChallengesContext } from '../contexts/ChallengeContext'

export function Profile () {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src='https://github.com/GabrielPrediger.png' alt='Joseph Oliveira' />
      <div>
        <strong>Gabriel Prediger</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          Level {level}
        </p>
      </div>
    </div>
  )
}
