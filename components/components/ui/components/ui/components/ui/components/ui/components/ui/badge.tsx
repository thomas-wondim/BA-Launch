import * as React from "react";
import { cn } from "@/components/utils";


export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
return <span className={cn("inline-flex items-center px-2 py-1 rounded-xl text-xs font-medium bg-slate-900 text-white", className)} {...props} />;
}
