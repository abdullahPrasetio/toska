import Container from "../components/Container";
import Layout from "../components/Layout";

export default function Dashboard() {
  return (
    <Layout middleware="auth" title="Dashboard">
      <Container>
        <h1 className="text-lg font-semibold mb-2">Dashboard</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, nobis
        tempore! Quo pariatur impedit molestiae? Itaque laudantium sequi,
        laboriosam sunt, quod in eum neque dignissimos rem accusamus odio
        incidunt. Praesentium.
      </Container>
    </Layout>
  );
}
