import { FoodProductCard } from "./FoodProductCard";
import type { FoodProductType } from "../../../shared/types/foodProductType";

export interface OrderItem {
  productId: string
  name: string;
  price: number;
  quantity: number;
}

interface FoodProductProps {
    products: FoodProductType[]
    orderItems: OrderItem[]
    onAdd : (product: FoodProductType) => void
    onRemove: (productId: string) => void
}

export function FoodProductGrid( {products, orderItems, onAdd, onRemove} : FoodProductProps) {
    const getQuantity = (productId: string) => {
    return orderItems.find(item => item.productId === productId)?.quantity ?? 0
  }

    return (
       <div className="grid grid-cols-6 gap-4">
      {products.map(producto => {
        const quantity = getQuantity(producto.id)

        return (
          <FoodProductCard
            key={producto.id}
            product={producto}
            quantity={quantity}
            onAdd={() => onAdd(producto)}
            onRemove={() => onRemove(producto.id)}
          />
        )
      })}
    </div>
    )
}