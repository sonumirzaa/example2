import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>

            <div>Home</div>

            <h2 className='hi'>hiii</h2>

            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    
                    
                </ul>
            </nav>
        </>
    )
}

export default Home