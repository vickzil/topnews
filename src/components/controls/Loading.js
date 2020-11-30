import React from 'react'

function Loading() {
    return (
        <div className="loadar text-center">
            <div className="spinner-grow text-success" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}

export default Loading
