import type { FoodProductType } from "../../../shared/types/foodProductType";
interface FoodProductCardProps {
    product: FoodProductType
    quantity: number
    onAdd: () => void
    onRemove: () => void
}

export function FoodProductCard({ product, quantity, onAdd, onRemove }: FoodProductCardProps) {
    return (
       <div className="border rounded p-3">
      <h3 className="font-semibold">{product.name}</h3>
      <p>${product.price}</p>

      <div className="flex items-center gap-2 mt-2">
        <button
          onClick={onRemove}
          disabled={quantity === 0}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          -
        </button>

        <span className="w-6 text-center">{quantity}</span>

        <button
          onClick={onAdd}
          className="px-2 py-1 bg-gray-800 text-white rounded"
        >
          +
        </button>
      </div>
    </div>
    
    )
}