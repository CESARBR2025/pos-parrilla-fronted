import type { FoodProductType } from "../../../shared/types/foodProductType";
interface FoodProductCardProps {
    product: FoodProductType
}

export function FoodProductCard({ product}: FoodProductCardProps) {
    return (
        <div>
            <h1>{product.name}</h1>
        </div>
    )
}