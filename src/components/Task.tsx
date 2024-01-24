import React, { FC, ReactNode } from 'react'
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";

interface TaskProps {
    children: ReactNode
    handleClick: () => void
    isOpen: boolean
    numberTask: number
}

export const Task: FC<TaskProps> = ({ children, handleClick, isOpen, numberTask }) => {
    return (
        <>
            <div className="w-full bg-slate-600 rounded-md p-2 flex flex-row justify-between items-center">
                <p>Ejercicio {numberTask}</p>

                {isOpen ?
                    <FiChevronUp onClick={handleClick} />
                    :
                    <FiChevronDown onClick={handleClick} />
                }
            </div>
            {isOpen &&
                <div className='p-1 ml-4 mr-4 bg-slate-400 rounded-md'>
                    {children}
                </div>}
        </>
    )
}
