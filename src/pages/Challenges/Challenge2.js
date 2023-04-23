import React from 'react'
import ChallengeCard from '../../components/ChallengeCard/ChallengeCard'
import './Challenge.css'
import Next from '../../assets/Images/arrow_right.png'
import { Link } from 'react-router-dom'
import Back from '../../assets/Images/arrow_left.png'


function Challenge2() {

  const ChallengeInfo = {
    "challengeId": "Challenge2",
    "title": "Steganography #2",
    "url": "https://drive.google.com/file/d/1GhdwXa0NkQuclNA2yuk4pBbaOn84VlhO/view?usp=share_link",
    "desc": "This is also an simple Steganography Challenge",
    "diff": "Easy"
  }
  return (
    <div className="main-container">
      <div className='prev-challenge'>
        <Link to={"/Challenge1"}>
          <img src={Back}></img>
        </Link>
      </div>
      <div className='big-card'>
        <ChallengeCard title={ChallengeInfo.title} url={ChallengeInfo.url} desc={ChallengeInfo.desc} diff={ChallengeInfo.diff} challengeId={ChallengeInfo.challengeId} />
      </div>
      <div className='next-challenge'>
        <Link to={"/Challenge3"}>
          <img src={Next}></img>
        </Link>
      </div>
    </div>
  )
}

export default Challenge2