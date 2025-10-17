// Hooks
import { useMemo } from "react";

// Utils
import createValidArray from "../../../utils/createValidArray";

/**
 * Hook for implements logic of OptionSelected component
 * @param {object} params Params
 */
export default function useOptionSelected({ options, searchValue }) {
  // Define the filtered options
  const filteredOptions = useMemo(() => {
    const selectOptions = createValidArray(options);

    return selectOptions.filter((item) => {
      const label = item?.label?.toLowerCase?.();
      const inputValue = searchValue.toLowerCase();

      return label
        ?.replace?.(/\s+/g, "")
        ?.includes(inputValue.replace(/\s+/g, ""));
    });
  }, [options, searchValue]);

  return {
    filteredOptions: filteredOptions,
  };
}
