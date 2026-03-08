# autoswift-mailer

A production-ready starter monorepo for Autoswift with:

- Next.js web dashboard
- Express API server
- BullMQ email worker
- Shared queue/mailer/database packages
- Prisma schema
- Docker deployment starter

## Repository structure

```text
autoswift-mailer
│
├── apps
│   ├── web
│   │   ├── app
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── dashboard/page.tsx
│   │   └── package.json
│   │
│   └── api
│       ├── src
│       │   ├── server.ts
│       │   ├── routes
│       │   │   └── email.ts
│       │   └── services
│       │       └── emailService.ts
│       └── package.json
│
├── services
│   └── worker
│       └── worker.ts
│
├── packages
│   ├── database
│   │   └── prisma.ts
│   │
│   ├── queue
│   │   └── queue.ts
│   │
│   └── mailer
│       └── mailer.ts
│
├── prisma
│   └── schema.prisma
│
├── docker
│   └── Dockerfile
│
├── package.json
└── .env.example
```

## Install

```bash
npm install
npm install express bullmq ioredis @sendgrid/mail prisma @prisma/client
```

## Run

```bash
npm run dev:api
npm run worker
npm run dev:web
```
