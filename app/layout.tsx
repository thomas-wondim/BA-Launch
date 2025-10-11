export const metadata = {
title: "BA Launchpad — IT Business Analyst Bootcamp",
description: "Become a job‑ready IT Business Analyst in 6 weeks.",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body>{children}</body>
</html>
);
}
