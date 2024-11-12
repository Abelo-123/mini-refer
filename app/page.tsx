"use client"
import React, { useEffect, useState } from 'react';

const MiniApp = () => {
  const [referralId, setReferralId] = useState(null);

  useEffect(() => {
    // Extract the 'ref' parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref'); // Get the 'ref' parameter
    if (ref) {
      setReferralId(ref); // Set the referral ID in state
    }
  }, []);

  return (
    <div>
      <h1>Welcome to the Mini App</h1>
      {referralId ? (
        <p>Your referral ID is {referralId}</p>
      ) : (
        <p>No referral ID found.</p>
      )}
      {/* Rest of the mini app content */}
    </div>
  );
};

export default MiniApp;
