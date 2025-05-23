# React SPA with Auth0 Authentication

This is a sample Single Page Application (SPA) built with React and Auth0 for authentication. It demonstrates how to implement login, logout, and user profile display using the Auth0 React SDK.

## 🧰 Tech Stack

- React (CRA or Vite)
- Auth0 React SDK
- React Router DOM

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/auth0-spa-react.git
cd auth0-spa-react
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

---

## 🔐 Auth0 Configuration

Before running the app, you need to configure an Auth0 application.

### ✅ Create Application in Auth0

1. Log in to [Auth0 Dashboard](https://manage.auth0.com).
2. Go to **Applications → Applications**.
3. Click **"Create Application"**.
4. Name it (e.g., `React SPA`) and select **Single Page Web Applications**.
5. Click **Create**.

### Create Post-login action in Auth0 tenant for email-verification check
Refer to file 'email-verification-check-action' for source code for action

### 🔧 Update Application Settings

Under the "Settings" tab of your new application, configure the following:

- **Allowed Callback URLs**
  ```
  http://localhost:3000
  ```
- **Allowed Logout URLs**
  ```
  http://localhost:3000
  ```
- **Allowed Web Origins**
  ```
  http://localhost:3000
  ```

Save changes.

---

## ⚙️ Configure Environment Variables

Create a `.env` file in the root of the project and add:

```env
REACT_APP_AUTH0_DOMAIN=your-domain.auth0.com
REACT_APP_AUTH0_CLIENT_ID=your-client-id
```

You can find these values in your Auth0 application's "Settings" page.

---

## 🏃 Running the App Locally

```bash
npm start
# or
yarn start
```

The app will be available at [http://localhost:3000](http://localhost:3000)

---

## 🔁 Features

- Login/Logout via Auth0 Universal Login
- Social login support (e.g., Google, GitHub)
- Display authenticated user's name/email
- React Router ready
- Auth0 error handling
- Optional account linking (advanced)

---

## ⚠️ Notes

- Ensure `http://localhost:3000` is in the allowed origins in Auth0.
- For silent authentication to work in production, your app **must** be served over HTTPS.
- Refresh tokens are disabled on `localhost` to avoid browser security errors.

---

## 📦 Build for Production

```bash
npm run build
```

This creates a production-optimized build in the `/build` directory.

---

## 📄 License

MIT License
