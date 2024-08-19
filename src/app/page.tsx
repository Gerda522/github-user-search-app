import Image from "next/image";
import Search from "./ui/search";
import Account from "./ui/account";
import { getUser } from "./lib/actions";

export default async function Page({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const user = await getUser(searchParams?.query);

  return (
    <div>
      <h1>devfinder</h1>

      <Search placeholder="Search..." />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Account />
    </div>
  );
}
