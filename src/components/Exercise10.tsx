import React, { useState } from 'react'
import { NotificationCard } from './NotificationCard'
import { Menu } from './Menu'

enum TypeNotification {
    comentario = 'comentario',
    like = 'like',
    etiquetado = 'etiquetado',
    publicacionCompartida = 'publicacionCompartida',
    teAgregron = 'teaAgregaron'
}

interface Notification {
    id: number
    type: TypeNotification
    text: string
    read: boolean
}

const notificaciones: Notification[] = [
    {
        id: 1,
        type: TypeNotification.comentario,
        text: 'Bubo te hizo un comentario ',
        read: false
    },
    {
        id: 2,
        type: TypeNotification.like,
        text: 'Bubo te dio like ',
        read: false
    },
    {
        id: 3,
        type: TypeNotification.etiquetado,
        text: 'Bubo te ha etiquetado ',
        read: false
    },
    {
        id: 4,
        type: TypeNotification.publicacionCompartida,
        text: 'Bubo compartio tu publicacion ',
        read: false
    },
    {
        id: 5,
        type: TypeNotification.teAgregron,
        text: 'Buba te agrego como amigo',
        read: false
    }
]

export const Exercise10 = () => {
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [allNotifications, setAllNotifications] = useState<Notification[]>(notificaciones)

    const onCloseModal = () => {
        setOpenModal(false)
    }

    const handleNotification = () => {
        setOpenModal(!openModal)
    }

    const handleClick = () => {

    }
    return (
        <div className='p-2'>
            <button className='bg-blue-500 text-white px-4 py-2 rounded' onClick={handleNotification}>Notificaciones</button>

            <Menu onClose={onCloseModal} open={openModal}>
                {allNotifications.map((notificacion) =>
                    <NotificationCard
                        key={notificacion.id}
                        text={notificacion.text}
                        read={notificacion.read}
                        onClick={handleClick}
                    />)}
            </Menu >

        </div>
    )
}
