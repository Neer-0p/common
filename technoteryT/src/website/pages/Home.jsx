import React from 'react'
import Header from '../common/Header'

function Home() {
  return (
    <div>

      {/* header */}
      <Header title="Home" data="Home" />

      {/* hero */}
      <div>
        <div className="main m-4">
          <div className="row ">
            <div className="col-8 ">
              <div className='img'>
                <img className='img-fluid' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb6SDQONm9G9s5Ic9nKwtdXIszvQYOQ8aPFw&s" alt="" />
              </div>
            </div>
            <div className="col-4 ">
              <div className='text-end me-5'>
                <h2>E-Commerce</h2>
                <p className=''>By Technotry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home