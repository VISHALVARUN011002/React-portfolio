import { useToast } from "@/hooks/use-toast";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

const toastIcons = {
  default: Info,
  success: CheckCircle2,
  destructive: AlertCircle,
};

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider swipeDirection="right">
      {toasts.map(function ({ id, title, description, action, variant, ...props }) {
        const Icon = toastIcons[variant || "default"] || Info;

        return (
          <Toast key={id} variant={variant} {...props}>
            <div
              className={
                variant === "destructive"
                  ? "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500"
                  : "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"
              }
              aria-hidden="true"
            >
              <Icon className="h-5 w-5" />
            </div>
            <div className="grid flex-1 gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
