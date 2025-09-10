import { create } from "zustand";
// Use Zustand → when many components need to share the same data.

type CounterStore = {
    count: number;
    increment: () => void;
    incrementAsync: () => Promise<void>;
    decrement: () => void;

};

export const useCounterStore = create<CounterStore>((set) => ({
    count:0,
    increment: () => {
        set((state) => ({ count: state.count + 1 }));
    },
    incrementAsync: async () => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        set((state) => ({ count: state.count + 1 }));
    },

    decrement: () => {
        set((state) => ({ count: state.count - 1 }));
    },
}));