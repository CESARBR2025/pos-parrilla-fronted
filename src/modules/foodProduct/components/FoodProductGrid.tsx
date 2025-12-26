import { FoodProductCard } from "./FoodProductCard";
import type { FoodProductType } from "../../../shared/types/foodProductType";

interface FoodProductProps {
    products: FoodProductType[]
}

export function FoodProductGrid( {products} : FoodProductProps) {
    return (
        <div className="grid grid-cols-6 gap-4">
            {products.map((producto) => (
                <FoodProductCard key={producto.id} product={producto} />
            ))}
        </div>
    )
}