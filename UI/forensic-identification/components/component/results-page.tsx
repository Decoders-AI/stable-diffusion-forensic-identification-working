/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Libre_Franklin } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

libre_franklin({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
'use client';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from 'react';
import { Skeleton } from "@/components/ui/skeleton"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useSearchParams } from "next/navigation";


export function ResultsPage() {
  const searchParams = useSearchParams();

  const [imageSrc1, setImageSrc1] = useState(null);
  const [imageSrc2, setImageSrc2] = useState(null);
  const [imageSrc3, setImageSrc3] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const response1 = await fetch('https://picsum.photos/200/300');
      setImageSrc1(response1.url);
      const response2 = await fetch('https://picsum.photos/200/300');
      setImageSrc2(response2.url);
      const response3 = await fetch('https://picsum.photos/200/300');
      setImageSrc3(response3.url);
    };

    fetchImage();
  }, []);

  return (
    <div className="flex flex-col h-screen">
    <header className="bg-gray-900 text-gray-50 px-4 py-3 flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-lg font-semibold">
          Criminal Identification Platform
          </h1>
        </Link>
        <div className="flex items-center gap-2">
          <Button
            className="rounded-full bg-gray-50 bg-opacity-10 p-2 text-gray-50 transition-colors hover:bg-gray-50/20 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
            size="icon"
            variant="ghost"
          >
            <MinimizeIcon className="h-5 w-5 fill-gray-50" />
            <span className="sr-only">Minimize</span>
          </Button>
          <Button
            className="rounded-full bg-gray-50 bg-opacity-10 p-2 text-gray-50 transition-colors hover:bg-gray-50/20 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
            size="icon"
            variant="ghost"
          >
            <MaximizeIcon className="h-5 w-5 fill-gray-50" />
            <span className="sr-only">Maximize</span>
          </Button>
          <Button
            className="rounded-full bg-gray-50 bg-opacity-10 p-2 text-gray-50 transition-colors hover:bg-gray-50/20 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
            size="icon"
            variant="ghost"
          >
            <PanelTopCloseIcon className="h-5 w-5 fill-gray-50" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </header>

    <main className="mx-0 px-20 py-10 md:py-12 lg:py-14 bg-gradient-to-br from-[#12012e] to-[#732bbf]">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Forensic Identification Results</h1>
        <p className="mt-4 text-lg text-gray-300">Choose a result to refine</p>
      </div>

      <TooltipProvider>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Tooltip>
      <TooltipTrigger>
        <Link href={{
          pathname: '/RefinePageMain',
          query: { image: imageSrc1 }
          }}>
        <div className="group relative flex-1 flex items-center justify-center transition-transform transition-filter duration-300 ease-in-out hover:scale-105 hover:brightness-110">
        {imageSrc1 ? (
        <img
            alt="Forensic Image"
            className="h-full w-full rounded-lg object-cover transition-opacity duration-300"
            height="400"
            src={imageSrc1}
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width="400"
          />) : (
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[300px] w-[370px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
        </div>
        </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click for refinement</p>
        </TooltipContent>
        </Tooltip>

        <Tooltip>
        <TooltipTrigger>
        <Link href={{
          pathname: '/RefinePageMain',
          query: { image: imageSrc2 }
          }}>
        <div className="group relative flex-1 flex items-center justify-center transition-transform transition-filter duration-300 ease-in-out hover:scale-105 hover:brightness-110">
        {imageSrc2 ? (
        <img
            alt="Forensic Image"
            className="h-full w-full rounded-lg object-cover transition-opacity duration-300"
            height="400"
            src={imageSrc2}
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width="400"
          />) : (
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[300px] w-[370px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
        </div>
        </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click for refinement</p>
        </TooltipContent>
        </Tooltip>

        <Tooltip>
        <TooltipTrigger>
        <Link href={{
          pathname: '/RefinePageMain',
          query: { image: imageSrc3 }
          }}>
        <div className="group relative flex-1 flex items-center justify-center transition-transform transition-filter duration-300 ease-in-out hover:scale-105 hover:brightness-110">
        {imageSrc3 ? (
        <img
            alt="Forensic Image"
            className="h-full w-full rounded-lg object-cover transition-opacity duration-300"
            height="400"
            src={imageSrc3}
            style={{
              aspectRatio: "400/400",
              objectFit: "cover",
            }}
            width="400"
          />) : (
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[300px] w-[370px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
        </div>
        </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Click for refinement</p>
        </TooltipContent>
        </Tooltip>
      </div>
      </TooltipProvider>

      <div className="mt-10 flex flex-col items-center">
        <p className="mr-4 text-gray-300 pb-3">
          The prompt entered for this image generation was: "{searchParams.get('prompt')}"
        </p>
        <Link href={'/'}>
        <Button className="bg-white text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
          Regenerate Images
        </Button>
        </Link>
      </div>

    </main>

    <footer className="bg-gray-900 text-gray-50 px-4 py-3 flex items-center justify-between">
        <p className="text-sm">© 2024 Criminal Identification</p>
        <div className="flex items-center gap-2">
          <Button
            className="rounded-full bg-gray-50 bg-opacity-10 p-2 text-gray-50 transition-colors hover:bg-gray-50/20 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
            size="icon"
            variant="ghost"
          >
            <SettingsIcon className="h-5 w-5 fill-gray-50" />
            <span className="sr-only">Settings</span>
          </Button>
          <Button
            className="rounded-full bg-gray-50 bg-opacity-10 p-2 text-gray-50 transition-colors hover:bg-gray-50/20 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
            size="icon"
            variant="ghost"
          >
            <CircleHelpIcon className="h-5 w-5 fill-gray-50" />
            <span className="sr-only">Help</span>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm">By Team Decoders</p>
        </div>
      </footer>
      
    </div>
  )
}

function CircleHelpIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function MaximizeIcon(props) {
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
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  )
}


function MicIcon(props) {
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
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  )
}


function MinimizeIcon(props) {
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
      <path d="M8 3v3a2 2 0 0 1-2 2H3" />
      <path d="M21 8h-3a2 2 0 0 1-2-2V3" />
      <path d="M3 16h3a2 2 0 0 1 2 2v3" />
      <path d="M16 21v-3a2 2 0 0 1 2-2h3" />
    </svg>
  )
}


function PanelTopCloseIcon(props) {
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
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="m9 16 3-3 3 3" />
    </svg>
  )
}


function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function SendIcon(props) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}