import Image from "next/image";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-quicksand)]">
      <div className="banner flex flex-col gap-6 box-border rounded-3xl relative overflow-hidden justify-center items-center bg-gradient-to-r from-[#FF416C] to-[#FF4B2B] w-full">
        <h1 className="text-9xl font-bold text-shadow">CodeVortex</h1>
        <p className="font-light text-4xl text-shadow">A powerful IDE for your mobile devices</p>
        <Image
          src={"angle-down-solid.svg"}
          alt=""
          width={32}
          height={32}
          className="cursor-pointer"
        />
      </div>
      <div className="">
        <h1 className="text-6xl font-medium">Super flexibility</h1>
      </div>
    </div>
  );
}
