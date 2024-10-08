import Search from "./ui/search";
import Profile from "./ui/profile";
import { getUser } from "./lib/actions";
import ModeToggle from "./ui/modetoggle";

export default async function Page({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const user = await getUser(searchParams?.query);
  const message = user?.message === "Not Found" ? "No results" : undefined;

  return (
    <div className="mt-16 p-4 md:p-0">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className=" w-full md:w-2/5">
          <div>
            <div className="flex flex-row items-center justify-between">
              <p className="font-bold text-2xl py-4 font-spaceMono">
                devfinder
              </p>
              <ModeToggle />
            </div>
            <Search placeholder="Search..." message={message} />
          </div>
        </div>
      </div>

      {/* The Profile component is rendered with the user data. */}
      {user && !user.message ? (
        <Profile
          username={user.login}
          createdAt={user.created_at}
          bio={user.bio}
          avatarUrl={user.avatar_url}
          publicRepos={user.public_repos}
          followers={user.followers}
          following={user.following}
          location={user.location}
          twitterUsername={user.twitter_username}
          blog={user.blog}
          company={user.company}
        />
      ) : (
        <Profile
          username="octocat"
          createdAt="2011-01-25T18:44:36Z"
          bio="This is a bio of octocat."
          avatarUrl="https://avatars.githubusercontent.com/u/583231?v=4"
          publicRepos={8}
          followers={5000}
          following={9}
          location="San Francisco"
          twitterUsername="octocat"
          blog="https://github.blog"
          company="@github"
        />
      )}
    </div>
  );
}
