/* UI DE MESERO */

import type { Table } from '../../../shared/types/table';
type TableStatus = 'libre' | 'ocupada';

interface TableCardProps {
  table: Table;
  onClick: (table: Table) => void;
}

export function TableCard({ table, onClick }: TableCardProps) {
  const borderColor =
    table.status === 'libre'
      ? 'border-green-500/70'
      : table.status === 'ocupada'
      ? 'border-orange-500/70'
      : 'border-gray-500/70';

  const bgColor =
    table.status === 'libre'
      ? 'bg-green-100/70'
      : table.status === 'ocupada'
      ? 'bg-orange-200/70'
      : 'bg-gray-100/70';

  const textColor =
    table.status === 'libre'
      ? 'text-green-500/70'
      : table.status === 'ocupada'
      ? 'text-orange-500/70'
      : 'text-gray-500/70';

  const iconsStatus: Record<TableStatus, string> = {
    libre: '#circle-check',
    ocupada: '#circle-x',
  };
  const statusColor = {
    libre: 'stroke-green-400',
    ocupada: 'stroke-orange-400',
    reservada: 'stroke-yellow-400',
  };

  return (
    <div
      className={`   
       rounded-2xl p-4  shadow text-white cursor-pointer bg-white
       border-t-6 ${borderColor}
       relative overflow-hidden
       `}
      onClick={() => onClick(table)}
    >
      <div
        className="flex flex-col gap-4 relative 
       "
      >
        <div
          className={`absolute -top-4 -right-4
         ${bgColor} h-20 w-20 rounded-md`}
        ></div>

        <div className="flex gap-4 ">
          <div
            className="bg-gray-200/40 flex h-13 w-13 text-center justify-center aling-center items-center
            rounded-xl
            shadow-md
          "
          >
            <span className="text-gray-600 text-3xl font-bold  ">2</span>
          </div>
          <div className="flex flex-col ">
            <span className="font-bold text-black text-xl">{table.name}</span>
            <div className="flex gap-2 justify-center items-center pl-2">
              <svg width={15} height={15} className={statusColor[table.status]}>
                <use href={iconsStatus[table.status]} />
              </svg>
              <span className={`text-xs ${textColor} font-semibold`}>
                {table.status}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col gap-2 pt-4 ">
          <svg width={28} height={28} className={statusColor[table.status]}>
            <use href="#circle-check"></use>
          </svg>
          <span className="text-gray-500 font-semibold text-md">
            Lista para recibir clientes
          </span>
        </div>
      </div>

      <p className="text-lg font-bold">{table.name}</p>
      <p>{table.status}</p>
    </div>
  );
}
