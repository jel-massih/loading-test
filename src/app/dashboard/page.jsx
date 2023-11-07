export const dynamic = "force-dynamic";
export default async function Dashboard() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <div>Dashboard</div>;
}
