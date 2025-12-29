import { useFoodGroupList } from '../hooks/useFoodGroups';
import { FoodGroupGrid } from '../components/FoodGroupGrid';
import { FoodProductGrid } from '../../foodProduct/components/FoodProductGrid';
import { useFoodProductList } from '../../foodProduct/hooks/useFoodProduct';
import { useEffect, useState } from 'react';
import type { FoodProductType } from '../../../shared/types/foodProductType';
import { OrderPreview } from './OrderPreview';
//Modelo de la comanda
export interface OrderItem {
  productId: string
  name: string;
  price: number;
  quantity: number;
}


export function Menu() {
  const { groups } = useFoodGroupList();
  const [selectGroupId, setSelectGroupId] = useState<string | null>(null)
  const {products, load, loading} = useFoodProductList(selectGroupId);

  //Array de comanda
  const [comandaItems, setComandaItems] = useState<OrderItem[]>([])

  useEffect(() => {
    if(groups.length > 0 && !selectGroupId) {
      setSelectGroupId(groups[0].id)
    }
  }, [groups])


  useEffect(() => {
    if(selectGroupId) {
      
      load(selectGroupId)
    }
  }, [selectGroupId])

  //Funcion para agregar producto
  const addProduct = (product: FoodProductType) => {
    setComandaItems(prev => {
      const existing = prev.find(p => p.productId === product.id)

      if (existing) {
        return prev.map(p => 
          p.productId === product.id
          ? { ...p, quantity: p.quantity + 1}
          : p
        )
      }
      return [
        ...prev,
        {
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        }
      ]
    })
  }

  //Funcion para eliminar elemento
  const removeProduct = (productId: string) => {
    setComandaItems(prev =>
      prev
        .map(p =>
          p.productId === productId
            ? { ...p, quantity: p.quantity - 1 }
            : p
        )
        .filter(p => p.quantity > 0)
    )
}
  


 

  return (
    <section className="flex flex-col">
      <header className="w-full p-4">
        <h1 className="font-bold text-gray-700 text-xl">Explorar Categorias</h1>
      </header>
      <div className="flex-1">
        <FoodGroupGrid groups={groups} onSelect={setSelectGroupId} />
      </div>

      <section className="flex flex-col">
        <header className="p-4">
          <h1 className="text-xl font-bold text-gray-700">Alimentos</h1>
        </header>
       <div>
    {loading && <p>Cargando productos...</p>}

    {!loading && products.length === 0 && (
      <p>No hay productos para esta categoría</p>
    )}

    {!loading && products.length > 0 && (
      <FoodProductGrid products={products} orderItems={comandaItems} onAdd={addProduct} onRemove={removeProduct} />
    )}
  </div>
      </section>


    <section>

    </section>
    <OrderPreview items={comandaItems} />
    </section>

    
  );
}
