// Librarys
import { memo } from "react";
import PropTypes from "prop-types";

// Components
import LoadingSelect from "./Loading";
import OptionSelected from "./OptionSelected";

// Hooks
import useSelect from "./useSelect";

// Utils
import classnames from "../../utils/classnames";
import isValidString from "../../utils/isValidString";

function Select({
  error,
  style,
  onOpen,
  onBlur,
  options,
  onChange,
  disabled,
  textLabel,
  customRef,
  className,
  isLoading,
  selectedValue,
  readOnly = false,
  loaderClassName,
  mode = "default",
  focusSelect = true,
  noSelectionLabel = "Choose",
  activeAutoScrollbar = true,
}) {
  const {
    value,
    label,
    listRef,
    refInput,
    setValue,
    selectRef,
    searchValue,
    showOptions,
    hideOptions,
    selectBtnRef,
    handleKeyDown,
    handleOnChange,
    setSearchValue,
    isShowingOptions,
  } = useSelect({
    onOpen: onOpen,
    options: options,
    onChange: onChange,
    disabled: disabled,
    focusSelect: focusSelect,
    selectedValue: selectedValue,
    noSelectionLabel: noSelectionLabel,
    activeAutoScrollbar: activeAutoScrollbar,
  });

  return (
    <div
      style={style}
      ref={selectRef}
      className={classnames([
        className,
        error ? "error" : null,
        disabled ? "disabled" : null,
        "select position-relative",
      ])}
    >
      {isValidString(textLabel) && (
        <label className="select-label w-100" onClick={hideOptions}>
          {textLabel}
        </label>
      )}

      {isLoading && <LoadingSelect className={loaderClassName} />}

      {!isLoading && (
        <OptionSelected
          mode={mode}
          value={value}
          label={label}
          onBlur={onBlur}
          listRef={listRef}
          options={options}
          disabled={disabled}
          refInput={refInput}
          setValue={setValue}
          readOnly={readOnly}
          customRef={customRef}
          selectRef={selectRef}
          showOptions={showOptions}
          hideOptions={hideOptions}
          searchValue={searchValue}
          selectBtnRef={selectBtnRef}
          selectedValue={selectedValue}
          handleKeyDown={handleKeyDown}
          handleOnChange={handleOnChange}
          setSearchValue={setSearchValue}
          isShowingOptions={isShowingOptions}
        />
      )}
    </div>
  );
}

Select.propTypes = {
  mode: PropTypes.string,
  onOpen: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  focusSelect: PropTypes.bool,
  textLabel: PropTypes.string,
  customRef: PropTypes.object,
  className: PropTypes.string,
  selectedValue: PropTypes.string,
  loaderClassName: PropTypes.string,
  noSelectionLabel: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default memo(Select, (prevProps, nextProps) => {
  return (
    prevProps.error === nextProps.error &&
    prevProps.onOpen === nextProps.onOpen &&
    prevProps.onBlur === nextProps.onBlur &&
    prevProps.options === nextProps.options &&
    prevProps.onChange === nextProps.onChange &&
    prevProps.disabled === nextProps.disabled &&
    prevProps.readOnly === nextProps.readOnly &&
    prevProps.isLoading === nextProps.isLoading &&
    prevProps.className === nextProps.className &&
    prevProps.selectedValue === nextProps.selectedValue
  );
});
