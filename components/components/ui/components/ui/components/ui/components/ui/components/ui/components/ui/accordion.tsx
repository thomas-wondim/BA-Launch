import * as React from "react";


export function Accordion({ children }: { children: React.ReactNode }) {
return <div>{children}</div>;
}
export function AccordionItem({ value, children }: { value: string; children: React.ReactNode }) {
return (
<div data-value={value} className="border-b last:border-b-0">
{children}
</div>
);
}
export function AccordionTrigger({ children }: { children: React.ReactNode }) {
return (
<button type="button" className="w-full text-left py-3 font-medium">
{children}
</button>
);
}
export function AccordionContent({ children }: { children: React.ReactNode }) {
return <div className="pb-4 text-sm text-slate-700">{children}</div>;
}
