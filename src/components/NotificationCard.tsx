import React, { FC } from 'react'

interface NotificationCardProps {
    text: string
    read: boolean
    onClick: () => void
}
export const NotificationCard: FC<NotificationCardProps> = ({ text, read, onClick }) => {
    return (
        <div className={`p-2 bg-${read ? 'cyan-100' : 'cyan-200'} rounded-md w-full flex flex-row items-center justify-between my-2 min-w-56 ${read ? 'hover:bg-cyan-200' : 'hover:bg-cyan-300'
            }`}
            onClick={onClick}>
            <img className='rounded-full w-10' src='Bubo.png' />
            <p className={`text-${read ? 'gray-400' : 'gray-600'}`}>{text}</p>
        </div>
    )
}
