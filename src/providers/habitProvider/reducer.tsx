import { handleActions } from "redux-actions";
import { INITIAL_STATE, IHabitStateContext } from "./context";
import { HabitActionEnum } from "./actions";

export const HabitReducer = handleActions<IHabitStateContext, Partial<IHabitStateContext>>(
    {
        [HabitActionEnum.getHabitsPending]: (state, action) => ({ ...state, ...action.payload }),
        [HabitActionEnum.getHabitsSuccess]: (state, action) => ({ ...state, ...action.payload }),
        [HabitActionEnum.getHabitsError]: (state, action) => ({ ...state, ...action.payload }),

        [HabitActionEnum.getHabitPending]: (state, action) => ({ ...state, ...action.payload }),
        [HabitActionEnum.getHabitSuccess]: (state, action) => ({ ...state, ...action.payload }),
        [HabitActionEnum.getHabitError]: (state, action) => ({ ...state, ...action.payload }),

        [HabitActionEnum.createHabitPending]: (state, action) => ({ ...state, ...action.payload }),
        [HabitActionEnum.createHabitSuccess]: (state, action) => ({ ...state, ...action.payload }),
        [HabitActionEnum.createHabitError]: (state, action) => ({ ...state, ...action.payload }),

        [HabitActionEnum.updateHabitPending]: (state, action) => ({ ...state, ...action.payload }),
        [HabitActionEnum.updateHabitSuccess]: (state, action) => ({ ...state, ...action.payload }),
        [HabitActionEnum.updateHabitError]: (state, action) => ({ ...state, ...action.payload }),

        [HabitActionEnum.deleteHabitPending]: (state, action) => ({ ...state, ...action.payload }),
        [HabitActionEnum.deleteHabitSuccess]: (state, action) => ({ ...state, ...action.payload }),
        [HabitActionEnum.deleteHabitError]: (state, action) => ({ ...state, ...action.payload }),
    },
    INITIAL_STATE);