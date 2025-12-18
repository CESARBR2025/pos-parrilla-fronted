/* 
Tipar datos exactamente iguales como en la tabla de SUPABASE
*/
type TableStatus = 'libre' | 'ocupada';

export interface TableType {
  id: number;
  name: string;
  capacity: number;
  status: TableStatus;
  created_at?: string;
  updated_at?: string;
}
