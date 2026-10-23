export type Status = 'Verified' | 'Pending' | 'Needs Attention' | 'Critical'
export const apps = [
 { id:'AICTE-E0A-2026-10234', name:'ABC Engineering College', type:'EoA 2026', date:'12 Jun 2026', score:87, status:'Needs Attention' as Status, state:'Tamil Nadu' },
 { id:'AICTE-E0A-2026-10311', name:'XYZ Institute of Technology', type:'EoA 2026', date:'14 Jun 2026', score:72, status:'Needs Attention' as Status, state:'Karnataka' },
 { id:'AICTE-E0A-2026-10377', name:'National Technical University', type:'EoA 2026', date:'15 Jun 2026', score:98, status:'Verified' as Status, state:'Delhi' },
 { id:'AICTE-E0A-2026-10402', name:'Sri Venkateswara College of Engineering', type:'EoA 2026', date:'18 Jun 2026', score:96, status:'Verified' as Status, state:'Andhra Pradesh' },
 { id:'AICTE-E0A-2026-10455', name:'Greenfield Institute of Management', type:'EoA 2026', date:'21 Jun 2026', score:41, status:'Critical' as Status, state:'Maharashtra' },
 { id:'AICTE-E0A-2026-10490', name:'Lakshmi Polytechnic College', type:'EoA 2026', date:'22 Jun 2026', score:0, status:'Pending' as Status, state:'Kerala' },
 { id:'AICTE-E0A-2026-10518', name:'Ashoka School of Pharmacy', type:'EoA 2026', date:'25 Jun 2026', score:91, status:'Verified' as Status, state:'Gujarat' },
 { id:'AICTE-E0A-2026-10533', name:'Meridian Institute of Computer Applications', type:'EoA 2026', date:'27 Jun 2026', score:64, status:'Needs Attention' as Status, state:'Telangana' },
]
export type DocStatus = 'Verified' | 'Warning' | 'Failed' | 'Review Required'
export const docs = [
 { id:'fire', title:'Fire NOC', file:'Fire_NOC.pdf', date:'02 Jun 2026', status:'Failed' as DocStatus, conf:96,
   fields:[['Issuing Authority','Fire Department'],['Issue Date','12/04/2025'],['Expiry Date','31/12/2025']],
   checks:[[1,'Correct Document Type'],[1,'Required Fields Present'],[1,'Signature Detected'],[0,'Certificate expired before application date']] },
 { id:'bsc', title:'Building Stability Certificate', file:'Building_Stability.pdf', date:'02 Jun 2026', status:'Verified' as DocStatus, conf:98,
   fields:[['Issuing Authority','Chartered Structural Engineer'],['Issue Date','08/01/2026'],['Validity','5 years']],
   checks:[[1,'Correct Document Type'],[1,'Required Fields Present'],[1,'Seal and Signature Detected'],[1,'Validity in range']] },
 { id:'fac', title:'Faculty Details', file:'Faculty_List.xlsx', date:'03 Jun 2026', status:'Warning' as DocStatus, conf:82,
   fields:[['Declared Faculty','120'],['Listed Faculty','108'],['Difference','12']],
   checks:[[1,'Correct Document Type'],[1,'Required Columns Present'],[0,'Count differs from application form']] },
 { id:'land', title:'Land Documents', file:'Land_Records.pdf', date:'03 Jun 2026', status:'Verified' as DocStatus, conf:94,
   fields:[['Issuing Authority','Sub-Registrar Office'],['Survey No.','214/3A'],['Area','12.4 acres']],
   checks:[[1,'Correct Document Type'],[1,'Ownership matches institution'],[1,'Area meets norm']] },
 { id:'infra', title:'Infrastructure Evidence', file:'Infrastructure_Photos.zip', date:'04 Jun 2026', status:'Review Required' as DocStatus, conf:71,
   fields:[['Images','24'],['Labs Identified','9 of 11'],['Library','Detected']],
   checks:[[1,'Images readable'],[0,'2 declared labs not visible'],[0,'Manual verification suggested']] },
]
