/* Hook para logica react + ws
Funcion de:
- Cargar la lista de mesas desde tu API
- Guardar mesas en estado local
- Retonar las mesas ya cargadas
*/

import { useEffect, useState } from 'react';
import { fetchTables } from '../api/tables.api'; //obtener las tablas
import type { Table } from '../../../shared/types/table'; // tipado de la bd

//Componente llama a useTables
export function useTables() {
  //Inicializa tables como []
  const [tables, setTables] = useState<Table[]>([]);

  //Funcion a renderiza paso 2
  async function reload() {
    const data = await fetchTables(); //Fetch a api
    setTables(data); //Cuando la API responde, setTables actualiza el estado de tables
  }

  //Paso 1: Llamar a la funcion
  useEffect(() => {
    Promise.resolve().then(() => {
      reload();
    });
  }, []); // El [] es "ejecutar una vez al montar el componente"

  // Cualquier componente que use useTables pueda acceder a tables y a la funcion de forma segura
  return { tables, reload };
}
