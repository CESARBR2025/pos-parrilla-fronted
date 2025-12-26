const BASE_URL = 'http://127.0.0.1:8000/foodproducts';

export async function fetchProduct(group_id: string) {
    
    const res = await fetch(`${BASE_URL}/${group_id}/product`)
    
    return res.json();
}
