import {
  IS_ACTIVE_SELECTED,
  IS_CONFIRMED_SELECTED,
  IS_DEATH_SELECTED,
  IS_RECOVERED_SELECTED,
} from "./HeaderType";

export const changeConfirmedStatus = () => {
  return {
    type: IS_CONFIRMED_SELECTED,
    payload: true,
  };
};
export const changeActiveStatus = () => {
  return {
    type: IS_ACTIVE_SELECTED,
    payload: true,
  };
};
export const changeRecoveredStatus = () => {
  return {
    type: IS_RECOVERED_SELECTED,
    payload: true,
  };
};

export const changeDeathStatus = () => {
  return {
    type: IS_DEATH_SELECTED,
    payload: true,
  };
};
