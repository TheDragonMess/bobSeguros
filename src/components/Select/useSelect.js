/* eslint-disable react-hooks/exhaustive-deps */
// Hooks
import useMountedSelect from "./hooks/useMountedSelect";
import useMoveBetweenOptions from "../../hooks/useMoveBetweenOptions";
import { useRef, useMemo, useState, useCallback } from "react";

// Utils
import isFunction from "../../utils/isFunction";
import createValidArray from "../../utils/createValidArray";

// Constants
import { scrollIntoViewStartParams } from "../../data/scroll";

const DELAY = 300;

/**
 * Hook that implements the logic of the Select component
 * @param {object} props Some props of the Select component
 */
export default function useSelect({
  onOpen,
  options,
  onChange,
  disabled,
  focusSelect,
  selectedValue,
  noSelectionLabel,
  activeAutoScrollbar,
}) {
  // Define label
  const label = useMemo(() => {
    if (!Array.isArray(options)) return noSelectionLabel;

    // Find default option
    const item = options.find((option) => option.value === selectedValue);

    // Return founded item
    if (item) return item.label;

    return noSelectionLabel;
  }, [options, selectedValue]);

  const selectRef = useRef(null);
  const selectBtnRef = useRef(null);
  const [value, setValue] = useState(selectedValue);
  const [searchValue, setSearchValue] = useState("");
  const [isShowingOptions, setShowingOptions] = useState(false);

  // Callback for show options
  const showOptions = useCallback(() => {
    if (disabled || isShowingOptions) return;

    setShowingOptions(true);

    // Validate 'onOpen' callback
    if (isFunction(onOpen)) {
      onOpen();
    }

    // Validate 'scrollIntoView' callback
    if (!focusSelect || !isFunction(selectRef.current?.scrollIntoView)) return;

    const timeout = setTimeout(() => {
      selectRef.current.scrollIntoView(scrollIntoViewStartParams);
      clearTimeout(timeout);
    }, DELAY);
  }, [onOpen, disabled, isShowingOptions, selectRef.current]);

  // Callback for hide options
  const hideOptions = useCallback(
    (e) => {
      if (disabled) return;
      if (e && e.target.disabled) return; // Stop callback
      if (e && e.target.classList.contains("disabled")) return; // Stop callback

      setShowingOptions(false); // Hide options
    },
    [disabled]
  );

  // Make blur in input search
  const blurInputSearch = useCallback(() => {
    if (!selectRef.current) return;

    const input = selectRef.current.querySelector(".form-control");
    input.blur();
  }, []);

  // Callback 'change' when pick different value
  const handleOnChange = useCallback(
    (option, e) => {
      if (isFunction(e?.stopPropagation)) {
        e.stopPropagation(); // Prevent propagation to parent
      }

      blurInputSearch();
      setSearchValue("");

      if (option?.disabled) return; // Stop function if option its disabled
      setShowingOptions(false); // Hide options

      if (value === option?.value) return; // Same value selected

      if (isFunction(onChange)) {
        onChange({ ...option, lastValue: value });
      }

      setValue(option.value); // Update current value
    },
    [value, onChange]
  );

  // Define options with id
  const optionsWithId = useMemo(() => {
    return createValidArray(options).map((item) => ({
      ...item,
      _id: item?.value,
    }));
  }, [options]);

  const { listRef, handleKeyDown } = useMoveBetweenOptions({
    options: optionsWithId,
    onPressTab: () => {
      if (!isShowingOptions) return;
      hideOptions();
    },
    onPressEsc: () => setShowingOptions(false),
    onChangeOption: (option) => handleOnChange(option),
    onMoveUpAndDown: (item) => {
      const formControl = selectRef.current.querySelector(".form-control");
      if (!formControl) return;

      formControl.placeholder = item?.label;
    },
  });

  useMountedSelect({
    value: value,
    setValue: setValue,
    selectRef: selectRef,
    selectedValue: selectedValue,
    isShowingOptions: isShowingOptions,
    activeAutoScrollbar: activeAutoScrollbar,
  });

  return {
    value: value,
    label: label,
    listRef: listRef,
    setValue: setValue,
    selectRef: selectRef,
    hideOptions: hideOptions,
    searchValue: searchValue,
    showOptions: showOptions,
    selectBtnRef: selectBtnRef,
    handleKeyDown: handleKeyDown,
    handleOnChange: handleOnChange,
    setSearchValue: setSearchValue,
    isShowingOptions: isShowingOptions,
  };
}
