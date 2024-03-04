export default async function getBlog() {
  const response = await fetch("/api/blog", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    cache: "no-cache",
  });

  return await response.json();
}
