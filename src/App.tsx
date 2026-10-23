import { useState, ReactNode } from 'react'
import { Routes, Route, NavLink, Link, useNavigate, useParams, Navigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { LayoutDashboard, FileText, ScanSearch, Sparkles, ShieldCheck, BarChart3, Settings as Cog, Search, Bell, Landmark, FileCheck2, AlertTriangle, XCircle, CheckCircle2, X, Menu, Eye } from 'lucide-react'
import { apps, docs, Status, DocStatus } from './data'

const tone: Record<string, string> = {
  Verified:'bg-emerald-50 text-emerald-700 ring-emerald-200', Pending:'bg-slate-100 text-slate-600 ring-slate-200',
  'Needs Attention':'bg-amber-50 text-amber-700 ring-amber-200', Critical:'bg-red-50 text-red-700 ring-red-200',
  Warning:'bg-amber-50 text-amber-700 ring-amber-200', Failed:'bg-red-50 text-red-700 ring-red-200', 'Review Required':'bg-blue-50 text-blue-700 ring-blue-200' }
const Badge = ({ s }: { s: Status | DocStatus }) => <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${tone[s]}`}>{s}</span>
const Score = ({ v }: { v: number }) => v === 0 ? <span className="text-slate-400">—</span> :
  <div className="flex items-center gap-2"><div className="h-1.5 w-16 rounded bg-slate-100"><div className={`h-1.5 rounded ${v>=90?'bg-emerald-500':v>=70?'bg-amber-500':'bg-red-500'}`} style={{width:v+'%'}}/></div><span className="text-sm tabular-nums">{v}%</span></div>
const Page = ({ title, sub, children }: { title: string; sub?: string; children: ReactNode }) =>
  <motion.div initial={{opacity:0,y:6}} animate={{opacity:1,y:0}} transition={{duration:.2}} className="p-6 max-w-7xl mx-auto">
    <h1 className="text-xl font-semibold text-navy">{title}</h1>{sub && <p className="text-sm text-slate-500 mt-1">{sub}</p>}<div className="mt-6 space-y-6">{children}</div></motion.div>

function Login() {
  const nav = useNavigate()
  return <div className="min-h-screen grid place-items-center bg-slate-50 p-4">
    <motion.form initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} onSubmit={e=>{e.preventDefault();nav('/')}} className="card w-full max-w-sm p-8 shadow-sm">
      <div className="mx-auto h-14 w-14 rounded-full bg-navy grid place-items-center text-white"><Landmark size={26}/></div>
      <p className="text-center text-xs text-slate-500 mt-4 tracking-wide uppercase">All India Council for Technical Education</p>
      <h1 className="text-center text-lg font-semibold text-navy mt-1">AICTE Intelligent Verification Platform</h1>
      <div className="mt-6 space-y-4">
        <label className="block text-sm font-medium">Official email<input className="inp mt-1" type="email" defaultValue="officer@aicte-india.org" required/></label>
        <label className="block text-sm font-medium">Password<input className="inp mt-1" type="password" defaultValue="password" required/></label>
        <label className="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" defaultChecked/> Remember me</label>
        <button className="btn-p w-full">Sign in</button></div>
      <p className="text-xs text-slate-400 text-center mt-6">Authorised AICTE personnel only. Activity is logged.</p>
    </motion.form></div>
}

const nav = [['/','Dashboard',LayoutDashboard],['/applications','Applications',FileText],['/documents','Document Verification',ScanSearch],['/reports','AI Reports',Sparkles],['/compliance','Compliance',ShieldCheck],['/analytics','Analytics',BarChart3],['/settings','Settings',Cog]] as const
function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false); const [q, setQ] = useState(''); const go = useNavigate()
  const hits = q ? apps.filter(a => (a.name + a.id).toLowerCase().includes(q.toLowerCase())).slice(0,4) : []
  return <div className="min-h-screen flex">
    <aside className={`fixed lg:static z-30 inset-y-0 w-60 bg-navy text-slate-200 flex flex-col transition-transform ${open?'':'-translate-x-full lg:translate-x-0'}`}>
      <div className="h-16 px-5 flex items-center gap-3 border-b border-white/10"><Landmark size={20}/><span className="text-sm font-semibold text-white leading-tight">AICTE Verification<br/><span className="text-xs font-normal text-slate-300">EoA 2026</span></span></div>
      <nav className="p-3 space-y-1">{nav.map(([to,l,I]) => <NavLink key={to} to={to} end={to==='/'} onClick={()=>setOpen(false)} className={({isActive})=>`flex items-center gap-3 rounded-md px-3 py-2 text-sm ${isActive?'bg-white/15 text-white':'hover:bg-white/10'}`}><I size={17}/>{l}</NavLink>)}</nav>
    </aside>
    <div className="flex-1 min-w-0">
      <header className="h-16 bg-white border-b border-slate-200 px-4 flex items-center gap-4 sticky top-0 z-20">
        <button className="lg:hidden" onClick={()=>setOpen(!open)}><Menu/></button>
        <div className="relative flex-1 max-w-md"><Search size={16} className="absolute left-3 top-2.5 text-slate-400"/><input value={q} onChange={e=>setQ(e.target.value)} className="inp pl-9" placeholder="Search applications"/>
          {hits.length>0 && <div className="absolute mt-1 w-full card shadow-lg">{hits.map(a=><button key={a.id} onClick={()=>{go('/applications/'+a.id);setQ('')}} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-50">{a.name}<span className="block text-xs text-slate-400">{a.id}</span></button>)}</div>}</div>
        <span className="hidden sm:flex items-center gap-2 text-xs text-slate-600"><span className="h-2 w-2 rounded-full bg-emerald-500"/>AI engine online</span>
        <button className="relative"><Bell size={19} className="text-slate-600"/><span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-red-500"/></button>
        <div className="flex items-center gap-2"><div className="h-8 w-8 rounded-full bg-navy text-white text-xs grid place-items-center">RK</div><div className="hidden md:block text-xs leading-tight"><p className="font-medium">R. Krishnan</p><p className="text-slate-500">Scrutiny Officer</p></div></div>
      </header>{children}</div></div>
}

const stats = [['Total Applications',1248,'text-navy'],['Pending Verification',326,'text-slate-700'],['AI Verified',842,'text-emerald-600'],['Critical Issues',80,'text-red-600']] as const
function Dashboard() {
  const mix = [['Verified',842,'bg-emerald-500'],['Pending',326,'bg-slate-400'],['Needs Clarification',181,'bg-amber-500'],['Critical Issues',80,'bg-red-500']] as const
  return <Page title="Dashboard" sub="Extension of Approval 2026 – verification overview">
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{stats.map(([l,v,c])=><div key={l} className="card p-5"><p className="text-sm text-slate-500">{l}</p><p className={`text-3xl font-semibold mt-2 ${c}`}>{v.toLocaleString()}</p></div>)}</div>
    <div className="card p-5"><h2 className="font-medium">Application Status Overview</h2>
      <div className="flex h-3 rounded overflow-hidden mt-4">{mix.map(([l,v,c])=><div key={l} className={c} style={{width:v/14.29+'%'}}/>)}</div>
      <div className="flex flex-wrap gap-x-6 gap-y-2 mt-3 text-sm text-slate-600">{mix.map(([l,v,c])=><span key={l} className="flex items-center gap-2"><i className={`h-2 w-2 rounded-full ${c}`}/>{l} · {v}</span>)}</div></div>
    <div className="card"><div className="p-5 flex justify-between"><h2 className="font-medium">Recent Applications</h2><Link to="/applications" className="text-sm text-navy-700">View all</Link></div><AppTable rows={apps.slice(0,5)}/></div></Page>
}

function AppTable({ rows }: { rows: typeof apps }) {
  return <div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="text-left text-xs uppercase text-slate-500 bg-slate-50 border-y border-slate-200">
    {['Institution','Application ID','Type','Submitted','AI Score','Status',''].map(h=><th key={h} className="px-5 py-3 font-medium">{h}</th>)}</tr></thead>
    <tbody>{rows.map(a=><tr key={a.id} className="border-b border-slate-100 hover:bg-slate-50"><td className="px-5 py-3 font-medium">{a.name}</td><td className="px-5 py-3 text-slate-500">{a.id}</td><td className="px-5 py-3">{a.type}</td><td className="px-5 py-3 text-slate-500">{a.date}</td>
      <td className="px-5 py-3"><Score v={a.score}/></td><td className="px-5 py-3"><Badge s={a.status}/></td><td className="px-5 py-3"><Link className="btn-o !py-1" to={'/applications/'+a.id}>View</Link></td></tr>)}
      {rows.length===0 && <tr><td colSpan={7} className="p-8 text-center text-slate-400">No applications match.</td></tr>}</tbody></table></div>
}

function Applications() {
  const [q, setQ] = useState(''); const [f, setF] = useState('All')
  const rows = apps.filter(a => (f==='All'||a.status===f) && (a.name+a.id).toLowerCase().includes(q.toLowerCase()))
  return <Page title="Applications" sub="Search, filter and open any submission">
    <div className="card"><div className="p-4 flex flex-wrap gap-3 items-center"><input className="inp max-w-xs" placeholder="Institution name or Application ID" value={q} onChange={e=>setQ(e.target.value)}/>
      <div className="flex gap-1 flex-wrap">{['All','Verified','Pending','Needs Attention','Critical'].map(x=><button key={x} onClick={()=>setF(x)} className={`rounded-full px-3 py-1 text-sm ${f===x?'bg-navy text-white':'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>{x}</button>)}</div></div><AppTable rows={rows}/></div></Page>
}

const dIcon = (s: DocStatus) => s==='Verified'?<CheckCircle2 className="text-emerald-600" size={18}/>:s==='Failed'?<XCircle className="text-red-600" size={18}/>:<AlertTriangle className="text-amber-600" size={18}/>
function DocCards({ onView }: { onView: (id: string) => void }) {
  return <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{docs.map(d=><div key={d.id} className="card p-5">
    <div className="flex items-start justify-between"><div className="h-10 w-10 rounded-md bg-navy-50 text-navy grid place-items-center"><FileCheck2 size={20}/></div><Badge s={d.status}/></div>
    <h3 className="font-medium mt-3">{d.title}</h3><p className="text-xs text-slate-500">{d.file} · Uploaded {d.date}</p>
    <div className="mt-4 flex items-center justify-between"><div><p className="text-xs text-slate-500">AI confidence</p><Score v={d.conf}/></div><button onClick={()=>onView(d.id)} className="btn-o"><Eye size={15}/>View</button></div></div>)}</div>
}

function DocModal({ id, onClose }: { id: string | null; onClose: () => void }) {
  const d = docs.find(x=>x.id===id)
  return <AnimatePresence>{d && <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-40 bg-slate-900/40 grid place-items-center p-4" onClick={onClose}>
    <motion.div initial={{scale:.97,y:8}} animate={{scale:1,y:0}} exit={{scale:.97}} onClick={e=>e.stopPropagation()} className="bg-white rounded-lg w-full max-w-5xl max-h-[90vh] overflow-auto">
      <div className="flex items-center justify-between px-5 py-3 border-b"><div><p className="text-xs text-slate-500">Document analysis</p><h2 className="font-semibold">{d.file}</h2></div><button onClick={onClose}><X/></button></div>
      <div className="grid md:grid-cols-2 gap-5 p-5">
        <div className="rounded-md border bg-slate-100 min-h-[22rem] grid place-items-center p-6"><div className="bg-white shadow w-56 h-72 p-4 text-[9px] text-slate-400 space-y-2"><p className="font-semibold text-slate-600 text-xs">{d.title.toUpperCase()}</p>{[90,100,75,95,60,100,80].map((w,i)=><div key={i} className="h-1.5 bg-slate-200 rounded" style={{width:w+'%'}}/>)}<div className="mt-6 h-8 w-20 border border-dashed border-slate-300 grid place-items-center">Signature</div><p className="pt-4">Preview placeholder — connect PDF viewer</p></div></div>
        <div className="space-y-5"><div><h3 className="text-sm font-medium mb-2">Extracted Information</h3><dl className="divide-y border rounded-md">{d.fields.map(([k,v])=><div key={k} className="flex justify-between px-3 py-2 text-sm"><dt className="text-slate-500">{k}</dt><dd className="font-medium">{v}</dd></div>)}</dl></div>
          <div><h3 className="text-sm font-medium mb-2">AI Verification</h3><ul className="space-y-2 text-sm">{d.checks.map(([ok,t],i)=><li key={i} className="flex gap-2">{ok?<CheckCircle2 size={17} className="text-emerald-600 shrink-0"/>:<AlertTriangle size={17} className="text-amber-600 shrink-0"/>}{t}</li>)}</ul></div>
          <p className="text-xs text-slate-500">Confidence {d.conf}% · <Badge s={d.status}/></p></div></div></motion.div></motion.div>}</AnimatePresence>
}

function Report() {
  const Sec = ({ t, c, children }: { t: string; c: string; children: ReactNode }) => <div className="card p-5"><h3 className={`font-medium ${c}`}>{t}</h3><div className="mt-3 text-sm space-y-3">{children}</div></div>
  return <div className="space-y-4">
    <Sec t="Critical Issues (1)" c="text-red-700"><div className="rounded-md border border-red-200 bg-red-50/50 p-4"><p className="font-medium">Fire NOC Expired</p><p className="text-slate-600 mt-1">Evidence — Expiry Date: <b>31 December 2025</b>. Application submitted 12 June 2026.</p><p className="text-xs text-slate-500 mt-1">Source: Fire_NOC.pdf, page 1</p></div></Sec>
    <Sec t="Warnings (2)" c="text-amber-700"><div className="rounded-md border border-amber-200 bg-amber-50/50 p-4"><p className="font-medium">Faculty Data Mismatch</p><div className="grid grid-cols-3 gap-3 mt-2 text-center">{[['Application','120'],['Uploaded list','108'],['Difference','12']].map(([k,v])=><div key={k} className="bg-white rounded border p-2"><p className="text-xs text-slate-500">{k}</p><p className="text-lg font-semibold">{v}</p></div>)}</div></div><div className="rounded-md border p-4"><p className="font-medium">Infrastructure: 2 declared labs not visible</p></div></Sec>
    <Sec t="Verified Items" c="text-emerald-700"><ul className="space-y-1.5">{['Land documents matched','Institution details verified','Certificate format valid'].map(x=><li key={x} className="flex gap-2"><CheckCircle2 size={17} className="text-emerald-600"/>{x}</li>)}</ul></Sec></div>
}

function Detail() {
  const { id } = useParams(); const a = apps.find(x=>x.id===id) ?? apps[0]
  const [tab, setTab] = useState('Documents'); const [doc, setDoc] = useState<string|null>(null); const [msg, setMsg] = useState('')
  const act = (m: string) => { setMsg(m); setTimeout(()=>setMsg(''),3000) }
  return <Page title={a.name} sub={`${a.state} · Extension of Approval (EoA)`}>
    <div className="card p-5 grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">{[['Application Type','Extension of Approval (EoA)'],['Application ID',a.id],['AI Confidence Score',a.score?a.score+'%':'—']].map(([k,v])=><div key={k}><p className="text-xs text-slate-500">{k}</p><p className="font-medium mt-1">{v}</p></div>)}<div><p className="text-xs text-slate-500">Status</p><div className="mt-1"><Badge s={a.status}/></div></div></div>
    <div className="flex gap-1 border-b">{['Documents','AI Findings Report','Officer Actions'].map(t=><button key={t} onClick={()=>setTab(t)} className={`px-4 py-2 text-sm border-b-2 -mb-px ${tab===t?'border-navy text-navy font-medium':'border-transparent text-slate-500'}`}>{t}</button>)}</div>
    {tab==='Documents' && <DocCards onView={setDoc}/>}{tab==='AI Findings Report' && <Report/>}
    {tab==='Officer Actions' && <div className="card p-5 space-y-4"><div className="flex flex-wrap gap-3"><button className="btn-o" onClick={()=>act('Clarification request drafted to institution.')}>Request Clarification</button><button className="btn-o" onClick={()=>act('Application marked verified.')}>Mark Verified</button><button className="btn-p" onClick={()=>act('Forwarded for final approval.')}>Forward for Final Approval</button></div>
      {msg && <p className="text-sm text-emerald-700">{msg}</p>}<p className="text-xs text-slate-500 border-t pt-3">AI provides verification assistance. Final approval decisions remain with AICTE officials.</p></div>}
    <DocModal id={doc} onClose={()=>setDoc(null)}/></Page>
}

function Documents() { const [d, setD] = useState<string|null>(null); return <Page title="Document Verification" sub={apps[0].name+' · '+apps[0].id}><DocCards onView={setD}/><DocModal id={d} onClose={()=>setD(null)}/></Page> }

function Bars({ title, data, unit='%' }: { title: string; data: [string, number][]; unit?: string }) {
  const m = Math.max(...data.map(d=>d[1]))
  return <div className="card p-5"><h3 className="font-medium">{title}</h3><div className="mt-4 space-y-3">{data.map(([k,v])=><div key={k} className="text-sm"><div className="flex justify-between text-slate-600"><span>{k}</span><span>{v}{unit}</span></div><div className="h-2 bg-slate-100 rounded mt-1"><motion.div initial={{width:0}} animate={{width:v/m*100+'%'}} className="h-2 rounded bg-navy-700"/></div></div>)}</div></div>
}
const Analytics = () => <Page title="AI Insights" sub="Model performance and compliance trends"><div className="grid gap-4 lg:grid-cols-2">
  <Bars title="Document verification accuracy" data={[['Fire NOC',97],['Building Stability',98],['Land Documents',95],['Faculty Details',89],['Infrastructure Evidence',81]]}/>
  <Bars title="Common issues detected" unit="" data={[['Expired certificates',112],['Faculty count mismatch',87],['Missing signatures',54],['Unreadable scans',39],['Area below norm',21]]}/>
  <Bars title="Application processing time (days)" unit=" d" data={[['Jan–Mar',14],['Apr–Jun',9],['Jul–Sep',6],['Oct–Dec (AI-assisted)',4]]}/>
  <Bars title="Institution compliance trend" data={[['2022',71],['2023',76],['2024',82],['2025',86],['2026',91]]}/></div></Page>
const Compliance = () => <Page title="Compliance" sub="Mandatory requirements across applications"><div className="card divide-y">{['Fire NOC valid on submission date','Building Stability Certificate ≤ 5 years old','Faculty count matches declaration','Land ownership documents verified','Infrastructure meets AICTE norms'].map((r,i)=><div key={r} className="flex justify-between p-4 text-sm"><span>{r}</span><span className="text-slate-500">{[88,97,79,95,82][i]}% compliant</span></div>)}</div></Page>
const Reports = () => <Page title="AI Reports" sub={apps[0].name+' · '+apps[0].id}><Report/></Page>
const Settings = () => <Page title="Settings"><div className="grid gap-4 lg:grid-cols-3">
  <div className="card p-5 space-y-3"><h3 className="font-medium">Profile</h3><input className="inp" defaultValue="R. Krishnan"/><input className="inp" defaultValue="officer@aicte-india.org"/><button className="btn-p">Save</button></div>
  <div className="card p-5 space-y-3"><h3 className="font-medium">Notifications</h3>{['New application assigned','Critical issue detected','Clarification received'].map(x=><label key={x} className="flex items-center gap-2 text-sm"><input type="checkbox" defaultChecked/>{x}</label>)}</div>
  <div className="card p-5 text-sm space-y-2"><h3 className="font-medium">System information</h3>{[['Version','1.0.0 (prototype)'],['AI engine','Online'],['Last sync','Today, 09:40']].map(([k,v])=><p key={k} className="flex justify-between"><span className="text-slate-500">{k}</span>{v}</p>)}</div></div></Page>

export default function App() {
  return <Routes><Route path="/login" element={<Login/>}/>
    {[['/',Dashboard],['/applications',Applications],['/applications/:id',Detail],['/documents',Documents],['/reports',Reports],['/compliance',Compliance],['/analytics',Analytics],['/settings',Settings]].map(([p,C]) => { const E = C as () => JSX.Element; return <Route key={p as string} path={p as string} element={<Shell><E/></Shell>}/> })}
    <Route path="*" element={<Navigate to="/login"/>}/></Routes>
}
