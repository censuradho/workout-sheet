const onBoard = {
  WELCOME: 'WELCOME',
  GENDER: 'GENDER',
  WEIGHT: 'WEIGHT',
  HEIGHT: 'HEIGHT',
  GOALS: 'GOALS',
  FIT_LEVEL: 'FIT_LEVEL',
  CHRONIC_PROBLEM: 'CHRONIC_PROBLEM',
  DONE: 'DONE',
  ACCOUNT: 'ACCOUNT',
}

const publicRoutes = {
  SIGN_IN: 'SIGN_IN',
  ON_BOARD: onBoard
}

export const privateRoutes = {
  MAIN: 'MAIN',
  WEEK: 'WEEK'
}

export const routePaths = {
  public: publicRoutes,
  private: privateRoutes
}

export const allRoutes = {
  ...publicRoutes,
  ...privateRoutes,
  ...onBoard
}