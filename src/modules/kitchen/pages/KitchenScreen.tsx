import { useKitchenWS } from "../../../hooks/useKitchenWS"

export function KitchenScreen() {
    const orders = useKitchenWS()

return (
    <div className="p-4">
        <h1>Cocina</h1>
        {orders.map(order => (
            <div key={order.id} className="border p-3 mb-2">
                <div>Mesa: {order.table_id}</div>
                <div>{order.product_name}</div>
                <div>Cantidad: {order.quantity}</div>
                {order.notes && <div> Notas: {order.notes}</div>}
            </div>
        ))}
    </div>
)
    
}