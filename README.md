## Frontend Tech Stack Used

1. Next.js - (built on top of React.js. Used features like server-side rendering, static rendering, file routing, Link, Image, Head components)
2. TypeScript - (helps in robust syntax and error management for Javascript. Created Types and Interfaces in this project too)
3. Headless UI - (gives out-of-the-box components to add in project. Used Modal component)
4. Material UI - (similar to Headless UI. Only used their Icons library in this build)
5. React Hook Form - (comprehensive library for validation in login/sign up. Used couple of rules (required, min length) for this build)
6. Recoil - (state management library. Used Recoil to store announcements from Admin to help in mapping through them to display in dashboards)
7. Next Transpile Modules - (to effectively fetch the class timings after server-side rendering them)
8. Tailwind Scrollbar - (to customize scrollbar from regular white to a thin red one)
9. Tailwind CSS - (best in-text CSS styling with utility classes. Refer globals.css in styles folder for additional global custom styles used)

## Backend Tech Stack Used

1. Firebase Auth - (to securely store registered users)
2. Firebase Cloud Firestore - (a NoSQL database that stores items in collections and documents. Created 3 collections in this build and also made a couple of sub-collections)
3. Firebase Cloud Functions - (used alongside the Stripe payments extension. Was required when building update class timing functionality)
4. Run payments with Stripe Firebase extension - (used for creating Stripe checkout and portal features)
6. Custom hooks - (created them to help make the authentication, fetching of user data for enrollment, and announements mainstream across the whole application)
