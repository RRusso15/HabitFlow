import {getAxiosInstance} from '../../utils/axiosInstance';
import { INITIAL_STATE, IHabit, HabitActionContext, HabitStateContext } from './context';
import { HabitReducer } from './reducer';
import { useContext, useReducer } from 'react';
import { getHabitsPending, getHabitsSuccess, getHabitsError, getHabitPending, getHabitSuccess, getHabitError, createHabitPending, createHabitSuccess, createHabitError, updateHabitPending, updateHabitSuccess, updateHabitError, deleteHabitPending, deleteHabitSuccess, deleteHabitError } from './actions';
import axios from 'axios';

export const HabitProvider=({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(HabitReducer, INITIAL_STATE);
    const instance = getAxiosInstance();
    
    const getHabits = async () => {
        dispatch(getHabitsPending());
        const endpoint = '/todos?_limit=10';
        await instance.get<IHabit[]>(endpoint)
            .then(response => dispatch(getHabitsSuccess(response.data)))
            .catch(error => dispatch(getHabitsError()));
    };

    const getHabit = async (id: number) => {
        dispatch(getHabitPending());
        const endpoint = `/todos/${id}`;
        await instance.get<IHabit>(endpoint)
            .then(response => dispatch(getHabitSuccess(response.data)))
            .catch(error => dispatch(getHabitError()));
    };

    const createHabit = async (habit: IHabit) => {
        dispatch(createHabitPending());
        const endpoint = '/todos';
        await instance.post<IHabit>(endpoint, habit)
            .then(response => dispatch(createHabitSuccess(response.data)))
            .catch(error => dispatch(createHabitError()));
    };

    const updateHabit = async (habit: IHabit) => {
        dispatch(updateHabitPending());
        const endpoint = `/todos/${habit.id}`;
        await instance.put<IHabit>(endpoint, habit)
            .then(response => dispatch(updateHabitSuccess(response.data)))
            .catch(error => dispatch(updateHabitError()));
    };

    const deleteHabit = async (id: number) => {
        dispatch(deleteHabitPending());
        const endpoint = `/todos/${id}`;
        await instance.delete(endpoint)
            .then(response => dispatch(deleteHabitSuccess()))
            .catch(error => dispatch(deleteHabitError()));
    };

    return (
        <HabitStateContext.Provider value={state}>
            <HabitActionContext.Provider value={{ getHabits, getHabit, createHabit, updateHabit, deleteHabit }}>
                {children}
            </HabitActionContext.Provider>
        </HabitStateContext.Provider>
    );
}

export const useHabitState = () => {
    const context=useContext(HabitStateContext);
    if(context===undefined){
        throw new Error('useHabitState must be used within a HabitProvider');
    };
    return context;
};

export const useHabitActions = () => {
    const context=useContext(HabitActionContext);
    if(context===undefined){
        throw new Error('useHabitActions must be used within a HabitProvider');
    };
    return context;
};