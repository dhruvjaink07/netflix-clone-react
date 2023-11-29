import React from 'react'
import Hero from './Hero'
import Tv from './Tv'
import Box2 from './Box2.js'
import Box3 from './Box3.js'
import Box4 from './Box4.js'
import FAQ from './Faqs.js'
import PageE from './PageEnd.js'
import '../App.css'

function Show() {
  return (
    <>
    <Hero/>
    <section className="grey-divider"/>
    <Tv/>
    <section className="grey-divider"/>
    <Box2/>
    <section className='grey-divider'/>
    <Box3/>
    <section className='grey-divider'/>
    <Box4/>
    <section className='grey-divider'/>
    <FAQ/>
    <section className='grey-divider'/>
    <PageE/>
    </>
  )
}

export default Show