import { create } from "zustand";
import { persist } from "zustand/middleware";
const todoStore = (set:any) => ({
  user: null,
  data: [],
  addUser: (data : any) => {
    set({ user: data });
  },
  removeUser: () => {
    set({ user: null });
  },
  fetchData: (dat:any)=>{
    set(({data:dat}))
  }
});

const useTodoStore = create(persist(todoStore, { name: "zustTodoo" }));

export default useTodoStore;

