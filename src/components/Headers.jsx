import React from 'react'
import Header from './Header'
import MyNav from './MyNav'

export default function Headers() {
  return (
    <div style={{width: '100%',   position: 'sticky', top: '0', zIndex: '100'}}>
        <Header></Header>
        <MyNav></MyNav>
    </div>
  )
}
