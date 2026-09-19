# NS Structural Platform - Product Boundaries

## 1. Purpose

This document defines the boundaries of the NS Structural Consultants digital platform.

Its purpose is to prevent uncontrolled scope expansion and ensure that each capability has a clear place within the overall system.

The platform is divided into three connected systems:

1. Corporate Website
2. Tender Intelligence Platform
3. NS Internal Growth Engine / CRM

These systems may share infrastructure and data where appropriate, but their responsibilities must remain clearly separated.

---

# 2. Corporate Website

## Purpose

The corporate website represents NS Structural Consultants publicly.

Its primary purposes are:

- Establish credibility
- Explain NS services
- Showcase expertise
- Showcase projects and experience
- Generate consultation enquiries
- Introduce the Tender Intelligence product
- Provide useful engineering and industry content

## Core Areas

The corporate website may include:

- Home
- About
- Services
- Projects
- Industries
- Insights
- Tender Intelligence
- Contact
- Request Consultation

## The Corporate Website Is Not

The corporate website should not become:

- The main tender research interface
- The internal CRM
- An administrative dashboard
- A payment management console
- A private customer workspace

Those responsibilities belong to the appropriate product system.

---

# 3. Tender Intelligence Platform

## Purpose

The Tender Intelligence Platform is the customer-facing B2B product.

Its purpose is to help businesses discover, understand and prioritize relevant construction and infrastructure opportunities.

The core product loop is:

Discover → Understand → Match → Connect → Execute

## Core Capabilities

The platform may provide:

- Tender discovery
- Tender search
- Tender filtering
- Tender categorization
- Tender deduplication
- Tender document access where legally and contractually permitted
- Tender summaries
- Eligibility extraction
- Important dates
- Project value information
- Technical requirement extraction
- Location information
- Authority information
- Risk and requirement summaries
- Opportunity scoring
- Personalized tender matching
- Saved tenders
- Saved searches
- Alerts and notifications
- AI-assisted tender analysis
- Engineering support requests

## Paid Value

The platform should not assume that publicly available government information can simply be paywalled.

Paid functionality should primarily provide additional value through:

- Aggregation
- Organization
- Search
- Filtering
- AI analysis
- Opportunity scoring
- Personalized matching
- Alerts
- Workflow
- Research efficiency
- Engineering support

The exact commercial model will be finalized later.

---

# 4. NS Internal Growth Engine / CRM

## Purpose

The Growth Engine is an internal system for NS Structural Consultants.

It is not part of the public customer experience.

Its purpose is to convert relevant tender opportunities into qualified business opportunities for NS.

## Core Capabilities

The system may include:

- Company management
- Contact management
- Lead management
- Opportunity management
- Tender-to-lead relationships
- Lead scoring
- Sales activity tracking
- Notes
- Follow-ups
- Proposal tracking
- Opportunity status
- Conversion tracking
- Outreach management
- Analytics

## CRM Pipeline

The conceptual pipeline is:

Company
↓
Contact
↓
Lead
↓
Opportunity
↓
Proposal
↓
Won / Lost

A tender opportunity may create or contribute to a lead.

---

# 5. Outreach

Outreach is a capability of the internal Growth Engine.

The initial workflow should prioritize controlled and auditable communication.

Conceptual workflow:

Relevant Tender
↓
Relevant Company
↓
Lead Qualification
↓
AI Research
↓
AI Outreach Draft
↓
Human Approval
↓
Communication
↓
Response
↓
CRM Update

AI may assist with research, personalization and drafting.

AI must not independently send sensitive or consequential communications without the required approval workflow.

External platform automation must comply with the relevant platform's terms and APIs.

---

# 6. AI

AI is a supporting capability rather than the product itself.

AI may be used for:

- Tender classification
- Tender summarization
- Requirement extraction
- Eligibility analysis
- Document analysis
- Opportunity scoring
- Company matching
- Lead research
- Outreach drafting
- Response classification
- Internal assistance

AI must not be treated as an unquestionable source of truth.

Where practical, important AI-generated information should reference the source document or source location.

---

# 7. Tender Data Sources

Tender data may originate from:

- Government portals
- Public authorities
- Regulatory bodies
- Procurement systems
- Approved APIs
- Licensed data providers
- Other legally permitted sources

Every source must be evaluated before integration.

The source evaluation should consider:

- Ownership
- Terms of use
- Access method
- API availability
- Collection restrictions
- Rate limits
- Storage rights
- Redistribution rights
- Attribution requirements

The platform must not assume that publicly accessible data is automatically unrestricted for commercial reuse.

---

# 8. Customer Accounts

Customers may eventually have:

- Individual accounts
- Organizations
- Organization members
- Roles
- Subscriptions
- Saved searches
- Saved tenders
- Notifications
- Usage information

Customer-facing functionality must remain separated from internal NS administrative functionality.

---

# 9. Internal Administration

Administrative capabilities belong to a protected internal environment.

Potential capabilities include:

- Tender source management
- Tender ingestion monitoring
- Tender correction
- AI analysis review
- User management
- Organization management
- Subscription management
- Payment monitoring
- CRM management
- Audit logs
- System health monitoring

Administrative functionality must never rely on frontend hiding alone for protection.

---

# 10. Engineering Services

NS Structural Consultants' existing engineering expertise remains an important part of the platform.

Potential service areas include:

- Structural design
- Structural audits
- Repairs and restoration
- Project management consultancy
- FEA / failure analysis
- Water infrastructure engineering
- Solar / infrastructure engineering
- Other approved engineering consultancy services

The platform may connect tender opportunities to relevant NS engineering services.

However, the software platform does not replace professional engineering judgment.

---

# 11. What Is Explicitly Out of Scope for the Initial Product

The initial product should not attempt to build:

- A general-purpose social network
- A general-purpose CRM competing with Salesforce
- A general-purpose project management system
- A general-purpose accounting system
- A general-purpose ERP
- A generic AI chatbot
- A general-purpose document management platform
- An unrestricted web scraping system
- Unrestricted LinkedIn automation
- Autonomous sales agents
- Automated tender submission
- Automated bid submission
- Automated engineering certification
- Automated professional engineering approval

These may be considered in the future only if there is a clear business requirement.

---

# 12. Human-in-the-Loop Boundaries

Human review should remain mandatory for consequential actions.

Examples include:

- Final tender eligibility decisions
- Engineering recommendations
- External sales communication
- Important CRM decisions
- Payment disputes
- Administrative permission changes
- High-impact data corrections

AI should assist people rather than silently replacing responsible human decision-making.

---

# 13. Product Ownership Boundaries

## Corporate Website

Primary responsibility:

Public presence and inbound enquiries.

## Tender Intelligence Platform

Primary responsibility:

Tender discovery, intelligence and customer workflow.

## Growth Engine / CRM

Primary responsibility:

NS sales intelligence, lead management and conversion.

## AI Layer

Primary responsibility:

Assist with analysis, classification, extraction and drafting.

AI does not own business decisions.

---

# 14. Data Ownership Boundaries

Customer-private information must remain isolated from other customers.

Internal NS CRM information must remain separated from customer-facing product data unless a specific approved workflow requires controlled sharing.

Tender source information must retain appropriate source references and provenance.

AI-generated information should retain links to the underlying source where practical.

---

# 15. Architectural Boundary

The initial system should prefer a modular architecture.

The default approach is:

- One primary application platform
- Clearly separated modules
- Shared authentication where appropriate
- Shared database infrastructure where appropriate
- Explicit authorization boundaries
- Background processing when required

Additional services should only be introduced when there is a demonstrated technical or operational reason.

---

# 16. Scope Expansion Rule

A new feature should not automatically be added to the product.

Before adding a significant capability, answer:

1. Which system owns this feature?
2. Which user needs it?
3. What business problem does it solve?
4. What data does it require?
5. What security implications does it introduce?
6. Does it create a new operational dependency?
7. Does it increase infrastructure complexity?
8. Can the existing architecture support it cleanly?
9. Does it belong in the current product phase?
10. Does it require a change to the PRD, architecture or design?

If these questions cannot be answered clearly, the feature should be discussed before implementation.

---

# 17. Future Documents

The following documents will be added later:

- PRD.md
- ARCHITECTURE.md
- DESIGN.md

When those documents are created, they will provide more detailed requirements and implementation direction.

This document remains the high-level boundary definition unless explicitly superseded by an approved product decision.

---

# 18. Core Principle

The platform should remain focused on one central business loop:

Discover opportunities
→ Understand opportunities
→ Identify relevant businesses
→ Connect businesses with NS expertise
→ Convert opportunities into engineering work

Every major feature should strengthen this loop or directly support the infrastructure required to operate it.
