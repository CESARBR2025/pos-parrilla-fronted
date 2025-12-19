import { FoodGroupCard } from "./FoodGroupCard"
import type { FoodGroupType } from "../../../shared/types/foodGroupType"

interface FoodGroupProps {
    groups: FoodGroupType[];
}

export function FoodGroupGrid ({groups} : FoodGroupProps ) {
    return (
<div className="grid grid-cols-6 gap-4
mt-4
">
{
    groups.map((group) => (
        <FoodGroupCard  key={group.id} group={group}/>
    ))
}
</div>        
    )
}