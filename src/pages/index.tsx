import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
import { VideoGrid } from "@/components/VideoGrid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>

      Hi there
      <VideoCard
        title="How to learn coding in 30 days"
        author="Ashutosh Sharma"
        views="46M views"
        timestamp="13 Days ago"
        Logoimage="./striver.jpg"
        thumbnail="./striver.jpg"
      />

      <VideoGrid />

    </div>
  );
}
