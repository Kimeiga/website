import React from 'react'
import wfsmall from '../../res/vector/wfsmall.svg'
import {Link} from 'react-router-dom'
import Image from '../Image'

const HomeLink = (props) => {
  return (
    <Link to='/home'>
      <Image src={wfsmall} alt={'w.f'} style={{zIndex: 10, backgroundColor: 'white', position: 'fixed', width: '3rem', height: '2rem', top: '5vh', right: '5vw', objectFit: 'contain'}}/>
    </Link>
  )
}

export default HomeLink