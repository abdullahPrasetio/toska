import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import Container from "../../components/Container";
import Layout from "../../components/Layout";
import { authUserState } from "../../store/auth";

export default function Profile() {
  const authUser = useRecoilValueLoadable(authUserState);
  const router = useRouter();
  useEffect(() => {
    if (authUser.contents && !authUser.contents.has_verified) {
      router.replace("/settings/verify-email");
    }
  }, [authUser.contents]);
  return (
    <Layout middleware="auth" title="Update Profile information">
      <Container>
        <h1 className="text-xl mb-2 font-semibold">
          Update Profile Information
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          incidunt nam nesciunt dicta suscipit saepe! Nostrum, illo rerum? Magni
          incidunt magnam ullam debitis reprehenderit commodi accusantium quidem
          ipsa earum placeat.
        </p>
      </Container>
    </Layout>
  );
}
