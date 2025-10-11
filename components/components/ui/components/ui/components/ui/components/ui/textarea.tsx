import * as React from "react";
import { cn } from "@/components/utils";


export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}


export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea({ className, ...props }, ref) {
return (
<textarea
ref={ref}
className={cn("w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400 bg-white border-slate-300 text-slate-900 placeholder-slate-400", className)}
{...props}
/>
);
});
