import { createSlice } from "@reduxjs/toolkit";

export const unitSlice = createSlice({
  iterator: 1000000,
  name: "unit",
  initialState: {
    name: "Рекурсивная аналитика",
    containersCount: 6,
    containers: [
      {
        id: 1,
        name: "Главная страница",
        triggers: [
          {
            id: 0,
            element: { name: "div", id: "hello", className: "analytic" },
            event: "click",
          },
        ],
      },
      {
        id: 2,
        name: "Главная страница",
        triggers: [
          {
            id: 1,
            element: { name: "div", id: "hello", className: "analytic" },
            event: "click",
          },
        ],
      },
      {
        id: 3,
        name: "Главная страница",
        triggers: [
          {
            id: 2,
            element: { name: "div", id: "hello", className: "analytic" },
            event: "click",
          },
        ],
      },
      {
        id: 4,
        name: "Главная страница",
        triggers: [
          {
            id: 0,
            element: { name: "div", id: "hello", className: "analytic" },
            event: "click",
          },
        ],
      },
      {
        id: 5,
        name: "Главная страница",
        triggers: [
          {
            id: 3,
            element: { name: "div", id: "hello", className: "analytic" },
            event: "click",
          },
          {
            id: 4,
            element: { name: "div", id: "hello", className: "analytic" },
            event: "click",
          },
          {
            id: 5,
            element: { name: "div", id: "hello", className: "analytic" },
            event: "click",
          },
          {
            id: 6,
            element: { name: "div", id: "hello", className: "analytic" },
            event: "click",
          },
          {
            id: 7,
            element: { name: "div", id: "hello", className: "analytic" },
            event: "click",
          },
          {
            id: 8,
            element: { name: "div", id: "hello", className: "analytic" },
            event: "mousemove",
          },
          {
            id: 9,
            element: {
              name: "div",
              id: "hello",
              className: "analyticaskldjaslkdjalsdjkaslkdjalsdkjalskdjaskldj",
            },
            event: "click",
          },
          {
            id: 10,
            element: { name: "div", id: "hello", className: "analytic" },
            event: "click",
          },
          {
            id: 11,
            element: { name: "div", id: "hello", className: "analytic" },
            event: "click",
          },
          {
            id: 12,
            element: { name: "div", id: "hello", className: "analytic" },
            event: "click",
          },
          {
            id: 13,
            element: { name: "div", id: "hello", className: "analytic" },
            event: "click",
          },
        ],
      },
    ],
  },
  reducers: {
    setName: (state, action) => {
      const { name } = action.payload;
      state.name = name;
    },
    createTrigger: (state, action) => {
      const { containerId, trigger } = action.payload;
      for (const containerIndex in state.containers) {
        if (state.containers[containerIndex].id == containerId) {
          trigger.id =
            state.containers[containerIndex].triggers.at(-1).id * 100;
          state.containers[containerIndex].triggers.push(trigger);
        }
      }
    },
    updateTrigger: (state, action) => {
      const { containerIndex, triggerIndex, trigger } = action.payload;
      state.containers[containerIndex].triggers[triggerIndex] = trigger;
    },
    deleteTrigger: (state, action) => {
      const { id } = action.payload;
      state.containers = state.containers.map((container) => {
        container.triggers = container.triggers.filter(
          (trigger) => trigger.id != id
        );
        return container;
      });
    },
  },
});

export const { setName, createTrigger, updateTrigger, deleteTrigger } =
  unitSlice.actions;

export default unitSlice.reducer;
