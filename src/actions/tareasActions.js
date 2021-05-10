import { types } from "../types/types";

export const agregarTarea = (id, name) => ({
  type: types.AGREGAR_TAREA,
  payload: {
    id,
    name,
  },
});

export function removerTarea(payload) {
  return {
    type: types.REMOVER_TAREA,
    payload
  }
}

export const editarTarea = (payload) => ({
  type: types.EDITAR_TAREA,
  payload,
});

export const editarYReemplazarTarea = (id, name) => ({
  type: types.EDITAR_Y_REEMPLAZAR_TAREA,
  payload: {
    id,
    name, 
}
});
