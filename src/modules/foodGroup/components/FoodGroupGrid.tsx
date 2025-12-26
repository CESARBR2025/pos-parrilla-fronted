import { FoodGroupCard } from './FoodGroupCard';
import type { FoodGroupType } from '../../../shared/types/foodGroupType';

interface FoodGroupProps {
  groups: FoodGroupType[];
  onSelect: (group_id: string) => void;
}

export function FoodGroupGrid({ groups, onSelect}: FoodGroupProps) {
  return (
    <div
      className="grid grid-cols-6 gap-4
p-4 
"
    >
      {groups.map((group) => (
        <FoodGroupCard key={group.id} group={group} onSelect={onSelect} />
      ))}
    </div>
  );
}
