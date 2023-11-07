export const dynamic = "force-dynamic";

export default async function Test() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <div>Test Page</div>;
}
