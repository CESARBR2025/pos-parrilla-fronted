//Servicio que enviar orden completa a pantalla de cocina

export async function sendToKitchen(payload: {
    table_id: number
    product_id: string
    product_name: string
    quantity: number
    notes?: string
}) {
    const res = await fetch("http://127.0.0.1:8000/kitchen/orders", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(payload),
    })
    if(!res.ok) {
        throw new Error("Error al enviar a cocina")
    }

    return res.json()
}