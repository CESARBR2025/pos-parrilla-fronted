export interface FoodProductType {
    id: string;
    name: string;
    group_id: string
    order_id: number;
    is_active: boolean;
    created_at?: string;
    updated_at?: string
}