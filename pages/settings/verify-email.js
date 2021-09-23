import React from "react";
import Container from "../../components/Container";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { Button } from "../../components/Form";
import useVerifyEmail from "../../hooks/useVerifyEmail";
export default function VerifyEmail() {
  const { resendEmailVerification, loading } = useVerifyEmail();
  return (
    <Layout title="Verify your email address">
      <Container>
        <Card header={"Please verify your email address"}>
          <p className="leading-relaxed mb-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            saepe accusamus. Modi saepe similique optio, minima illo sunt vel,
            molestiae unde voluptas ea esse qui odio excepturi laudantium
            tempore corporis!
          </p>
          <Button onClick={resendEmailVerification}>
            {loading ? "Loading . . . ." : "Resend verification link"}
          </Button>
        </Card>
      </Container>
    </Layout>
  );
}
