import { createAction } from 'redux-actions';
import { IHabit, IHabitStateContext } from './context';

export enum HabitActionEnum{
    getHabitsPending = 'GET_HABITS_PENDING',
    getHabitsSuccess = 'GET_HABITS_SUCCESS',
    getHabitsError = 'GET_HABITS_ERROR',

    getHabitPending = 'GET_HABIT_PENDING',
    getHabitSuccess = 'GET_HABIT_SUCCESS',
    getHabitError = 'GET_HABIT_ERROR',

    createHabitPending = 'CREATE_HABIT_PENDING',
    createHabitSuccess = 'CREATE_HABIT_SUCCESS',
    createHabitError = 'CREATE_HABIT_ERROR',

    updateHabitPending = 'UPDATE_HABIT_PENDING',
    updateHabitSuccess = 'UPDATE_HABIT_SUCCESS',
    updateHabitError = 'UPDATE_HABIT_ERROR',

    deleteHabitPending = 'DELETE_HABIT_PENDING',
    deleteHabitSuccess = 'DELETE_HABIT_SUCCESS',
    deleteHabitError = 'DELETE_HABIT_ERROR',
}


export const getHabitsPending = createAction<Partial<IHabitStateContext>>(
    HabitActionEnum.getHabitsPending,
    () => ({ isPending: true, isError: false, isSuccess: false }));

export const getHabitsSuccess = createAction<IHabitStateContext,IHabit[]>(
    HabitActionEnum.getHabitsSuccess,
    (habits: IHabit[]) => ({ isPending: false, isError: false, isSuccess: true, habits }));

export const getHabitsError = createAction<Partial<IHabitStateContext>>(
    HabitActionEnum.getHabitsError,
    () => ({ isPending: false, isError: true, isSuccess: false }));

export const getHabitPending = createAction<Partial<IHabitStateContext>>(
    HabitActionEnum.getHabitPending,
    () => ({ isPending: true, isError: false, isSuccess: false }));

export const getHabitSuccess = createAction<Partial<IHabitStateContext>, IHabit>(
    HabitActionEnum.getHabitSuccess,
    (habit: IHabit) => ({ isPending: false, isError: false, isSuccess: true, habit }));

export const getHabitError = createAction<Partial<IHabitStateContext>>(
    HabitActionEnum.getHabitError,
    () => ({ isPending: false, isError: true, isSuccess: false }));

export const createHabitPending = createAction<Partial<IHabitStateContext>>(
    HabitActionEnum.createHabitPending,
    () => ({ isPending: true, isError: false, isSuccess: false }));

export const createHabitSuccess = createAction<Partial<IHabitStateContext>, IHabit>(
    HabitActionEnum.createHabitSuccess,
    (habit: IHabit) => ({ isPending: false, isError: false, isSuccess: true, habit }));

export const createHabitError = createAction<Partial<IHabitStateContext>>(
    HabitActionEnum.createHabitError,
    () => ({ isPending: false, isError: true, isSuccess: false }));

export const updateHabitPending = createAction<Partial<IHabitStateContext>>(
    HabitActionEnum.updateHabitPending,
    () => ({ isPending: true, isError: false, isSuccess: false }));

export const updateHabitSuccess = createAction<Partial<IHabitStateContext>, IHabit>(
    HabitActionEnum.updateHabitSuccess,
    (habit: IHabit) => ({ isPending: false, isError: false, isSuccess: true, habit })); 

export const updateHabitError = createAction<Partial<IHabitStateContext>>(
    HabitActionEnum.updateHabitError,
    () => ({ isPending: false, isError: true, isSuccess: false }));

export const deleteHabitPending = createAction<Partial<IHabitStateContext>>(
    HabitActionEnum.deleteHabitPending,
    () => ({ isPending: true, isError: false, isSuccess: false }));

export const deleteHabitSuccess = createAction<Partial<IHabitStateContext>>(
    HabitActionEnum.deleteHabitSuccess,
    () => ({ isPending: false, isError: false, isSuccess: true }));

export const deleteHabitError = createAction<Partial<IHabitStateContext>>(
    HabitActionEnum.deleteHabitError,
    () => ({ isPending: false, isError: true, isSuccess: false }));

