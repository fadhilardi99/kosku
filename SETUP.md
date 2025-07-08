# Setup Authentication System

## 1. Environment Variables

Buat file `.env.local` di root project dengan konten berikut:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/kosku_db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Prisma
PRISMA_GENERATE_DATAPROXY=true
```

## 2. Database Setup

1. Pastikan PostgreSQL sudah terinstall dan running
2. Buat database baru dengan nama `kosku_db`
3. Update `DATABASE_URL` di `.env.local` dengan kredensial database Anda
4. Jalankan migrasi database:

```bash
npx prisma migrate dev --name init
```

## 3. Generate Prisma Client

```bash
npx prisma generate
```

## 4. Install Dependencies

```bash
npm install
```

## 5. Run Development Server

```bash
npm run dev
```

## 6. Testing

1. Buka http://localhost:3000
2. Klik "Sign Up" untuk membuat akun baru
3. Setelah registrasi berhasil, Anda akan diarahkan ke halaman login
4. Login dengan email dan password yang sudah dibuat
5. Setelah login berhasil, Anda akan diarahkan ke dashboard

## Features

- ✅ User registration dengan validasi
- ✅ User login dengan NextAuth
- ✅ Protected routes (dashboard)
- ✅ Session management
- ✅ Password hashing dengan bcrypt
- ✅ Modern UI dengan Tailwind CSS
- ✅ Responsive design
- ✅ Error handling
- ✅ Loading states

## File Structure

```
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       ├── [...nextauth]/
│   │       │   └── route.ts          # NextAuth API route
│   │       └── register/
│   │           └── route.ts          # Registration API
│   ├── auth/
│   │   ├── signin/
│   │   │   └── page.tsx             # Login page
│   │   └── signup/
│   │       └── page.tsx             # Register page
│   ├── dashboard/
│   │   └── page.tsx                 # Protected dashboard
│   ├── layout.tsx                   # Root layout with SessionProvider
│   ├── page.tsx                     # Home page
│   └── providers.tsx                # NextAuth SessionProvider
├── lib/
│   └── auth.ts                      # NextAuth configuration
└── generated/
    └── prisma/                      # Generated Prisma client
```

## Next Steps

1. Tambahkan fitur email verification
2. Implementasi password reset
3. Tambahkan OAuth providers (Google, GitHub, dll)
4. Tambahkan role-based access control
5. Implementasi refresh tokens
6. Tambahkan rate limiting
7. Implementasi 2FA
