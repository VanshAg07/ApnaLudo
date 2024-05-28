import React from 'react'
import './ReferalHistory.css'
import referaHislLogo from '../images/refer-logo2.jpg'

const ReferalHistory = () => {
  return (
    <div className="referal-history-container">
      <div className="referal-history-logo">
        <img src={referaHislLogo} alt="Referral History Logo" />
      </div>
      <div className="referal-history-message">
        <h2>No Refer Yet!</h2>
      </div>
    </div>
  )
}

export default ReferalHistory
