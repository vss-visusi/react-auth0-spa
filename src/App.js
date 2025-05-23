
import { useEffect, useState} from 'react';
import { useAuth0 } from '@auth0/auth0-react';



import { useAuthError } from './AuthErrorHandler';

function App() {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();
  const authError = useAuthError(); 
  
  // Background image URL configurable via environment variable
  const backgroundImageUrl = process.env.REACT_APP_BG_IMAGE_URL ||
    'https://images.unsplash.com/photo-1511316695145-4992006ffddb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J1aXNlfGVufDB8fDB8fHww';


    if (isLoading) {
      return (
        <div
          className="loading"
          style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}
        >
          Loading...
        </div>
      );
    }
  
    return (
      <div
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '2rem',
            transform: 'translateY(-50%)',
            width: '320px',
            background: '#FFFFFF', // no transparency for solidity
            borderRadius: '6px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <h2 style={{ marginBottom: '1.5rem', color: '#333', fontSize: '1.25rem' }}>Welcome to Cruise0</h2>
  
          {authError && (
            <div
              style={{
                background: '#fdecea',
                color: '#b71c1c',
                padding: '0.75rem 1rem',
                borderRadius: '4px',
                marginBottom: '1rem',
                fontSize: '0.9rem',
              }}
            >
              <strong>Error:</strong> {authError.description}
            </div>
          )}
  
          {!isAuthenticated ? (
            <button
              onClick={() => loginWithRedirect()}
              style={{
                background: '#4169E1',
                color: '#fff',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
                width: '100%',
              }}
            >
              Sign in
            </button>
          ) : (
            <>
              <p style={{ margin: '1rem 0', color: '#333' }}>
                Welcome, <strong>{user.name}</strong>
              </p>
              <button
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                style={{
                  background: '#777',
                  color: '#fff',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  width: '100%',
                }}
              >
                Log Out
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
  
  export default App;
  