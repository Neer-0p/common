import React from 'react'
import Navbar from '../common/Navbar'

function Home() {
    return (
        <div>
            
            <Navbar />

            {/* home */}
            {/* <!-- Hero Section --> */}
            <section id="hero" className="hero section light-background">
                <div className="container">
                    <div className="hero-content">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="content">
                                    <h1 className="hero-title mb-4">Jenya/Ravyat</h1>
                                    <p className="hero-subtitle mb-4">Testing website for products</p>
                                    <div className="hero-actions d-flex flex-wrap gap-3 mb-4">
                                        <a href="#book-a-table" className="btn btn-primary">New Products</a>
                                        <a href="#menu" className="btn btn-outline">View</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="hero-images">
                                    <div className="main-image">
                                        <img src="assets/main.webp" alt="Signature Mediterranean Dish" className="" />
                                    </div>
                                    <div className="floating-images">
                                        <div className="floating-image floating-image-1">
                                            <img src="assets/main1.jpg" alt="Grilled Seafood" className="" />
                                        </div>
                                        <div className="floating-image floating-image-2">
                                            <img src="assets/main2.jpg" alt="Mediterranean Dessert" className="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home