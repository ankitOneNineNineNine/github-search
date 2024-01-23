export type DropDownProps = {
  changeValue: (value: string | number) => void;
  currentValue: string;
  options: { [key: string]: string };
};
