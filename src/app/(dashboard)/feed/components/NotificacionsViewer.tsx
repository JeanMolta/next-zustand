"use client";

import { useNotificationStore } from "@/lib/zustand/notificationStore";
import { useState } from "react";

export default function NotificationsViewer() {
    const [open, setOpen] = useState(false);
    const notifications = useNotificationStore((s) => s.notifications);
    const markAllRead = useNotificationStore((s) => s.markAllRead);
    
    return (
        <div className="relative">
            <button className="btn btn-ghost" onClick={() => setOpen(!open)}>
                Notificaciones
            </button>
            {
                open && (
                    <div className="absolute right-0 top-full mt-2 card bg-white shadow-lg p-8 min-w-8 z-10">
                        <div className="mb-2 flex justify-end">
                            <button onClick={() => setOpen(false)} className="btn btn-sm btn-ghost">
                                Cerrar
                            </button>
                        </div>
                        <button onClick={markAllRead} className="btn btn-sm btn-primary mb-2"> 
                            Marcar todas como leídas
                        </button>
                        {
                            notifications.map((n) => (
                                <div key={n.id} className="w-48">
                                    <p>{n.title} {n.read && "/ Leido"}</p>
                                    <p className="text-xs text-base-content/60">Enviada a las {n.sentAt}</p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}