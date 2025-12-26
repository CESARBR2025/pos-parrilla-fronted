import { useEffect, useState } from "react";
import type { FoodProductType } from "../../../shared/types/foodProductType";
import { fetchProduct } from "../api/foodProductApi";

export function useFoodProductList(group_id: string | null) {
    const [products, setProducts] = useState<FoodProductType[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    async function load(groupId: string) {
        try {
            setLoading(true)
            const data = await fetchProduct(groupId)
            setProducts(data)
        } catch (err) {
            setError("No se pudieron cargar los productos")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!group_id) return
        load(group_id)
    }, [group_id])

    return { products, load, loading, error }
}