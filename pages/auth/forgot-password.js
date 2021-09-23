import axios from "axios";
import React, { useState } from "react";
import toaster from "toasted-notes";
import Card from "../../components/Card";
import Container from "../../components/Container";
import { Button, Error, Input, Label } from "../../components/Form";
import Layout from "../../components/Layout";

export default function ForgotPassword() {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("forgot-password", { email });
      toaster.notify(data.message, { position: "bottom-right" });
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };
  return (
    <Layout title="Forgot Password">
      <Container>
        <div className="max-w-screen-sm max-auto">
          <Card header="Forgot Password">
            <form onSubmit={submitHandler}>
              <div className="mb-6">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {errors && errors.email && <Error message={errors.email} />}
              </div>

              <div className="mb-6">
                <Button>Send Password Reset Link</Button>
              </div>
            </form>
          </Card>
        </div>
      </Container>
    </Layout>
  );
}
