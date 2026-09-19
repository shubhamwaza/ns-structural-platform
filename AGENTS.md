# NS Structural Platform - Engineering Rules

## 1. Project Context

This repository contains the software platform being developed for NS Structural Consultants.

The platform will eventually consist of three connected systems:

1. Corporate Website
2. Tender Intelligence Platform
3. NS Internal Growth Engine / CRM

The platform is intended to provide tender discovery, tender intelligence, engineering opportunity identification, and lead generation while also supporting NS Structural Consultants' existing engineering services.

---

## 2. Source of Truth

The repository documentation is the source of truth for implementation decisions.

Before implementing a feature:

1. Read the relevant documentation.
2. Check existing architecture and conventions.
3. Check security implications.
4. Check whether the requested feature conflicts with an existing requirement.
5. If requirements conflict, stop and flag the conflict instead of silently choosing one.

The PRD, Architecture and Design documentation will be added later and will become authoritative once created.

Do not invent requirements that have not been approved.

---

## 3. Engineering Principles

Prioritize:

1. Security
2. Correctness
3. Maintainability
4. Simplicity
5. Performance
6. Scalability
7. Developer experience
8. Cost efficiency

Do not introduce complexity without a clear reason.

Avoid premature:

- Microservices
- Kubernetes
- Kafka
- Redis
- Elasticsearch
- Multiple databases
- Separate backend services
- Complex infrastructure

A modular monolith is the default architecture unless there is a documented reason to introduce additional services.

---

## 4. Security Rules

Security must be considered before implementation, not after.

Never:

- Commit secrets
- Commit API keys
- Commit passwords
- Commit production credentials
- Expose service-role keys to the browser
- Trust client-side authorization
- Trust AI output as authoritative
- Allow users to access another organization's data
- Log sensitive credentials
- Return stack traces to users
- Disable security controls simply to make development easier

All privileged operations must be authorized server-side.

Authentication and authorization are separate concerns and both must be enforced.

Use least privilege wherever possible.

---

## 5. Multi-Tenant Data Isolation

Organizations are treated as tenants.

Any organization-owned resource must have an appropriate tenant boundary.

Examples include:

- Users
- Companies
- Contacts
- Leads
- Saved tenders
- Searches
- Notes
- Outreach
- Billing information
- Internal CRM information

A user belonging to Organization A must never be able to access Organization B's private data.

Tenant isolation must be enforced server-side and, where applicable, at the database/RLS layer.

Never rely solely on frontend filtering for tenant isolation.

---

## 6. AI Security

AI-generated content is not trusted by default.

Tender documents, webpages, PDFs and extracted text must be treated as untrusted external content.

Protect against:

- Prompt injection
- Indirect prompt injection
- Data exfiltration
- Cross-tenant retrieval
- Malicious documents
- Tool abuse
- Hallucinated facts
- Incorrect eligibility conclusions

AI output must never directly authorize:

- Payments
- Account changes
- Permission changes
- Data deletion
- Privileged administrative actions
- External communication without the required approval workflow

Where practical, AI-generated claims should include source references and confidence information.

---

## 7. Tender Data

Government tender information may be publicly available, but that does not automatically mean it can be freely scraped, redistributed or commercially republished.

Before integrating a tender source, document:

- Source owner
- Source URL
- Access method
- API availability
- Terms of use
- Collection restrictions
- Rate limits
- Document access rules
- Storage rights
- Redistribution rights
- Attribution requirements

Never assume scraping is permitted.

Start with a small number of validated sources before expanding ingestion.

---

## 8. Tender Documents

Uploaded or downloaded tender documents must be treated as untrusted files.

File processing must consider:

- File type validation
- File size limits
- Malware scanning where appropriate
- Safe storage
- Access control
- Tenant isolation
- Extraction failures
- OCR failures
- Malicious document content

Do not execute uploaded files.

---

## 9. Payments

Payment status must never be determined solely by the frontend.

Subscription entitlements must be validated server-side.

Payment webhooks must:

- Verify authenticity
- Be idempotent
- Validate event data
- Avoid duplicate processing
- Record relevant audit information

Never trust a client-provided value such as:

```text
isPremium=truewaza@Shubhams-Mac-mini ~ % cd ~
shubhamwaza@Shubhams-Mac-mini ~ % mkdir ns-structural-platform
shubhamwaza@Shubhams-Mac-mini ~ % cd ns-structural-platform
shubhamwaza@Shubhams-Mac-mini ns-structural-platform % git init
Initialized empty Git repository in /Users/shubhamwaza/ns-structural-platform/.git/
shubhamwaza@Shubhams-Mac-mini ns-structural-platform % git remote add origin https://github.com/shubhamwaza/ns-structural-platform.git
shubhamwaza@Shubhams-Mac-mini ns-structural-platform % git remote -v
origin	https://github.com/shubhamwaza/ns-structural-platform.git (fetch)
origin	https://github.com/shubhamwaza/ns-structural-platform.git (push)
shubhamwaza@Shubhams-Mac-mini ns-structural-platform % git status
On branch main

No commits yet

nothing to commit (create/copy files and use "git add" to track)
shubhamwaza@Shubhams-Mac-mini ns-structural-platform % mkdir -p apps/web apps/admin packages/ui packages/config packages/types
mkdir -p docs
mkdir -p .github/workflows
shubhamwaza@Shubhams-Mac-mini ns-structural-platform % find . -maxdepth 3 -type d | sort
.
./.git
./.git/hooks
./.git/info
./.git/objects
./.git/objects/info
./.git/objects/pack
./.git/refs
./.git/refs/heads
./.git/refs/tags
./.github
./.github/workflows
./apps
./apps/admin
./apps/web
./docs
./packages
./packages/config
./packages/types
./packages/ui
shubhamwaza@Shubhams-Mac-mini ns-structural-platform % touch AGENTS.md README.md .gitignore .env.example
shubhamwaza@Shubhams-Mac-mini ns-structural-platform % touch docs/PRD.md \
docs/ARCHITECTURE.md \
docs/SECURITY.md \
docs/DATABASE.md \
docs/API.md \
docs/AI_ARCHITECTURE.md \
docs/DATA_SOURCES.md \
docs/BILLING.md \
docs/CRM.md \
docs/OUTREACH.md \
docs/DEPLOYMENT.md \
docs/TESTING.md \
docs/DECISIONS.md \
docs/BUILD_PLAN.md \
docs/PRODUCT_BOUNDARIES.md
shubhamwaza@Shubhams-Mac-mini ns-structural-platform % find . -maxdepth 3 -type f | sort
./.env.example
./.git/config
./.git/description
./.git/HEAD
./.git/hooks/applypatch-msg.sample
./.git/hooks/commit-msg.sample
./.git/hooks/fsmonitor-watchman.sample
./.git/hooks/post-update.sample
./.git/hooks/pre-applypatch.sample
./.git/hooks/pre-commit.sample
./.git/hooks/pre-merge-commit.sample
./.git/hooks/pre-push.sample
./.git/hooks/pre-rebase.sample
./.git/hooks/pre-receive.sample
./.git/hooks/prepare-commit-msg.sample
./.git/hooks/push-to-checkout.sample
./.git/hooks/sendemail-validate.sample
./.git/hooks/update.sample
./.git/info/exclude
./.gitignore
./AGENTS.md
./docs/AI_ARCHITECTURE.md
./docs/API.md
./docs/ARCHITECTURE.md
./docs/BILLING.md
./docs/BUILD_PLAN.md
./docs/CRM.md
./docs/DATA_SOURCES.md
./docs/DATABASE.md
./docs/DECISIONS.md
./docs/DEPLOYMENT.md
./docs/OUTREACH.md
./docs/PRD.md
./docs/PRODUCT_BOUNDARIES.md
./docs/SECURITY.md
./docs/TESTING.md
./README.md
shubhamwaza@Shubhams-Mac-mini ns-structural-platform % rm docs/PRD.md docs/ARCHITECTURE.md
shubhamwaza@Shubhams-Mac-mini ns-structural-platform % ls -la docs
total 0
drwxr-xr-x  15 shubhamwaza  staff  480 19 Sep 14:36 .
drwxr-xr-x  11 shubhamwaza  staff  352 19 Sep 14:35 ..
-rw-r--r--   1 shubhamwaza  staff    0 19 Sep 14:35 AI_ARCHITECTURE.md
-rw-r--r--   1 shubhamwaza  staff    0 19 Sep 14:35 API.md
-rw-r--r--   1 shubhamwaza  staff    0 19 Sep 14:35 BILLING.md
-rw-r--r--   1 shubhamwaza  staff    0 19 Sep 14:35 BUILD_PLAN.md
-rw-r--r--   1 shubhamwaza  staff    0 19 Sep 14:35 CRM.md
-rw-r--r--   1 shubhamwaza  staff    0 19 Sep 14:35 DATA_SOURCES.md
-rw-r--r--   1 shubhamwaza  staff    0 19 Sep 14:35 DATABASE.md
-rw-r--r--   1 shubhamwaza  staff    0 19 Sep 14:35 DECISIONS.md
-rw-r--r--   1 shubhamwaza  staff    0 19 Sep 14:35 DEPLOYMENT.md
-rw-r--r--   1 shubhamwaza  staff    0 19 Sep 14:35 OUTREACH.md
-rw-r--r--   1 shubhamwaza  staff    0 19 Sep 14:35 
