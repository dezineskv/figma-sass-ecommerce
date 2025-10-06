import React from 'react'
import Header from './Header'
import Header2 from './Header2'

export default function Headers() {
  return (
    <div style={{width: '100%',   position: 'sticky', top: '0', zIndex: '100'}}>
        <Header></Header>
        <Header2/>
    </div>
  )
}
