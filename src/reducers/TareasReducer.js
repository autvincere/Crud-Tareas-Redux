import { types } from "../types/types";

const initialState = {
  tareas: [],
  tareaEditada: "",
};

export const tareas = (state = initialState, action) => {
  switch (action.type) {
    case types.AGREGAR_TAREA:
      return {
        ...state,
        tareas: [...state.tareas, action.payload],
      };
    case types.REMOVER_TAREA:
      return {
        ...state,
        tareas: state.tareas.filter((item) => item.id !== action.payload),
      };

    case types.EDITAR_TAREA:
      return {
        ...state,
        tareaEditada: state.tareas.find((item) => item.id === action.payload),
      };

    case types.EDITAR_Y_REEMPLAZAR_TAREA:
        return {
          ...state,
            tareas: [...state.tareas.map(item => item.id === action.payload.id ? (item = action.payload) : item)],
            tareaEditada:[],
        };
    default:
      return state;
  }
};
