import React, { FC, ReactNode } from 'react'

interface MenuProps {
    children: ReactNode
    onClose: () => void
    open: boolean
}

export const Menu: FC<MenuProps> = ({ children, onClose, open }) => {
    return (
        <>
            {open &&
                <div
                    className='absolute  mt-10 left-30 bg-white p-4 rounded shadow'
                    style={{ zIndex: 1000 }}
                >
                    {children}
                    <button className='bg-slate-400 text-white px-4 py-2 rounded ' onClick={onClose}>
                        Cerrar
                    </button>
                </div>
            }
        </>
    )
}
