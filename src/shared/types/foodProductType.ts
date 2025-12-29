export interface FoodProductType {
    id: string;
    name: string;
    price: number;
    group_id: string
    order_id: number;
    is_active: boolean;
    created_at?: string;
    updated_at?: string
}