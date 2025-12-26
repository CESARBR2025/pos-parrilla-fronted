import { useFoodGroupList } from '../hooks/useFoodGroups';
import { FoodGroupGrid } from '../components/FoodGroupGrid';
import { FoodProductGrid } from '../../foodProduct/components/FoodProductGrid';
import { useFoodProductList } from '../../foodProduct/hooks/useFoodProduct';
import { useEffect, useState } from 'react';


export function Menu() {
  const { groups } = useFoodGroupList();
  const [selectGroupId, setSelectGroupId] = useState<string | null>(null)
  const {products, load, loading} = useFoodProductList(selectGroupId);
  
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
      <FoodProductGrid products={products} />
    )}
  </div>
      </section>
    </section>
  );
}
