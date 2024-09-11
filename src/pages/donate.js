import React from 'react'
import Donate from '@/components/donate/donate'

const DonatePage = () => {
  return (
    <div className='container my-5'>
      <div className="row">
        <div className="col-md-12">
          <h2 className="fw-bold text-center mb-4">Support Our Ministry</h2>
          <p className="text-center text-muted">
          Your generosity enables us to continue our mission.
          Please choose your preferred method to give and help us make a difference.
          </p>
        </div>
      </div>
    <Donate/>
    </div>
  )
}

export default DonatePage