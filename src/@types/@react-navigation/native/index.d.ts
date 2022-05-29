import { RootRoutesParamList } from "src/routes/types";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootRoutesParamList {}
  }
}