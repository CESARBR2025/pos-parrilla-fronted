import { useFoodGroupList } from '../hooks/useFoodGroups';
import type { FoodGroupType } from '../../../shared/types/foodGroupType';
export function Menu() {
  const { groups } = useFoodGroupList();
  console.log('groups:', groups);

  return (
    <div>
      <h1>Grupos cargados</h1>
      <ul>
        {groups?.map((group: FoodGroupType) => (
          <li key={group.id}>{group.name}</li>
        ))}
      </ul>
    </div>
  );
}
