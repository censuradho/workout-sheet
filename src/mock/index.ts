import { addDays, addWeeks } from "date-fns";

const firstDay = new Date('2022-05-23T16:26:47.801Z')

interface Week {
  label: string,
  date: string | Date
}

interface Data {
  label: string,
  date: string | Date
  week: Record<string, Week>
}

export const data: Record<string, Data> = {
  'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba': {
    label: 'First Week',
    date: firstDay,
    week: {
      'a8656e0a-9811-469b-892a-89484ba0b636': {
        date: firstDay,
        label: 'Workout 1'
      },
      '26e84a82-2450-49e2-9398-9d2bf976c389': {
        date: addDays(firstDay, 1),
        label: 'Workout 2'
      },
      'a0fd3fd9-b256-4c01-a01c-62a90620c3a9': {
        date: addDays(firstDay, 2),
        label: 'Workout 3'
      },
      '6839b90d-3c26-428d-8f1a-c95a7ab445d0': {
        date: addDays(firstDay, 3),
        label: 'Workout 4'
      },
      '4b1c586a-e675-4d3e-8e65-c27ef6b2ebbc': {
        date: addDays(firstDay, 4),
        label: 'Workout 5'
      }
    }
  },
  '3ac68afc-c605-48d3-a4f8-fbd91aa97f63': {
    label: 'Second Week',
    date: addWeeks(firstDay, 1),
    week: {
      '26e84a82-2450-49e2-9398-9d2bf976c389': {
        date: addWeeks(firstDay, 1),
        label: 'Workout'
      }
    }
  },
}