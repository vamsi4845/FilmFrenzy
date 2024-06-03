<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">FILMFRENZY</h1>
</p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat&logo=Prisma&logoColor=white" alt="Prisma">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Repository Structure

```sh
└── FilmFrenzy/
    ├── README.md
    ├── app
    │   ├── (auth)
    │   │   ├── layout.tsx
    │   │   ├── login
    │   │   │   └── page.tsx
    │   │   └── sign-up
    │   │       └── page.tsx
    │   ├── actions.tsx
    │   ├── api
    │   │   └── auth
    │   │       └── [...nextauth]
    │   │           └── route.ts
    │   ├── components
    │   │   ├── GithubSignInButton.tsx
    │   │   ├── GoogleSignInButton.tsx
    │   │   ├── MovieButtons.tsx
    │   │   ├── MovieCard.tsx
    │   │   ├── MovieVideo.tsx
    │   │   ├── Navbar.tsx
    │   │   ├── NextAuthProvider.tsx
    │   │   ├── RecentlyAdded.tsx
    │   │   ├── UserNav.tsx
    │   │   └── VideoPlayerModal.tsx
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── home
    │   │   ├── [genre]
    │   │   │   └── page.tsx
    │   │   ├── layout.tsx
    │   │   ├── page.tsx
    │   │   └── user
    │   │       └── list
    │   │           └── page.tsx
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── utils
    │       ├── auth.ts
    │       └── db.ts
    ├── components
    │   └── ui
    │       ├── avatar.tsx
    │       ├── button.tsx
    │       ├── dialog.tsx
    │       ├── dropdown-menu.tsx
    │       └── input.tsx
    ├── components.json
    ├── lib
    │   └── utils.ts
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── prisma
    │   └── schema.prisma
    ├── public
    │   ├── avatar.png
    │   ├── github.svg
    │   ├── google.svg
    │   ├── login_background.jpg
    │   └── logo.svg
    ├── tailwind.config.ts
    └── tsconfig.json
```

##  Getting Started

###  Installation

1. Clone the FilmFrenzy repository:

```sh
git clone https://github.com/vamsi4845/FilmFrenzy
```

2. Change to the project directory:

```sh
cd FilmFrenzy
```

3. Install the dependencies:

```sh
npm install
```

###  Running FilmFrenzy

Use the following command to run FilmFrenzy:

```sh
npm run dev
```

---
