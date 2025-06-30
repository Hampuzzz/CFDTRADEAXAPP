// Struktur för ett färdigt Next.js-projekt (Next 14 App Router)

// 1. Fil: app/page.tsx
import CFDTradeTaxApp from "@/app/CFDTradeTaxApp"

export default function Page() {
  return <CFDTradeTaxApp />
}

// 2. Fil: app/CFDTradeTaxApp.tsx
// (Klistra in hela innehållet från ditt befintliga dokument "Cfd Skatt Webapp")

// 3. Fil: tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

// 4. Fil: postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// 5. Fil: styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

// 6. Fil: app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body>
        <main className="min-h-screen bg-white text-black">
          {children}
        </main>
      </body>
    </html>
  )
}

// 7. package.json
{
  "name": "cfd-tax-app",
  "version": "0.1.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "14.0.0",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "tailwindcss": "^3.3.3",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "@types/react": "^18.2.0",
    "@types/node": "^20.0.0"
  }
}

// 8. Lägg till komponentbibliotek som shadcn/ui om du önskar UI som i exemplet.
