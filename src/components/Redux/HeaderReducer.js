import {
  IS_ACTIVE_SELECTED,
  IS_CONFIRMED_SELECTED,
  IS_DEATH_SELECTED,
  IS_RECOVERED_SELECTED,
} from "./HeaderType";

const intialState = {
  isConfirmedSelect: true,
  isActiveSelected: false,
  isRecoveredSelected: false,
  isDeathSelected: false,
};

const HeaderReducer = (state = intialState, action) => {
  switch (action.type) {
    case IS_CONFIRMED_SELECTED:
      return {
        isConfirmedSelect: true,
        isActiveSelected: false,
        isRecoveredSelected: false,
        isDeathSelected: false,
      };
    case IS_ACTIVE_SELECTED:
      return {
        isConfirmedSelect: false,
        isActiveSelected: true,
        isRecoveredSelected: false,
        isDeathSelected: false,
      };
    case IS_RECOVERED_SELECTED:
      return {
        isConfirmedSelect: false,
        isActiveSelected: false,
        isRecoveredSelected: true,
        isDeathSelected: false,
      };
    case IS_DEATH_SELECTED:
      return {
        isConfirmedSelect: false,
        isActiveSelected: false,
        isRecoveredSelected: false,
        isDeathSelected: true,
      };
    default:
      return state;
  }
};

export default HeaderReducer;
