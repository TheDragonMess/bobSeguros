/* eslint-disable react-hooks/exhaustive-deps */
// Hooks
import { useRef, useCallback } from "react";

// Utils
import isObject from "../utils/isObject";
import isFunction from "../utils/isFunction";
import isEmptyObject from "../utils/isEmptyObject";

// Constants
import { scrollIntoViewParams } from "../data/scroll";

/**
 * Hook for move between options for Autocomplete or Select components
 * @param {object} params Params
 */
export default function useMoveBetweenOptions({
  options,
  onPressEsc,
  onPressTab,
  onChangeOption,
  onMoveUpAndDown,
} = {}) {
  const listRef = useRef(null);

  // Callback for check if has an active option
  const checkIfHasActiveOption = useCallback(() => {
    const el = listRef?.current?.querySelector?.(".active");
    return el !== null;
  }, []);

  // Callback for remove 'active' class of the current option actived
  const removeActiveOption = useCallback((el) => {
    const activeOption = el?.querySelector?.(".active");
    activeOption?.classList.remove?.("active"); // Remove 'active' class

    return activeOption;
  }, []);

  // Callback for add to the next or previous option a class
  const handleAddCustomClasses = useCallback((el = {}) => {
    el?.classList?.remove?.("prev-option-active"); // Remove 'prev-option-active' class
    el?.classList?.remove?.("next-option-active"); // Remove 'next-option-active' class

    // Get the next and previous elements
    const nextElement = el?.nextElementSibling;
    const previousElement = el?.previousElementSibling;

    // Check if the next element exists
    if (nextElement) {
      nextElement.classList?.add?.("next-option-active");

      nextElement?.nextElementSibling?.classList?.remove?.(
        "next-option-active"
      );
    }

    // Check if the previous element exists
    if (previousElement) {
      previousElement.classList?.add?.("prev-option-active");

      previousElement?.previousElementSibling?.classList?.remove?.(
        "prev-option-active"
      );
    }
  }, []);

  // Callback for execute 'onMoveUpAndDown' callback
  const handleMoveUpAndDown = useCallback(
    (itemId) => {
      // Validate 'onMoveUpAndDown' callback
      if (!isFunction(onMoveUpAndDown)) return;

      // Get item
      const item = options.find((item) => item._id === itemId);

      onMoveUpAndDown(item ?? {});
    },
    [options, onMoveUpAndDown]
  );

  // Callback for active the first option
  const activeFirstOption = useCallback(
    (el = {}) => {
      const firstElement = el?.querySelector?.(".option-item");
      firstElement?.classList?.add?.("active"); // Add 'active' class
      firstElement?.scrollIntoView?.(scrollIntoViewParams);

      // Add custom classes
      handleAddCustomClasses(firstElement);
      handleMoveUpAndDown(firstElement?.getAttribute("value"));

      return firstElement;
    },
    [handleMoveUpAndDown]
  );

  // Callback for active the last option
  const activeLastOption = useCallback(
    (el = {}) => {
      const lastElement = el?.querySelector?.(".option-item:last-child");
      lastElement?.classList?.add?.("active"); // Add 'active' class
      lastElement?.scrollIntoView?.(scrollIntoViewParams);

      // Add custom classes
      handleAddCustomClasses(lastElement);
      handleMoveUpAndDown(lastElement?.getAttribute("value"));

      return lastElement;
    },
    [handleMoveUpAndDown]
  );

  // Callback for active the new option
  const handleActiveNewOption = useCallback(() => {
    // Get element
    const el = listRef.current;

    // Get the active option
    const activeOption = el?.querySelector(".active");
    if (!activeOption) return;

    // Get the value of the active option
    const value = activeOption?.getAttribute("value");

    // Get item
    const item = options.find((item) => item._id === value);

    // Validate item
    if (!isObject(item) || isEmptyObject(item)) return;

    onChangeOption(item);
  }, [options, onChangeOption]);

  // Callback for active the next option
  const handleActiveNextOption = useCallback(() => {
    // Check if has an active option
    const hasActiveOption = checkIfHasActiveOption();

    // Get element
    const el = listRef.current;

    if (hasActiveOption) {
      const activeOption = removeActiveOption(el); // Remove 'active' element

      // Get the next option
      const nextOption = activeOption?.nextElementSibling;

      // Add custom classes
      handleAddCustomClasses(nextOption);

      if (!nextOption) {
        return activeFirstOption(el); // Active the first option
      }

      handleMoveUpAndDown(nextOption.getAttribute("value"));
      nextOption.classList.add?.("active"); // Add 'active' class
      return nextOption.scrollIntoView?.(scrollIntoViewParams);
    }

    activeFirstOption(el); // Active the first option
  }, [handleMoveUpAndDown]);

  // Callback for active the previous option
  const handleActivePreviousOption = useCallback(() => {
    // Omit this action if not exists an active option
    const hasActiveOption = checkIfHasActiveOption();

    // Get element
    const el = listRef.current;

    // Check if not has active option and not is in the bottom part
    if (!hasActiveOption) return;
    const activeOption = removeActiveOption(el); // Remove 'active' element

    // Get the previous option
    const previousOption = activeOption?.previousElementSibling;

    // Add custom classes
    handleAddCustomClasses(previousOption);

    if (!previousOption) {
      return activeLastOption(el);
    }

    handleMoveUpAndDown(previousOption.getAttribute("value"));
    previousOption.classList.add?.("active"); // Add 'active' class
    previousOption.scrollIntoView?.(scrollIntoViewParams);
  }, [handleMoveUpAndDown]);

  // Keydown event of the input element
  const handleKeyDown = useCallback(
    (event) => {
      const keyActions = {
        Tab: onPressTab,
        Escape: onPressEsc,
        Enter: handleActiveNewOption,
        ArrowDown: handleActiveNextOption,
        ArrowUp: handleActivePreviousOption,
      };

      // Get current action
      const action = keyActions[event.key];
      if (!isFunction(action)) return;

      if (event.key !== "Tab") {
        event.preventDefault();
      }

      event.stopPropagation();

      action(event);
    },
    [
      onPressEsc,
      onPressTab,
      handleActiveNewOption,
      handleActiveNextOption,
      handleActivePreviousOption,
    ]
  );

  return {
    listRef: listRef,
    handleKeyDown: handleKeyDown,
  };
}
