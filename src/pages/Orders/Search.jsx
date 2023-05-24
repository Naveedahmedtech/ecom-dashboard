import { InputText } from "primereact/inputtext";

const Search = () => {
  return (
    <div className="flex flex-wrap">
      <span className="p-input-icon-left full-width">
        <i className="pi pi-search" />
        <InputText placeholder="Search" className="full-width"/>
      </span>
    </div>
  );
};

export default Search;
