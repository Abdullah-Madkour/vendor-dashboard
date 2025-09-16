import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const FilterSelect = ({
  label,
  placeholder,
  items,
}: {
  label: string;
  placeholder: string;
  items: string[];
}) => {
  return (
    <div>
      <label className="text-sm" htmlFor={label}>
        {label}
      </label>
      <Select>
        <SelectTrigger id={label} className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.map((item) => {
            return (
              <SelectItem className="capitalize" key={item} value={item}>
                {item}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterSelect;
