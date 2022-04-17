import propTypes from "prop-types";
import { FilterLabel, FilterText, FilterInput } from "./Filter.styled";

export const Filter = ({ value, onChangeFilter }) => (
    <FilterLabel>
      <FilterText>Find contacts by name</FilterText>
    <FilterInput
      type="text"
      name="filter"
      value={value}
      onChange={onChangeFilter} />
    </FilterLabel>
  );


Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChangeFilter: propTypes.func.isRequired
};