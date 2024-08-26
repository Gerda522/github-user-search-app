"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({
  placeholder,
  message,
}: {
  placeholder: string;
  message?: string;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const query = searchParams.get("query")?.toString();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0  justify-center font-spaceMono">
      <label htmlFor="search" className="sr-only font-spaceMono">
        Search GitHub username...
      </label>

      <div className="relative w-full">
        <img
          src="/icon-search.svg"
          alt="Search Icon"
          className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 object-contain"
        />
        <input
          className="peer block w-full rounded-md border h-14  dark:bg-customDarkBlue  dark:border-customDarkBlue border-gray-200 py-[9px] pl-16 text-sm outline-2 placeholder:text-gray-500"
          placeholder={placeholder}
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-customButtonBlue text-white px-4 py-2 rounded-md font-spaceMono"
          onClick={() => handleSearch(query || "")}
        >
          Search
        </button>
        {message && query && (
          <div className="absolute right-24 top-1/2 transform -translate-y-1/2 flex items-center pr-3">
            <span className="text-red-600 text-sm font-spaceMono font-bold">
              {message}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
