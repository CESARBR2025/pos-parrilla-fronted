/*
Muestra la grilla de mesas
Cada mesa tiene color segun su estado (libre/ocupada)
Click -> cambiar estado (libre-ocupada)
Recibe actualizaciones por ws
*/

import { useMemo, useState } from 'react';
import type { Table } from '../../../shared/types/table';
import { updateTableStatus } from '../api/tables.api';
import { TableGrid } from '../components/TableGrid';
import { useTables } from '../hooks/useTables';

export function WaiterHomePage() {
  const { tables, reload } = useTables();

  const [filter, setFilter] = useState<'all' | 'libre' | 'ocupada'>('all');

  // Filtrar tablas dependiendo si es (libre|ocupada|all)
  const filtered = useMemo(() => {
    if (filter === 'all') return tables;
    return tables.filter((t) => t.status === filter);
  }, [tables, filter]);

  //Contar las mesas libres
  const {libresCount, ocupadasCount, totalCount, porcentOccupational} = useMemo(() => {
    let libres = 0;
    let ocupadas = 0;

    for (const t of tables) {
      if (t.status === "libre") libres++
      if (t.status === "ocupada") ocupadas++
    }

    let total = libres + ocupadas
    let porcent = (ocupadas * 100) / total
    return {libresCount: libres, ocupadasCount:ocupadas, totalCount: total, porcentOccupational: porcent}
  }, [tables])




  


  //Capturar que mesa se esta seleccionando y cambiar estatus
  async function handleSelect(table: Table) {
    const next = table.status === 'libre' ? 'ocupada' : 'libre';
    await updateTableStatus(table.id, next); //actualizar el status
    reload(); // traer los datos con la actualizacion hecha
  }

  return (
    <section className="p-4 bg-orange-100/50 min-h-screen  ">
      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3  gap-4 mt-14 ">
        <div
          className="flex  g-4 bg-white rounded-2xl p-6 shadow-md items-center
        w-full
        transition-transform hover:scale-105
        "
        >
          <div
            className="bg-green-200/40 rounded-xl mr-4 flex justify-center items-center p-3
        shadow-md  h-12 
          "
          >
            <svg width={28} height={28}>
              <use href="#arrow-green"> </use>
            </svg>
          </div>
          <div className="flex flex-col g-4">
            <span className="text-sm text-pink-900 font-semibold">
              Ocupacion
            </span>
            <span className="text-3xl font-bold ">{porcentOccupational}%</span>
          </div>
        </div>

        <div
          className="flex  g-4 bg-white rounded-2xl p-4 shadow-md items-center
          transition-transform hover:scale-105 "
        >
          <div
            className="bg-orange-200/40 rounded-xl mr-4 flex justify-center items-center h-12
        shadow-md p-3
        
          "
          >
            <svg width={28} height={28} className="stroke-orange-400">
              <use href="#cup-coffee"> </use>
            </svg>
          </div>

          <div className="flex flex-col g-4">
            <span className="text-sm text-pink-900 font-semibold">
              Mesas activas
            </span>
            <span className="text-3xl font-bold ">{ocupadasCount}</span>
          </div>
        </div>

        <div className="flex  g-4 bg-white rounded-2xl p-4 shadow-md items-center   transition-transform hover:scale-105 ">
          <div
            className="bg-orange-200/40 rounded-xl mr-4 flex justify-center items-center h-12
        shadow-md p-3
          "
          >
            <svg width={28} height={28} className="stroke-orange-400">
              <use href="#money-icon"></use>
            </svg>
          </div>

          <div className="flex flex-col g-4">
            <span className="text-sm text-pink-900 font-semibold">
              Ventas Hoy
            </span>
            <span className="text-3xl font-bold ">$2,450</span>
          </div>
        </div>
      </section>

      <section className="pt-8">
        <div>
          <h1 className="text-4xl mb-4 font-bold pl-8">Gestión de Mesas</h1>
          <span className="font-base text-gray-900/60">
            Disponibilidad actual del restaurante
          </span>

          <section className=" w-lg  grid grid-cols-3 mt-4 gap-4  ">
            <div
              onClick={() => setFilter('all')}
              className="flex border-2 border-gray-300   bg-white rounded-xl gap-2 p-1 items-center px-4
              transition-transform hover:scale-110 cursor-pointer "
            >
              <div className="flex justify-center items-center  h-7 w-7 ml-2 bg-gray-200 rounded-full">
                <svg width={20} height={20} className="stroke-gray-400">
                  <use href="#circle"></use>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold">Todas</span>
                <div className="bg-gray-100 h-6 w-6 rounded-full text-center text-sm">
                  <span>{totalCount}</span>
                </div>
              </div>
            </div>

            <div
              onClick={() => setFilter('libre')}
              className="flex border-2 border-gray-300   bg-white rounded-xl gap-2 p-1 items-center
              transition-transform hover:scale-110 cursor-pointer"
            >
              <div className="flex justify-center items-center  h-7 w-7 ml-2 bg-gray-100 rounded-full">
                <svg width={20} height={20} className="stroke-green-400">
                  <use href="#circle-check"></use>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold">Disponibles</span>
                <div className="bg-gray-100 h-6 w-6 rounded-full text-center text-sm">
                  <span>{libresCount}</span>
                </div>
              </div>
            </div>

            <div
              onClick={() => setFilter('ocupada')}
              className="flex border-2 border-gray-300   bg-white rounded-xl gap-2 p-1 items-center
              transition-transform scale-110 cursor-pointer"
            >
              <div className="flex justify-center items-center  h-7 w-7 ml-2 bg-gray-100 rounded-full">
                <svg width={20} height={20} className="stroke-red-400">
                  <use href="#circle-x"></use>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-base font-semibold">Ocupadas</span>
                <div className="bg-gray-100 h-6 w-6 rounded-full text-center text-sm">
                  <span>{ocupadasCount}</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-4">
          <TableGrid tables={filtered} onSelect={handleSelect} />
        </section>
      </section>
    </section>
  );
}
