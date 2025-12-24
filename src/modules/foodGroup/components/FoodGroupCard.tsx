import type { FoodGroupType } from '../../../shared/types/foodGroupType';
interface FoodGroupCardProps {
  group: FoodGroupType;
}

export function FoodGroupCard({ group }: FoodGroupCardProps) {
  return (
    <div
      className="
      group
        rounded-lg
        bg-white
        flex justify-center items-center
        cursor-pointer
        p-2
        
        border
        border-transparent
        hover:border-orange-400

        
        transition-colors duration-200 ease-in-out
        hover:bg-[#FDEEEB]
        
        
        
        
        "
    >
      <h1
        className="font-bold
        text-sm
       group-hover:text-orange-400 
       
       text-gray-600"
      >
        {group.name}
      </h1>
    </div>
  );
}
