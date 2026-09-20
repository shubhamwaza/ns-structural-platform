export type Tender = {
  id: string;
  title: string;
  authority: string;
  location: string;
  value: number;
  closing: string;
  source: string;
  relevance: "High" | "Medium" | "Low";
  status: "New" | "Analysed";
};

export const tenders: Tender[] = [
  {
    id: "TND-2026-0918",
    title: "Construction of Integrated Commercial Complex",
    authority: "Mumbai Metropolitan Region Development Authority",
    location: "Mumbai, Maharashtra",
    value: 42.8,
    closing: "2026-09-28",
    source: "Government eProcurement",
    relevance: "High",
    status: "New",
  },
  {
    id: "TND-2026-0914",
    title: "Structural Rehabilitation of Existing Water Infrastructure",
    authority: "Municipal Corporation",
    location: "Thane, Maharashtra",
    value: 8.6,
    closing: "2026-10-02",
    source: "Government eProcurement",
    relevance: "High",
    status: "Analysed",
  },
  {
    id: "TND-2026-0908",
    title: "Development of Industrial Facility and Associated Infrastructure",
    authority: "Industrial Development Corporation",
    location: "Pune, Maharashtra",
    value: 21.4,
    closing: "2026-10-06",
    source: "Government eProcurement",
    relevance: "Medium",
    status: "New",
  },
  {
    id: "TND-2026-0903",
    title: "Design and Construction of Multi-Storey Residential Buildings",
    authority: "State Housing Authority",
    location: "Navi Mumbai, Maharashtra",
    value: 67.2,
    closing: "2026-10-11",
    source: "Government eProcurement",
    relevance: "High",
    status: "Analysed",
  },
  {
    id: "TND-2026-0897",
    title: "Structural Audit and Repair Works for Public Buildings",
    authority: "Public Works Department",
    location: "Nashik, Maharashtra",
    value: 5.1,
    closing: "2026-10-15",
    source: "Government eProcurement",
    relevance: "Medium",
    status: "New",
  },
  {
    id: "TND-2026-0889",
    title: "Engineering Consultancy for Urban Infrastructure Development",
    authority: "Urban Development Authority",
    location: "Aurangabad, Maharashtra",
    value: 12.7,
    closing: "2026-10-18",
    source: "Government eProcurement",
    relevance: "High",
    status: "Analysed",
  },
  {
    id: "TND-2026-0878",
    title: "Construction of Regional Logistics and Warehousing Facility",
    authority: "State Industrial Corporation",
    location: "Nagpur, Maharashtra",
    value: 31.5,
    closing: "2026-10-22",
    source: "Government eProcurement",
    relevance: "Medium",
    status: "New",
  },
  {
    id: "TND-2026-0869",
    title: "Structural Design Consultancy for Hospital Expansion",
    authority: "State Health Infrastructure Board",
    location: "Mumbai, Maharashtra",
    value: 16.9,
    closing: "2026-10-27",
    source: "Government eProcurement",
    relevance: "High",
    status: "Analysed",
  },
  {
    id: "TND-2026-0858",
    title: "Bridge Rehabilitation and Strengthening Works",
    authority: "Public Works Department",
    location: "Kolhapur, Maharashtra",
    value: 9.8,
    closing: "2026-11-02",
    source: "Government eProcurement",
    relevance: "High",
    status: "New",
  },
  {
    id: "TND-2026-0847",
    title: "Consultancy Services for Industrial Park Development",
    authority: "Industrial Development Corporation",
    location: "Nashik, Maharashtra",
    value: 18.3,
    closing: "2026-11-08",
    source: "Government eProcurement",
    relevance: "Medium",
    status: "New",
  },
];