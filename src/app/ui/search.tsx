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
    <div className="flex flex-row justify-center items-center">
      <div className="w-2/5">
        <div className="flex flex-row items-center">
          <p className="font-bold text-2xl py-4">devfinder</p>
        </div>
        <div className="relative flex flex-1 flex-shrink-0  justify-center">
          <label htmlFor="search" className="sr-only">
            Search
          </label>

          <div className="relative w-full">
            <img
              src="/icon-search.svg"
              alt="Search Icon"
              className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 object-contain"
            />
            <input
              className="peer block w-full rounded-md border h-14 border-gray-200 py-[9px] pl-16 text-sm outline-2 placeholder:text-gray-500"
              placeholder={placeholder}
              onChange={(e) => {
                handleSearch(e.target.value);
              }}
              defaultValue={searchParams.get("query")?.toString()}
            />
          </div>

          {message && <div className="text-red-600 mt-2">{message}</div>}
        </div>
      </div>
    </div>
  );
}
