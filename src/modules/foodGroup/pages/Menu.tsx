import { useFoodGroupList } from '../hooks/useFoodGroups';
import type { FoodGroupType } from '../../../shared/types/foodGroupType';
import { FoodGroupGrid } from '../components/FoodGroupGrid';



export function Menu() {
  const { groups } = useFoodGroupList();
  

  return (
    <div>
      <FoodGroupGrid groups={groups} />
      
    </div>
  );
}
