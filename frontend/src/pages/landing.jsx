import React from 'react'
import "../App.css"
import { Link, useNavigate } from 'react-router-dom'
import Hero from "../components/Hero.jsx"
import Features from '../components/Features.jsx'
import Footer from '../components/Footer.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function LandingPage() {


    const router = useNavigate();

    return (
        <div className='landingPageContainer'>
            <Hero/>
            <Features/>
            <Testimonials/>
            <Footer/>
        </div>
    )
}
