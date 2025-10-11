import * as React from "react";
import { cn } from "@/components/utils";


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
asChild?: boolean;
}


export function Button({ className, asChild, ...props }: ButtonProps) {
const Cmp: any = asChild ? "a" : "button";
return (
<Cmp
className={cn("inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 bg-slate-900 text-white hover:opacity-90", className)}
{...props}
/>
);
}
