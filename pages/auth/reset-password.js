import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSetRecoilState } from "recoil";
import toaster from "toasted-notes";
import Card from "../../components/Card";
import { Button, Error, Input, Label } from "../../components/Form";
import Layout from "../../components/Layout";
import { authCheckState } from "../../store/auth";

export default function ResetPassword() {
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const [form, setForm] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    token: router.query.token,
  });
  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("reset-password", form);
      router.replace("/login");
      toaster.notify("Your password has been reset", {
        position: "bottom-right",
      });
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };
  return (
    <Layout middleware="guest" title="Reset Password">
      <div className="mx-auto max-w-screen-sm px-4">
        <Card
          header={
            <>
              <h1 className="text-gray-800 text-xl font-semibold">
                Reset Password
              </h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </>
          }
        >
          <form onSubmit={registerHandler}>
            <input type="hidden" name="token" value={form.token} />
            <div className="mb-5">
              <Label htmlFor="email">Email</Label>
              <Input
                value={form.email}
                onChange={(value) =>
                  setForm((form) => ({ ...form, email: value.target.value }))
                }
                type="email"
                name="email"
                id="email"
              />
              {errors && errors.email && <Error message={errors.email} />}
            </div>
            <div className="mb-5">
              <Label htmlFor="password">Password</Label>
              <Input
                value={form.password}
                onChange={(value) =>
                  setForm((form) => ({ ...form, password: value.target.value }))
                }
                type="password"
                name="password"
                id="password"
              />

              {errors && errors.password && <Error message={errors.password} />}
            </div>
            <div className="mb-5">
              <Label htmlFor="password_confirmation">Confirm Password</Label>
              <Input
                value={form.password_confirmation}
                onChange={(value) =>
                  setForm((form) => ({
                    ...form,
                    password_confirmation: value.target.value,
                  }))
                }
                type="password"
                name="password_confirmation"
                id="password_confirmation"
              />
            </div>
            <Button>Register</Button>
          </form>
        </Card>
      </div>
    </Layout>
  );
}
