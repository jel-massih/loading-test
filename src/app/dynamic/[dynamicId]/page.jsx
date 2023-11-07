export default async function Dynamic({ params: { dynamicId } }) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <div>Dynamic Page Id: {dynamicId}</div>;
}
