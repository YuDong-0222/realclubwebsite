'use client';
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Feature from '@/components/Feature'
import Newslett from '@/components/Newslett'
import Cards from '@/components/Card'
import Faq from '@/components/Faq'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Newslett />
      <Cards />
      <Faq />
      <Footer />    
    </>
  )
}
