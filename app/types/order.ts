import { Days } from './enumerations';
import { Option } from './option';

type OrderItem = {
  guarnicion?: Option;
  notas?: string;
  principal: Option;
}

export type Order = {
  [Days.Lunes]: OrderItem,
  [Days.Martes]: OrderItem,
  [Days.Miercoles]: OrderItem,
  [Days.Jueves]: OrderItem,
  [Days.Viernes]: OrderItem,
};
