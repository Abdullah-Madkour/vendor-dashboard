import FilterSelect from "./FilterSelect";

const verifiedItems = ["Verified", "Not Verified"];
const assignedToItems = ["Mohamed Sherif", "Engy"];
const stautsItems = ["active", "waiting", "closed"];
const sourceItems = ["Facebook", "Backend / Subscritpion", "ADS"];
const industryItems = ["Facebook", "Backend / Subscritpion", "ADS"];
const countriesItems = ["Facebook", "Backend / Subscritpion", "ADS"];
const subcategoriesItems = ["Facebook", "Backend / Subscritpion", "ADS"];
const TableFilterHeader = () => {
  return (
    <div className="p-5 rounded-lg shadow border">
      <h2 className="text-2xl font-semibold mb-3">Filters</h2>
      <div className="flex  *:flex-1 gap-4 items-center">
        <FilterSelect
          label="Verified"
          placeholder="Select Verified Status"
          items={verifiedItems}
        />
        <FilterSelect
          label="Assigned To"
          placeholder="Select Assigned To"
          items={assignedToItems}
        />
        <FilterSelect label="Status" placeholder="Status" items={stautsItems} />
        <FilterSelect label="Source" placeholder="Source" items={sourceItems} />
        <FilterSelect
          label="Industry"
          placeholder="Industry"
          items={industryItems}
        />
        <FilterSelect
          label="Country"
          placeholder="Country"
          items={countriesItems}
        />
        <FilterSelect
          label="Subcategories"
          placeholder="Subcategories"
          items={subcategoriesItems}
        />
      </div>
    </div>
  );
};

export default TableFilterHeader;
