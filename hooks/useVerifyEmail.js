import axios from "axios";
import React from "react";
import { useState } from "react";
import toaster from "toasted-notes";

const useVerifyEmail = () => {
  const [loading, setLoading] = useState(false);
  const resendEmailVerification = async () => {
    setLoading(true);
    try {
      await axios.post("/email/verification-notification");
      setLoading(false);
      toaster.notify("The verification email has been sent", {
        position: "bottom-right",
      });
    } catch (error) {
      setLoading(false);
      console.log("error");
      console.log(error.message);
    }
  };
  return {
    resendEmailVerification,
    loading,
  };
};

export default useVerifyEmail;
