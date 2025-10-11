import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Calendar, Clock, Users, CheckCircle2, ArrowRight, BookOpen, ShieldCheck, Mail } from "lucide-react";


const features = [
{ icon: <CheckCircle2 className="h-6 w-6" />, title: "Job‑ready skills", text: "Hands‑on with user stories, BPMN, JIRA/Confluence, and stakeholder workflows." },
{ icon: <ShieldCheck className="h-6 w-6" />, title: "Real artifacts", text: "Graduate with a polished portfolio: BRD, process map, backlog, & demo." },
{ icon: <Users className="h-6 w-6" />, title: "Live coaching", text: "Weekly office hours and targeted feedback on your project." },
];


const modules = [
{ wk: "Week 1", title: "BA Foundations + Stakeholders", bullets: [
"Role of the IT Business Analyst, project lifecycles (Agile vs. Waterfall)",
"Stakeholder mapping & discovery interview techniques",
"Intro to requirements taxonomy (BRD, FRD, epics/stories)"
]},
{ wk: "Week 2", title: "Elicitation & Documentation", bullets: [
"Workshops, JAD, notes to minutes, and traceability",
"User stories & acceptance criteria done right",
"Templates: meeting minutes, story map, requirements matrix"
]},
{ wk: "Week 3", title: "Process, Data, & Systems", bullets: [
"BPMN process modeling and swimlanes",
"Lightweight data modeling (ERD), API basics & integrations",
"Non‑functional requirements & constraints"
]},
{ wk: "Week 4", title: "Prototyping & Validation", bullets: [
"Wireframes/flows (Figma/Miro) and usability checks",
"Backlog grooming, prioritization, and estimation",
"UAT planning & defect triage basics"
]},
{ wk: "Week 5", title: "Delivery & Governance", bullets: [
"JIRA/Confluence setup, workflows, and dashboards",
"Change control, versioning, and sign‑off",
"Read‑outs: exec‑friendly storytelling"
]},
{ wk: "Week 6", title: "Capstone & Career", bullets: [
"Portfolio polish: BRD excerpt, BPMN, user stories, demo",
"Mock interview & take‑home case review",
"Career plan: resume bullets & LinkedIn positioning"
]},
];


const faqs = [
{ q: "Who is this for?", a: "Career‑switchers and early‑career analysts who want practical BA skills and a portfolio in 6 weeks." },
{ q: "What are the prerequisites?", a: "Comfort with basic computer skills. No coding required. Exposure to software projects helps but isn’t mandatory." },
{ q: "Is it live or self‑paced?", a: "Live, online sessions with recordings provided. Weekly office hours included." },
{ q: "Will I get a certificate?", a: "Yes — a completion certificate with portfolio verification." },
}
