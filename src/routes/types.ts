export type RootMainParamList = {
  WORKOUT: {
    weekId: string | number;
    workoutId: string | number;
  };
  INDEX: undefined,
  WEEK: { id: string | number };
}

export type RootStackParamList = {
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
};

export type RootRoutesParamList  = RootStackParamList & RootMainParamList