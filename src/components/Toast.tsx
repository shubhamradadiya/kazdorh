import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Info, X } from 'lucide-react';

type ToastTone = 'info' | 'warning';

interface ToastItem {
  id: number;
  message: string;
  tone: ToastTone;
}

interface ToastContextValue {
  showToast: (message: string, tone?: ToastTone) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const BETA_LOGIN_MESSAGE =
  'Email or password not found.';

export const BETA_SIGNUP_MESSAGE =
  'Registration is only based on invite for now as the app is in beta.';

export const BETA_RESET_MESSAGE =
  'Email not found. Password reset is not available while the app is in beta.';

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const dismiss = useCallback((id: number) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback((message: string, tone: ToastTone = 'info') => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    setToasts([{ id, message, tone }]);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[100] flex flex-col items-center gap-3 px-4 pb-6 sm:bottom-auto sm:left-auto sm:right-6 sm:top-6 sm:items-end sm:px-0 sm:pb-0"
        aria-live="polite"
        aria-relevant="additions"
      >
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <ToastCard key={toast.id} toast={toast} onDismiss={dismiss} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

function ToastCard({
  toast,
  onDismiss,
}: {
  toast: ToastItem;
  onDismiss: (id: number) => void;
}) {
  useEffect(() => {
    const timer = window.setTimeout(() => onDismiss(toast.id), 4200);
    return () => window.clearTimeout(timer);
  }, [toast.id, onDismiss]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.96 }}
      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-auto flex w-full max-w-[420px] items-start gap-3 rounded-2xl border border-[#e5daf3] bg-white px-4 py-3.5 shadow-[0_18px_40px_rgba(56,27,89,0.16)] sm:w-[420px]"
      role="status"
    >
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#f3eaff] text-[#4f008c]">
        <Info size={16} />
      </span>
      <p className="flex-1 pt-0.5 text-[13px] font-semibold leading-5 text-[#3f384a]">{toast.message}</p>
      <button
        type="button"
        onClick={() => onDismiss(toast.id)}
        className="mt-0.5 rounded-lg p-1 text-[#948ca0] transition hover:bg-[#f6f1fb] hover:text-[#4f008c]"
        aria-label="Dismiss notification"
      >
        <X size={15} />
      </button>
    </motion.div>
  );
}
