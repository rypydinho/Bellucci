import React, { useState, useEffect } from "react";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.config";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        await fetchUserProfile(currentUser.uid); // Fetch user profile from Firestore
      } else {
        setUser(null);
        setProfileData(null);
        setLoading(false);
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, []);

  const fetchUserProfile = async (uid) => {
    setLoading(true);
    try {
      const docRef = doc(db, "users", uid); // Reference to the user's document
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProfileData(docSnap.data());
      } else {
        setError("No user profile found.");
      }
    } catch (err) {
      setError("Failed to fetch user profile.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading profile...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!user) {
    return <p>You must be logged in to view this page.</p>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>User Profile</h1>
      {profileData ? (
        <div style={styles.profileCard}>
          <p><strong>First Name:</strong> {profileData.firstName}</p>
          <p><strong>Last Name:</strong> {profileData.lastName}</p>
          <p><strong>Email:</strong> {profileData.email}</p>
        </div>
      ) : (
        <p>No profile data found.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    color: "#333",
  },
  profileCard: {
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
    marginTop: "10px",
  },
};

export default UserProfile;