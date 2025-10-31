import * as React from "react";

type ToastActionElement = React.ReactElement;

export interface ToastProps {
  id: string;
  title?: string;
  description?: React.ReactNode;
  action?: ToastActionElement;
}

type ToastState = ToastProps[];

type ToastAction =
  | { type: "ADD_TOAST"; toast: ToastProps }
  | { type: "DISMISS_TOAST"; toastId?: string };

const TOAST_REMOVE_DELAY = 4000;

function toastReducer(state: ToastState, action: ToastAction): ToastState {
  switch (action.type) {
    case "ADD_TOAST":
      return [...state, action.toast];
    case "DISMISS_TOAST":
      if (action.toastId) {
        return state.filter((toast) => toast.id !== action.toastId);
      }
      return [];
    default:
      return state;
  }
}

const listeners = new Set<(toasts: ToastState) => void>();

let memoryState: ToastState = [];

function dispatch(action: ToastAction) {
  memoryState = toastReducer(memoryState, action);
  listeners.forEach((listener) => listener(memoryState));
}

export function useToast() {
  const [state, setState] = React.useState<ToastState>(memoryState);

  React.useEffect(() => {
    listeners.add(setState);
    return () => {
      listeners.delete(setState);
    };
  }, []);

  const toast = React.useCallback((props: Omit<ToastProps, "id">) => {
    const id = crypto.randomUUID();
    dispatch({ type: "ADD_TOAST", toast: { ...props, id } });
    window.setTimeout(() => dispatch({ type: "DISMISS_TOAST", toastId: id }), TOAST_REMOVE_DELAY);
    return id;
  }, []);

  const dismiss = React.useCallback((toastId?: string) => {
    dispatch({ type: "DISMISS_TOAST", toastId });
  }, []);

  return {
    toasts: state,
    toast,
    dismiss,
  };
}
