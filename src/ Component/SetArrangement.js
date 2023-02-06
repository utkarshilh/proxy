import React from 'react'
import Temp from './Temp'



export default function SetArrangement() {

    return (

        <>
            <div class="card text-center">
                <div class="card-header">
                    Featured
                </div>
                <div class="card-body">
                    <h5 class="card-title">Special title treatment</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <button className='btn-primary'>Go Somewhere</button>
                </div>
                <div class="card-footer text-muted">
                    2 days ago
                </div>
            </div>

            <Temp />

        </>
    )
}
