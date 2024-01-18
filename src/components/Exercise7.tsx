import React from 'react'
import { CardCss } from './CardCss'
import { CardTailwind } from './CardTailwind'

export const Exercise7 = () => {
    return (
        <div className='flex flex-row justify-between items-start space-x-3'>
            <div>
                <h3>Imagen de ejemplo</h3>
                <img src='zafira-card.png' style={{ marginTop: 5 }} />
            </div>

            <div className='bg-red'>
                <h3>Imagen de Emmy</h3>
                <CardTailwind titulo={'Blood Cross'} precio={'$1520'}/>
                {/* <CardCss titulo={'Blood Cross'} precio={'$1520'}/> */}
                {/* <img src='zafira-card.png' style={{ marginTop: 5 }} />  */}
                {/*TODO: reemplazar esta img por el componente card */}
            </div>
        </div>
    )
}
