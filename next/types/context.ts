export enum ActionType {
  UPDATE_PAGE_TAB,
}

export type Action = {
  type: ActionType.UPDATE_PAGE_TAB;
  payload: number;
};

export type State = {
  pageTab: number;
};
