import type { OrderItem } from "./Menu";

interface OrderPreviewProps {
    items: OrderItem[]
    onAdd?: (productId: string) => void
    onRemove?: (productId: string) => void
}

export function OrderPreview ( {items, onAdd, onRemove}: OrderPreviewProps) {

    
    const total = items.reduce(
      
        (acc, item) => acc + item.price * item.quantity, 0
    )

    const tip = total  * 0.10

    const totalAll = total + tip
    

    console.log(total)
    return (
         <div className="w-full bg-white border rounded p-4">
      
      <div className="flex justify-between">
<h2 className="font-semibold text-lg mb-3">Producto</h2>
      <h2 className="font-semibold text-lg mb-3">Cantidad</h2>

      </div>
      
      {items.length === 0 && (
        <p className="text-gray-400 text-sm">
          No hay productos agregados
        </p>
      )}

      

      <div className="space-y-2">
        {items.map(item => (
          <div
            key={item.productId}
            className="flex justify-between items-center"
          >
            <div>
              <p className="text-sm font-medium">
              {item.name}
              </p>
              <p className="text-xs text-gray-500">
                ${item.price} c/u
              </p>
            </div>

            <div className="flex items-center gap-2">
              {onRemove && (
                <button
                  onClick={() => onRemove(item.productId)}
                  className="px-2 bg-gray-200 rounded"
                >
                  -
                </button>
              )}

              <span className="font-semibold">
                x {( item.quantity)} pz
              </span>

              {onAdd && (
                <button
                  onClick={() => onAdd(item.productId)}
                  className="px-2 bg-gray-800 text-white rounded"
                >
                  +
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <hr className="my-4" />

      <div className="flex justify-between font-semibold text-lg">
        <span>Subtotal</span>
        <span>${total.toFixed(2)}</span>
        
      </div>
    <div className="flex justify-between font-semibold text-lg">
        <span>Servicio</span>
        <span>10%</span>
        
      </div>
    
    <div className="flex justify-between font-semibold text-lg">
        <span>Total</span>
        <span>${totalAll.toFixed(2)}</span>
        
      </div>
    
    </div>
    )


}