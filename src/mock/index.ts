import { addDays, addWeeks } from "date-fns";

export const months = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    label: 'First Week',
    date: new Date(),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    label: 'Second Week',
    date: addWeeks(new Date(), 1),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    label: 'Third Week',
    date: addWeeks(new Date(), 2),
  },
]