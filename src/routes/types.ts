export type RootStackParamList = {
  WEEK: { id: string | number };
  WELCOME: undefined,
  GENDER: undefined,
  WEIGHT: undefined,
  HEIGHT: undefined,
  GOALS: undefined,
  FIT_LEVEL: undefined,
  CHRONIC_PROBLEM: undefined,
  DONE: undefined,
  ACCOUNT: undefined,
  MAIN: undefined,
  WORKOUT: {
    weekId: string | number;
    workoutId: string | number;
  }
};