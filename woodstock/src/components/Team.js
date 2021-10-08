import React from 'react'
import './Team.css'
import imageteam from '../img/imageteam.png'

const Team = () => {
    return (
        <div className="container-fluid bg-dark">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-4">
                    <img src={imageteam} alt="imagestream" className="img-fluid"/>
                </div>
                <div className="col-sm-6">
                    <p className="text-light text-end">WOOD</p>
                    <h2 className="text-center text-dark bg-light mt-5 me-5 p-3 ">CREATIVE TEAM</h2>
                    <h3 className="text-light ms-5 p-2">GOOG MINDSET</h3>
                    <p className="text-light mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil aspernatur consequatur distinctio tempore architecto iste praesentium mollitia, maxime eveniet, corporis obcaecati blanditiis deserunt ea consequuntur? Odio deserunt laudantium dolorum quae!</p>
                    <button className="mt-3 text-light bg-dark py-2 px-3">Meet the team</button>
                </div>
            </div>
        </div>
    )
}

export default Team