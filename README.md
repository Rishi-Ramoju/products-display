## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Structure

-->User will be started with a Login/Sign Up page. User can switch between Login and Sign Up by clicking the underlined text at the bottom of the form.

-->On Login/Sign Up user will be re-directed to Products Display page.

-->On Products Display page, user will find the products displayed in a list with pagination, search bar, sort options.

-->By clicking on any product, user will be re-directed to Product Details Display page where user will find more details about the selected product.

-->On both Products Display page and Product Details Display page, user will also find a logout button. Upon clicking which, user will be redirected to Login/Sign Up page and user data stored on the browser will be deleted.