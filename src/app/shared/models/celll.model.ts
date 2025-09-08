export interface ICell {
  field: string;
  title: string;
  typeFilter: CellType;
}

export enum CellType {
  Input = 'input',
  Select = 'select',
  Date = 'date',
  Checkbox = 'checkbox',
  Textarea = 'textarea',
}
