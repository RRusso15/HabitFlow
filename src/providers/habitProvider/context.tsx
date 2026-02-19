import { createContext } from "react";

export interface IHabit {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}


export interface IHabitStateContext{
    isPending: boolean;
    isError: boolean;
    isSuccess: boolean;
    habit?: IHabit;
    habits: IHabit[];
}

export interface IHabitActionContext{
    getHabits: () => void;
    getHabit: (id: number) => void;
    createHabit: (habit: IHabit) => void;
    updateHabit: (habit: IHabit) => void;
    deleteHabit: (id: number) => void;
}

export const INITIAL_STATE: IHabitStateContext = {
    isPending: false,
    isError: false,
    isSuccess: false,
    habits: [],
    habit: undefined,
};

export const HabitStateContext = createContext<IHabitStateContext>(INITIAL_STATE);
export const HabitActionContext = createContext<IHabitActionContext>(undefined);