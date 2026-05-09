import { useState } from 'react'
import './Home.css'
import Header from '../../components/header/Header'
import CoverCard from '../../components/cover_card/CoverCard'
import StoneSuiteCover from '../../assets/images/cover_images/stoneSuiteCover.jpg'
import WoodSuiteCover from '../../assets/images/cover_images/woodSuiteCover.jpg'
import Suite1Suite2Cover from '../../assets/images/cover_images/suite1+2cover.jpg'
import Suite3Cover from '../../assets/images/cover_images/suite3cover.jpg'
function Home() {
    return (
        <>
            <Header />
            <h3 className="welcome">ברוכים הבאים לאתר של צמרת</h3>
            <CoverCard imgSrc={StoneSuiteCover} cover_name="סויטת אבן" />
            <CoverCard imgSrc={WoodSuiteCover} cover_name="סויטת עץ" />
            <CoverCard imgSrc={Suite1Suite2Cover} cover_name="סויטות 1+2" />
            <CoverCard imgSrc={Suite3Cover} cover_name="סויטה 3" />

        </>
    )
}

export default Home