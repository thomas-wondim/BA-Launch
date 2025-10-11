import * as React from "react";
import { cn } from "@/components/utils";


export function Dialog({ open, onOpenChange, children }: { open: boolean; onOpenChange: (v: boolean) => void; children: React.ReactNode }) {
return <>{open && children}</>;
}
export function DialogContent({ className, children }: { className?: string; children: React.ReactNode }) {
return (
<div className="fixed inset-0 z-50 grid place-items-center">
<div className="fixed inset-0 bg-black/40"></div>
<div className={cn("relative z-10 w-[90%] max-w-md rounded-2xl bg-white p-6 shadow-xl", className)}>{children}</div>
</div>
);
}
export function DialogHeader({ children }: { children: React.ReactNode }) {
return <div className="mb-4">{children}</div>;
}
export function DialogFooter({ children }: { children: React.ReactNode }) {
return <div className="mt-6">{children}</div>;
}
export function DialogTitle({ children }: { children: React.ReactNode }) {
return <h3 className="text-lg font-semibold">{children}</h3>;
}
export function DialogDescription({ children }: { children: React.ReactNode }) {
return <p className="text-slate-600 mt-1 text-sm">{children}</p>;
}
