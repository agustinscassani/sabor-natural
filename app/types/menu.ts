import { Option } from "./option";

enum Days {
  Lunes = 'Lunes',
  Martes = 'Martes',
  Miercoles = 'Miércoles',
  Jueves = 'Jueves',
  Viernes = 'Viernes',
};

type MenuItem = {
  guarnicion?: Option;
  notas?: string;
  principal: Option;
};

export type Menu = {
  [Days.Lunes]: MenuItem,
  [Days.Martes]: MenuItem,
  [Days.Miercoles]: MenuItem,
  [Days.Jueves]: MenuItem,
  [Days.Viernes]: MenuItem,
};
