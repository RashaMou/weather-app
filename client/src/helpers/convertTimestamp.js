export function convertTimestamp() {
  const d = new Date();
  const year = d.getFullYear();
  const day = d.toLocaleString("default", { weekday: "long" });
  const month = d.toLocaleString("default", { month: "long" });
  const dayOfMonth = d.getDate();
  const date = `${day} ${month} ${dayOfMonth}, ${year}`;
  return date;
}
