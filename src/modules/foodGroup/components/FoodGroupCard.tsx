import type { FoodGroupType } from "../../../shared/types/foodGroupType"
interface FoodGroupCardProps {
    group: FoodGroupType
}


export function FoodGroupCard ({group} : FoodGroupCardProps) {



    
    return(
<div className="
rounded-full
bg-gray-700
flex justify-center items-center
p-2
w-sx
cursor-pointer
transition-colors duration-200 ease-in-out
hover:bg-[#FF4500]
hover:text-white
truncate
">
<h1 className="font-semibold text-gray-100">{group.name}</h1>
        
</div>
    
    )
}