import React, { FC, ReactNode } from 'react'

interface ModalProps {
    children: ReactNode
    onClose: () => void
    open: boolean
}

export const MenuModal: FC<ModalProps> = ({ children, onClose, open }) => {
    return (
        <>
            {open &&
                <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-70'>
                    <div className='bg-white p-8 rounded'>
                        {children}
                        <button className='mt-4 bg-blue-500 text-white px-4 py-2 rounded' onClick={onClose} >
                            Cerrar
                        </button>
                    </div>
                </div>
            }
        </>
    )
}
