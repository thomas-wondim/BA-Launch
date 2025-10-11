import * as React from "react";
import { cn } from "@/components/utils";


export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}


export const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input({ className, ...props }, ref) {
return (
<input
ref={ref}
className={cn("w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400 bg-white border-slate-300 text-slate-900 placeholder-slate-400", className)}
{...props}
/>
);
});
