import { createSlice } from "@reduxjs/toolkit";

export const unitSlice = createSlice({
  name: "unit",
  initialState: {
    name: "Рекурсивная аналитика",
    containersCount: 6,
    containers: [
      {
        id: 1987323,
        name: "Главная страница",
        triggers: [
          { element: "div", id: "hello", className: "analytic" },
          { element: "div", id: "hello", className: "world" },
          { element: "div", id: "hello", className: "world" },
          { element: "div", id: "hello", className: "world" },
          { element: "div", id: "hello", className: "world" },
          { element: "div", id: "hello", className: "world" },
          { element: "div", id: "hello", className: "world" },
          { element: "div", id: "hello", className: "world" },
          { element: "div", id: "hello", className: "world" },
          { element: "div", id: "hello", className: "world" },
          { element: "div", id: "hello", className: "world" },
          { element: "div", id: "hello", className: "world" },
        ],
      },
    ],
  },
  reducers: {
    setName: (state, action) => {
      const { name } = action.payload;
      state.name = name;
    },
  },
});

export const { setName } = unitSlice.actions;

export default unitSlice.reducer;
