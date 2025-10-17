// Librarys
import PropTypes from "prop-types";

// Components
import Options from "./Options";
import Sort from "../icons/sort";
import InputText from "../../InputText";
import EmptyOptions from "./EmptyOptions";
import ChevronDown from "../icons/chevron-down";

// Hooks
import useOptionSelected from "../hooks/useOptionSelected";

export default function OptionSelected({
  mode,
  value,
  label,
  onBlur,
  listRef,
  options,
  setValue,
  readOnly,
  disabled,
  customRef,
  selectRef,
  showOptions,
  hideOptions,
  searchValue,
  selectBtnRef,
  selectedValue,
  handleKeyDown,
  handleOnChange,
  setSearchValue,
  isShowingOptions,
}) {
  const { filteredOptions } = useOptionSelected({
    options: options,
    searchValue: searchValue,
  });

  return (
    <>
      <div
        role="button"
        ref={selectBtnRef}
        onClick={showOptions}
        className="select-value d-flex align-items-center justify-content-between px-3 overflow-hidden"
      >
        <InputText
          onBlur={onBlur}
          placeholder={label}
          readOnly={readOnly}
          disabled={disabled}
          value={searchValue}
          onFocus={showOptions}
          onKeyDown={handleKeyDown}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        {mode === "sort" && <Sort onClick={showOptions} />}
        {mode === "default" && <ChevronDown onClick={showOptions} />}
      </div>

      {isShowingOptions && filteredOptions?.length === 0 && (
        <EmptyOptions
          customRef={customRef}
          elementRef={selectRef}
          hideOptions={hideOptions}
          selectBtnRef={selectBtnRef}
        />
      )}

      {isShowingOptions &&
        Array.isArray(filteredOptions) &&
        filteredOptions.length > 0 && (
          <Options
            value={value}
            listRef={listRef}
            setValue={setValue}
            customRef={customRef}
            elementRef={selectRef}
            options={filteredOptions}
            hideOptions={hideOptions}
            selectBtnRef={selectBtnRef}
            selectedValue={selectedValue}
            handleOnChange={handleOnChange}
          />
        )}
    </>
  );
}

OptionSelected.propTypes = {
  mode: PropTypes.string,
  onBlur: PropTypes.func,
  label: PropTypes.string,
  value: PropTypes.string,
  listRef: PropTypes.object,
  refInput: PropTypes.object,
  customRef: PropTypes.object,
  customInput: PropTypes.object,
  handleKeyDown: PropTypes.func,
  selectBtnRef: PropTypes.object,
  selectedValue: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  showOptions: PropTypes.func.isRequired,
  hideOptions: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  isShowingOptions: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};
