const tenders = [
  {
    id: "TND-2026-0918",
    title: "Construction of Integrated Commercial Complex",
    authority: "Mumbai Metropolitan Region Development Authority",
    location: "Mumbai, Maharashtra",
    value: "₹42.8 Cr",
    closing: "28 Sep 2026",
    source: "Government eProcurement",
    relevance: "High",
    status: "New",
  },
  {
    id: "TND-2026-0914",
    title: "Structural Rehabilitation of Existing Water Infrastructure",
    authority: "Municipal Corporation",
    location: "Thane, Maharashtra",
    value: "₹8.6 Cr",
    closing: "02 Oct 2026",
    source: "Government eProcurement",
    relevance: "High",
    status: "Analysed",
  },
  {
    id: "TND-2026-0908",
    title: "Development of Industrial Facility and Associated Infrastructure",
    authority: "Industrial Development Corporation",
    location: "Pune, Maharashtra",
    value: "₹21.4 Cr",
    closing: "06 Oct 2026",
    source: "Government eProcurement",
    relevance: "Medium",
    status: "New",
  },
  {
    id: "TND-2026-0903",
    title: "Design and Construction of Multi-Storey Residential Buildings",
    authority: "State Housing Authority",
    location: "Navi Mumbai, Maharashtra",
    value: "₹67.2 Cr",
    closing: "11 Oct 2026",
    source: "Government eProcurement",
    relevance: "High",
    status: "Analysed",
  },
  {
    id: "TND-2026-0897",
    title: "Structural Audit and Repair Works for Public Buildings",
    authority: "Public Works Department",
    location: "Nashik, Maharashtra",
    value: "₹5.1 Cr",
    closing: "15 Oct 2026",
    source: "Government eProcurement",
    relevance: "Medium",
    status: "New",
  },
];

const navigation = [
  { label: "Overview", active: false },
  { label: "Tenders", active: true },
  { label: "Saved", active: false },
  { label: "Alerts", active: false },
  { label: "Companies", active: false },
  { label: "Leads", active: false },
];

export default function TendersPage() {
  return (
    <main className="tender-app">
      <aside className="tender-sidebar">
        <div className="tender-brand">
          <img
            src={
  process.env.NODE_ENV === "production"
    ? "/ns-structural-platform/ns-logo.png"
    : "/ns-logo.png"
}
            alt="NS Structural Consultants"
          />
        </div>

        <div className="workspace-label">Workspace</div>

        <nav className="tender-navigation">
          {navigation.map((item) => (
            <a
              href="#"
              key={item.label}
              className={`tender-nav-item ${
                item.active ? "active" : ""
              }`}
            >
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="tender-sidebar-bottom">
          <div className="workspace-label">Account</div>

          <a href="#" className="tender-nav-item">
            Settings
          </a>

          <a href="#" className="tender-nav-item">
            Help
          </a>
        </div>
      </aside>

      <section className="tender-main">
        <header className="tender-topbar">
          <div className="tender-breadcrumb">
            NS Structural Consultants
            <span>/</span>
            Tender Intelligence
          </div>

          <div className="tender-topbar-actions">
            <button type="button" className="topbar-button">
              Search
            </button>

            <button type="button" className="topbar-button">
              Notifications
            </button>

            <button type="button" className="account-button">
              SW
            </button>
          </div>
        </header>

        <div className="tender-content">
          <div className="tender-heading">
            <div>
              <p className="tender-eyebrow">Tender Intelligence</p>

              <h1>Relevant opportunities</h1>

              <p className="tender-description">
                Discover and evaluate engineering opportunities from
                multiple tender sources.
              </p>
            </div>

            <button type="button" className="tender-primary-button">
              Create alert
            </button>
          </div>

          <div className="tender-toolbar">
            <div className="tender-search">
              <span>⌕</span>

              <input
                type="search"
                placeholder="Search tenders, authorities, locations..."
              />
            </div>

            <button type="button" className="filter-button">
              All locations
            </button>

            <button type="button" className="filter-button">
              All values
            </button>

            <button type="button" className="filter-button">
              Relevance
            </button>
          </div>

          <div className="tender-result-header">
            <div>
              <strong>24 opportunities</strong>
              <span> matching your workspace</span>
            </div>

            <button type="button" className="sort-button">
              Sort: Closing date
            </button>
          </div>

          <div className="tender-table">
            <div className="tender-table-head">
              <span>Opportunity</span>
              <span>Value</span>
              <span>Closing</span>
              <span>Location</span>
              <span>Relevance</span>
              <span></span>
            </div>

            {tenders.map((tender) => (
              <a
                href={`/tenders/${tender.id}`}
                className="tender-row"
                key={tender.id}
              >
                <div className="tender-opportunity">
                  <span className="tender-id">
                    {tender.id}
                  </span>

                  <strong>{tender.title}</strong>

                  <span>{tender.authority}</span>
                </div>

                <div className="tender-value">
                  {tender.value}
                </div>

                <div className="tender-closing">
                  <strong>{tender.closing}</strong>
                </div>

                <div className="tender-location">
                  {tender.location}
                </div>

                <div>
                  <span
                    className={`relevance relevance-${tender.relevance.toLowerCase()}`}
                  >
                    {tender.relevance}
                  </span>

                  <span className="analysis-status">
                    {tender.status}
                  </span>
                </div>

                <span className="tender-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}