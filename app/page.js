import Loader from "@/components/Loader/Loader";
import dynamic from "next/dynamic";

const Tasks = dynamic(
  () => import('@/components/Tasks/Tasks'),
  {
    ssr: false,
    loading: () => (
      <Loader />
    )
  }
)


export default function Home() {
  return (
    <main
      className="w-full min-h-screen px-[5%] 1000px:px-[10%]">

      <p
        className={`text-3xl md:text-5xl font-extrabold text-center bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 text-transparent fixed top-0 left-1/2 -translate-x-1/2`}>
        TODO APP
      </p>

      <Tasks />

    </main>
  );
}
