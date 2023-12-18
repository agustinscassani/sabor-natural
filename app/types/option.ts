export enum OptionTypes {
  guarnicion = 'Guarnición',
  principal = 'Principal',
};

export type Option = {
  description: string;
  name: string;
  type: OptionTypes;
};
