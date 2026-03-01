# Asset Dashboard Backend Blueprint

## Overview
This project is an Asset Dashboard that allows users to manage their stock portfolio (KR/US markets) and visualize trends. The current issue is the lack of a backend, causing the "Add Holding" functionality to fail (due to direct CORS calls to Anthropic).

## Objectives
1.  **Firebase Integration**: Initialize Firebase for the project.
2.  **Cloud Functions**: Create a backend function to fetch real-time stock prices and historical data safely.
3.  **Firestore Database**: (Optional but recommended) Replace `localStorage` with Firestore for persistent data.
4.  **Frontend Update**: Modify `main.js` to call Firebase Functions instead of direct API calls.

## Implementation Plan

### Phase 1: Firebase Initialization
- Run `firebase init` (Hosting, Functions, Firestore).
- Configure `.firebaserc` and `firebase.json`.

### Phase 2: Cloud Functions (Backend Logic)
- Implement a `getStockData` function.
- Use a Node.js library (like `yahoo-finance2`) to fetch data without requiring complex API keys for basic usage.
- Handle CORS to allow requests from the web app.

### Phase 3: Frontend Integration
- Update `main.js` to use `httpsCallable` or standard `fetch` to our new Cloud Function.
- Ensure error handling for invalid tickers.

### Phase 4: Persistence (Optional)
- Move portfolio data from `localStorage` to Firestore.

## Current Progress
- [x] Research existing code.
- [ ] Initialize Firebase.
- [ ] Implement Cloud Function for stock data.
- [ ] Update frontend calls.
