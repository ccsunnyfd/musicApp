import { loader } from "@/public/assets";
import Image from "next/image";

const Loader = ({ title }: { title: string }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <Image
      src={loader}
      priority
      alt="loader"
      className="w-32 h-32 object-contain"
    />
    <h1 className="font-bold text-2xl text-white mt-2">{title || "Loading"}</h1>
  </div>
);

export default Loader;
