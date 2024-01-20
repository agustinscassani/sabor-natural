import { Days } from './enumerations';
import { Option } from './option';

type MenuDay = {
  guarniciones: Option[];
  principales: Option[];
};

export type Menu = {
  [Days.Lunes]: MenuDay,
  [Days.Martes]: MenuDay,
  [Days.Miercoles]: MenuDay,
  [Days.Jueves]: MenuDay,
  [Days.Viernes]: MenuDay,
};
