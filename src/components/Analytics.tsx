"use client";

import { useEffect } from "react";
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBSeGGxhMqyf8sNdJhE5Nd9lhUUuwB49zQ",
  authDomain: "diablo-4ac39.firebaseapp.com",
  projectId: "diablo-4ac39",
  storageBucket: "diablo-4ac39.firebasestorage.app",
  messagingSenderId: "10429220526",
  appId: "1:10429220526:web:90ef752670dcec6dc94f3f",
  measurementId: "G-B85H3YYC1J",
};

export default function Analytics() {
  useEffect(() => {
    isSupported().then((ok) => {
      if (!ok) return;
      const app = getApps()[0] ?? initializeApp(firebaseConfig);
      getAnalytics(app);
    });
  }, []);

  return null;
}
