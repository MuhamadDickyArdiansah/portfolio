import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 ">
      <main className="flex flex-1 w-full sm:items-start">
        {/* HERO Section */}
        <div className="flex flex-col">
          <div>
            <h1 className="font-display font-bold">FULL STACK DEVELOPER</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
