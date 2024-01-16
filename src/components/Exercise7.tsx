import React from 'react'

export const Exercise7 = () => {
    return (
        <div className='flex flex-row justify-between items-start space-x-3'>
            <div>
                <h3>Imagen de ejemplo</h3>
                <img src='zafira-card.png' style={{ marginTop: 5 }} />
            </div>

            <div>
                <h3>Imagen de Emmy</h3>
                <img src='zafira-card.png' style={{ marginTop: 5 }} /> {/*TODO: reemplazar esta img por el componente card */}
            </div>
        </div>
    )
}
