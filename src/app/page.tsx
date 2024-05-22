import  { Loader, AllGames} from "@/components";
import { Suspense } from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  return (
    <main id="home" className="">
      <Suspense fallback={<Loader />}>
        {/* @ts-expect-error Server Component */}
        <AllGames filter={searchParams['filter']} />
      </Suspense>
    </main>
  );
}
