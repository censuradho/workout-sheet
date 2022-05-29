import { addDays, addWeeks } from "date-fns";

const firstDay = new Date('2022-05-23T16:26:47.801Z')

export interface Exercise {
  label: string;
  description?: string;
  series: number;
  thumb?: string;
  weight: number;
  rest: number
}

interface Week {
  label: string,
  date: string | Date;
  exercise?: Record<string, Exercise>
}

interface Data {
  label: string,
  date: string | Date
  workout: Record<string, Week>
}

export const data: Record<string, Data> = {
  'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba': {
    label: 'First Week',
    date: firstDay,
    workout: {
      'a8656e0a-9811-469b-892a-89484ba0b636': {
        date: firstDay,
        label: 'Workout 1',
        exercise: {
          '1c718942-e7bc-489b-8e74-897498637bc2': {
            label: 'ABS',
            description: 'max reps | 4series | rest 45 seconds',
            thumb: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            rest: 60,
            series: 4,
            weight: 150,
          },
          'c7ece2c2-2e2d-4f9e-aaa7-9717a893d38b': {
            label: 'Pull ups',
            description: 'max reps | rest 45 seconds',
            thumb: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            rest: 60,
            series: 4,
            weight: 150,
          }
        }
      },
      '26e84a82-2450-49e2-9398-9d2bf976c389': {
        date: addDays(firstDay, 1),
        label: 'Workout 2',
        exercise: {
          '1c718942-e7bc-489b-8e74-897498637bc2': {
            label: 'ABS',
            thumb: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            description: 'max reps | 4series | rest 45 seconds',
            rest: 60,
            series: 4,
            weight: 150,
          },
          'c7ece2c2-2e2d-4f9e-aaa7-9717a893d38b': {
            label: 'Pull ups',
            description: 'max reps | rest 45 seconds',
            thumb: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            rest: 60,
            series: 4,
            weight: 150,
          }
        }
      },
      'a0fd3fd9-b256-4c01-a01c-62a90620c3a9': {
        date: addDays(firstDay, 2),
        label: 'Workout 3',
        exercise: {
          '1c718942-e7bc-489b-8e74-897498637bc2': {
            label: 'ABS',
            description: 'max reps | 4series | rest 45 seconds',
            thumb: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            rest: 60,
            series: 4,
            weight: 150,
          },
          'c7ece2c2-2e2d-4f9e-aaa7-9717a893d38b': {
            label: 'Pull ups',
            description: 'max reps | rest 45 seconds',
            thumb: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            rest: 60,
            series: 4,
            weight: 150,
          }
        }
      },
      '6839b90d-3c26-428d-8f1a-c95a7ab445d0': {
        date: addDays(firstDay, 3),
        label: 'Workout 4',
        exercise: {
          '1c718942-e7bc-489b-8e74-897498637bc2': {
            label: 'ABS',
            description: 'max reps | 4series | rest 45 seconds',
            thumb: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            rest: 60,
            series: 4,
            weight: 150,
          },
          'c7ece2c2-2e2d-4f9e-aaa7-9717a893d38b': {
            label: 'Pull ups',
            description: 'max reps | rest 45 seconds',
            thumb: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            rest: 60,
            series: 4,
            weight: 150,
          }
        }
      },
      '4b1c586a-e675-4d3e-8e65-c27ef6b2ebbc': {
        date: addDays(firstDay, 4),
        label: 'Workout 5',
        exercise: {
          '1c718942-e7bc-489b-8e74-897498637bc2': {
            label: 'ABS',
            description: 'max reps | 4series | rest 45 seconds',
            thumb: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            rest: 60,
            series: 4,
            weight: 150,
          },
          'c7ece2c2-2e2d-4f9e-aaa7-9717a893d38b': {
            label: 'Pull ups',
            description: 'max reps | rest 45 seconds',
            thumb: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            rest: 60,
            series: 4,
            weight: 150,
          }
        }
      }
    }
  },
  '3ac68afc-c605-48d3-a4f8-fbd91aa97f63': {
    label: 'Second Week',
    date: addWeeks(firstDay, 1),
    workout: {
      '26e84a82-2450-49e2-9398-9d2bf976c389': {
        date: addWeeks(firstDay, 1),
        label: 'Workout',
        exercise: {
          '1c718942-e7bc-489b-8e74-897498637bc2': {
            label: 'ABS',
            description: 'max reps | 4series | rest 45 seconds',
            thumb: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            rest: 60,
            series: 4,
            weight: 150,
          },
          'c7ece2c2-2e2d-4f9e-aaa7-9717a893d38b': {
            label: 'Pull ups',
            description: 'max reps | rest 45 seconds',
            thumb: 'https://images.unsplash.com/photo-1517130038641-a774d04afb3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            rest: 60,
            series: 4,
            weight: 150,  
          }
        }
      }
    }
  },
}