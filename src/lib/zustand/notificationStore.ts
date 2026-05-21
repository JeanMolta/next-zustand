import { create } from "zustand";

export type Notification = { //Información de cada notificación
    id: number;
    title: string;
    read: boolean;
    sentAt: string;
}

export type NotificationStore = {
    notifications: Notification[]; //Estado actual de notificaciones (aqui se guardan)
    addNotification: (title: string) => void;
    markAllRead: () => void;
}

export const useNotificationStore = create<NotificationStore>()((set) => ({
    notifications: [{ id: 1, title: "Notificación por defecto", read: true, sentAt: "--:--" }],
    addNotification: (title:string) => 
        set((state) => ({
            notifications: [
                {
                    id: state.notifications.length + 1,
                    title,
                    read: false,
                    sentAt: new Date().toLocaleTimeString("es-ES", {
                        hour: "2-digit",
                        minute: "2-digit",
                    }),
                },
                 ...state.notifications
            ]
        })),
    markAllRead: () =>
        set((state) => (
            {
                notifications: state.notifications.map((n) => ({ ...n, read: true }))
            }
        ))
}));
