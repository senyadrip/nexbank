import React from 'react'
import styles from '../style'
import {arrowUp} from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full p-[2px] cursor-pointer bg-blue-gradient`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}></div>
    </div>
  )
}

export default GetStarted