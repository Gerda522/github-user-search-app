import Image from "next/image";

interface ProfileProps {
  username: string;
  createdAt: string;
  bio: string;
  avatarUrl: string;
  publicRepos: number;
  followers: number;
  following: number;
  location: string;
  twitterUsername: string;
  blog: string;
  company: string;
}

// Helper function to display "Not available" if the value is null
const displayValue = (value: string | number | null) => {
  return value !== null && value !== undefined && value !== ""
    ? value
    : "Not available";
};

// The Profile component receives the user data as props and renders it.
export default function Profile({
  username,
  createdAt,
  bio,
  avatarUrl,
  publicRepos,
  followers,
  following,
  location,
  twitterUsername,
  blog,
  company,
}: ProfileProps) {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-row gap-16 justify-center w-2/5 mt-6 p-12 bg-white rounded-xl">
        <div className="">
          <Image
            className="rounded-full"
            src={avatarUrl}
            alt={`${username}'s avatar`}
            width={100}
            height={100}
          />
        </div>
        <div className="">
          <div className="flex flex-row justify-between gap-28 items-center">
            <h2 className="font-medium text-4xl">{username}</h2>
            <p>Joined: {new Date(createdAt).toLocaleDateString()}</p>
          </div>
          <p className="py-4">Bio: {displayValue(bio)}</p>
          <div className="bg-customBlue flex flex-row justify-between p-6 rounded-xl">
            <div className="flex flex-col">
              <p>Public</p>
              <p className="font-bold text-2xl">{displayValue(publicRepos)}</p>
            </div>
            <div className="flex flex-col ">
              <p>Followers</p>
              <p className="font-bold text-2xl">{displayValue(followers)}</p>
            </div>
            <div className="flex flex-col ">
              <p>Following</p>
              <p className="font-bold text-2xl">{displayValue(following)}</p>
            </div>
          </div>
          <div className="flex flex-row gap-12 py-6">
            <div className="flex flex-col gap-4">
              <p className="flex flex-row gap-2">
                <img
                  src="/icon-location.svg"
                  alt=""
                  className="h-6 w-6 object-contain"
                />
                Location: {displayValue(location)}
              </p>

              <p className="flex flex-row gap-2">
                <img
                  src="/icon-twitter.svg"
                  alt=""
                  className="h-6 w-6 object-contain"
                />
                Twitter: {displayValue(twitterUsername)}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="flex flex-row gap-2">
                <img
                  src="/icon-website.svg"
                  alt=""
                  className="h-6 w-6 object-contain"
                />
                Blog: {displayValue(blog)}
              </p>

              <p className="flex flex-row gap-2">
                <img
                  src="/icon-company.svg"
                  alt=""
                  className="h-6 w-6 object-contain"
                />
                Company: {displayValue(company)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
