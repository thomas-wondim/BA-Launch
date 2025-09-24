import { NextResponse } from "next/server";
export async function POST(req:Request){
try{
const data=await req.json();
const {name,email,phone,experience,cohort,notes}=data||{};
if(!name||!email||!experience){
return NextResponse.json({ok:false,error:"Missing required fields."},{status:400})
}
const esc=(s:string="")=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
const RESEND_API_KEY=process.env.RESEND_API_KEY;
const EMAIL_TO=process.env.EMAIL_TO||"thomas.wondim@gmail.com";
const EMAIL_FROM=process.env.EMAIL_FROM||"BA Launchpad <noreply@example.com>";
if(RESEND_API_KEY){
const subject=`New BA Launchpad Application — ${name}`;
const html=`<h2>New Application</h2><p><b>Name:</b> ${esc(name)}</p><p><b>Email:</b> ${esc(email)}</p><p><b>Phone:</b> ${esc(phone)}</p><p><b>Preferred cohort:</b> ${esc(cohort)}</p><p><b>Background / goals:</b></p><pre style="white-space:pre-wrap;font-family:ui-monospace,Menlo,Monaco,Consolas;">${esc(experience)}</pre><p><b>Notes:</b></p><pre style="white-space:pre-wrap;font-family:ui-monospace,Menlo,Monaco,Consolas;">${esc(notes)}</pre>`;
const emailRes=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${RESEND_API_KEY}`},body:JSON.stringify({from:EMAIL_FROM,to:[EMAIL_TO],subject,html})});
if(!emailRes.ok){
const t=await emailRes.text();
console.error("Resend error:",t)
}}
else{
console.log("[apply] Submission (no email configured):",data)}
return NextResponse.json({ok:true})
}
catch(err){
console.error(err);
return NextResponse.json({ok:false,error:"Server error."},{status:500})
}}
export const runtime="nodejs";