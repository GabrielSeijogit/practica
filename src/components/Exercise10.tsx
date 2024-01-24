import React, { useState } from "react";
import { NotificationCard } from "./NotificationCard";
import { Menu } from "./Menu";

enum TypeNotification {
  comentario = "comentario",
  like = "like",
  etiquetado = "etiquetado",
  publicacionCompartida = "publicacionCompartida",
  teAgregron = "teAgregaron",
}

interface Notification {
  id: number;
  type: TypeNotification;
  text: string;
  read: boolean;
}

const notificaciones: Notification[] = [
  {
    id: 1,
    type: TypeNotification.comentario,
    text: "Bubo te hizo un comentario ",
    read: false,
  },
  {
    id: 2,
    type: TypeNotification.like,
    text: "Bubo te dio like ",
    read: false,
  },
  {
    id: 3,
    type: TypeNotification.etiquetado,
    text: "Bubo te ha etiquetado ",
    read: false,
  },
  {
    id: 4,
    type: TypeNotification.publicacionCompartida,
    text: "Bubo compartio tu publicacion ",
    read: false,
  },
  {
    id: 5,
    type: TypeNotification.teAgregron,
    text: "Buba te agrego como amigo",
    read: false,
  },
];

export const Exercise10 = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [allNotifications, setAllNotifications] =
    useState<Notification[]>(notificaciones);

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const handleNotification = () => {
    setOpenModal(!openModal);
  };

  const notificationActions = {
    like: () => alert("Bubo ha dado like a tu foto"),
    comentario: () => alert("Tienes un nuevo comentario de Bubo"),
    etiquetado: () => alert("te han etiquetado en una foto"),
    publicacionCompartida: () => alert("Bubo ha compartido tu publicacion"),
    teAgregaron: () => alert("Bubo y tú ahora son amigos"),
  };

  const handleClick = (index: number, type: TypeNotification) => {
    // if(type === TypeNotification.like){
    //     alert('Bubo ha dado like a tu foto')
    // }else if(type === TypeNotification.comentario){
    //     alert('Tienes un nuevo comentario de Bubo')
    // }else if (type === TypeNotification.etiquetado){
    //     alert('te han etiquetado en una foto')
    // }else if (type === TypeNotification.publicacionCompartida){
    //     alert('Bubo ha compartido tu publicacion')
    // }else if (type === TypeNotification.teAgregron){
    //     alert('Bubo y tú ahora son amigos')
    // }

    // switch (type) {
    //   case TypeNotification.like:
    //     alert("Bubo ha dado like a tu foto");
    //     break;
    //   case TypeNotification.comentario:
    //     alert("Tienes un nuevo comentario de Bubo");
    //     break;
    //   case TypeNotification.etiquetado:
    //     alert("te han etiquetado en una foto");
    //     break;
    //   case TypeNotification.publicacionCompartida:
    //     alert("Bubo ha compartido tu publicacion");
    //     break;
    //   case TypeNotification.teAgregron:
    //     alert("Bubo y tú ahora son amigos");
    // }

    notificationActions[type]()

    const newState = { ...allNotifications[index], read: true };

    setAllNotifications((prev) => {
      const newNotifications = [...prev];
      newNotifications[index] = newState;
      return newNotifications;
    });
  };

  return (
    <div className="p-2">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleNotification}
      >
        Notificaciones
      </button>

      <Menu onClose={onCloseModal} open={openModal}>
        {allNotifications.map((notificacion, index) => (
          <NotificationCard
            key={notificacion.id}
            text={notificacion.text}
            read={notificacion.read}
            onClick={() => handleClick(index, notificacion.type)}
          />
        ))}
      </Menu>
    </div>
  );
};
