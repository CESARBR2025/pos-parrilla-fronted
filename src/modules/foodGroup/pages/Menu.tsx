import { useFoodGroupList } from '../hooks/useFoodGroups';
import { FoodGroupGrid } from '../components/FoodGroupGrid';

export function Menu() {
  const { groups } = useFoodGroupList();

  return (
    <section className="flex flex-col">
      <header className="w-full p-4">
        <h1 className="font-bold text-gray-700 text-xl">Explorar Categorias</h1>
      </header>
      <div className="flex-1">
        <FoodGroupGrid groups={groups} />
      </div>

      <section className="flex flex-col">
        <header className="p-4">
          <h1 className="text-xl font-bold text-gray-700">Alimentos</h1>
        </header>
        <div>
          <FoodGroupGrid groups={groups} />
        </div>
      </section>
    </section>
  );
}
