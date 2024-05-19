'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import Link from "next/link"
import { Skeleton } from "@/components/ui/skeleton"


export function RefinePage() {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch('https://picsum.photos/200/300');
      setImageSrc(response.url);
    };

    fetchImage();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-[#12012e] to-[#732bbf] dark:from-[#12012e] dark:to-[#732bbf]">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold">Criminal Identification</h2>
          <Link href={'/'}>
            <Button size="icon" variant="ghost">
              <XIcon className="h-5 w-5" />
            </Button>
          </Link>
        </div>
        <div className="p-8">
          <div className="flex justify-center mb-6">
          {imageSrc ? (
              <img
                alt="Generated Face"
                className="rounded-lg"
                height="300"
                src={imageSrc}
                style={{
                  aspectRatio: "300/300",
                  objectFit: "cover",
                }}
                width="300"
              />
            ) : (
              <div className="flex flex-col space-y-3">
                <Skeleton className="h-[250px] w-[300px] rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            )}
          </div>
           <div className="grid gap-4">
            <div className="grid grid-cols-[1fr_auto] items-center gap-2">
              <div>
                <Label htmlFor="eyes">Green Eyes</Label>
                <Slider defaultValue={[50]} id="eyes" max={100} step={1} />
              </div>
              <Button className="shrink-0" size="icon" variant="ghost">
                <XIcon className="h-5 w-5" />
              </Button>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-center gap-2">
              <div>
                <Label htmlFor="nose">Pointed Nose</Label>
                <Slider defaultValue={[50]} id="nose" max={100} step={1} />
              </div>
              <Button className="shrink-0" size="icon" variant="ghost">
                <XIcon className="h-5 w-5" />
              </Button>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-center gap-2">
              <div>
                <Label htmlFor="mouth">Sharp Jawline</Label>
                <Slider defaultValue={[50]} id="mouth" max={100} step={1} />
              </div>
              <Button className="shrink-0" size="icon" variant="ghost">
                <XIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <Link href={'/ResultsPageMain'}>
            <Button className="w-full" size="lg">
              Refine
            </Button>
            </Link>
            <Link href={'/'}>
              <Button className="w-full" size="lg" variant="outline">
                New Generation
              </Button>
            </Link>
          </div>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 px-6 py-4 rounded-b-lg border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400">
          <p>This face generator is powered by AI technology. Adjust the sliders to refine the generated face.</p>
        </div>
      </div>
    </div>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
