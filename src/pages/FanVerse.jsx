import React from 'react'
import Navbar from '../components/FanVerse/navbar'
import Hero from '../components/FanVerse/hero'
import Creations from "../components/FanVerse/creations"
import ExploreFanVerse from '../components/FanVerse/explore'
import FanOfTheWeek from '../components/FanVerse/Fanoftheweek'
import GlobalFanCommunity from '../components/FanVerse/GlobalFanCommunity'
import SubmitCreation from '../components/FanVerse/SubmitCreation'
import Footer from "../components/footer"

const FanVerse = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Creations />
            <ExploreFanVerse />
            <FanOfTheWeek />
            <GlobalFanCommunity />
            <SubmitCreation />
            <Footer />
        </div>
    )
}

export default FanVerse;