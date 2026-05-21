"use client";
import { useNotificationStore } from "@/lib/zustand/notificationStore";
import { useRef } from "react";

export default function NotificationsForm() {
    const inputRef = useRef<HTMLInputElement>(null);
    const addNotification = useNotificationStore((s) => s.addNotification);
    function pushNotification() {
        console.log("Notificacion enviada!")
        console.log(inputRef.current!.value);
        addNotification(inputRef.current!.value);
    }

    return (
        <div>
            <h2>Notificaciones!</h2>
            <input type="text" placeholder="Escribe la notificación" className="input" ref={inputRef} />
            <button className="btn btn-primary" onClick={pushNotification}>Enviar!</button>
        </div>
    )
}