import { useEffect, useState } from "react";

export function useKitchenWS() {
    const [orders, setOrders] = useState<any[]>([])

    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8000/ws/kitchen")

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data)

            if(data.type === "KITCHEN_ORDER_CREATED") {
                setOrders(prev => [data.payload, ...prev])
            }
        }

        ws.onerror = (e) => {
            console.error("WS error", e)
        }

        return () => ws.close()
    }, [])

    return orders
}