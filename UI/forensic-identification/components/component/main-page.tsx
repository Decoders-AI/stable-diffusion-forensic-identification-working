/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
'use client';
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import  Link from "next/link"
import { useToast } from "@/components/ui/use-toast"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import axios from "axios"; // Import axios for making HTTP requests
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { useState, useEffect } from "react";
import { Value } from "@radix-ui/react-select";
import { send } from "process";
import { warn } from "console";


export function MainPage() {
  const { toast } = useToast()
  const [details, setDetails] = useState('');
  const [safe, setSafe] = useState(true);
  const [quality, setQuality] = useState('speed');

  const sendQuality = async (val) => {
    console.log(val);
    setQuality(val);
    toast({
      title: "Quality Set to " + val + "!",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
    const response = await fetch(`http://127.0.0.1:8000/myapp/receivequality/?quality=${val}`);
  };

  const filterCheck = async (val) => {
    setDetails(val);

    const response = await fetch(`http://127.0.0.1:8000/myapp/filter/?prompt=${val}`);
    const data = await response.json();
    console.log(data.message);
    // if messege is "unsafe" toast an warning else continue
    if (data.message === "unsafe") {
      toast({
        variant: "destructive",
        title: "The Content is Unsafe!",
        description: "Please be cautious with the information you input.",
      });
      setSafe(false);
    }
    else {
      setSafe(true);
    }
  };


  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900/65 text-gray-50 px-4 py-3 flex items-center justify-between fixed top-0 left-0 right-0 backdrop-blur-sm z-50">
        <Link href={"/"}>
          <h1 className="text-lg font-semibold">
          Face Canvas
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
      
      <section className="w-full">
      <div className="flex-1 flex bg-gradient-to-br from-[#12012e] to-[#732bbf] px-10 p-16 mt-16">
        <div className="flex-1 flex flex-col items-center justify-center px-10">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-50">Criminal Face Generation</h1>
            <p className="text-gray-300 py-3">
              Quickly and efficiently input information related to criminal Face Generation.
            </p>
            <div className="relative w-full">

              <div className="relative w-[80%]">
              <Textarea
                className="w-full rounded-lg bg-gray-50 bg-opacity-10 px-4 py-3 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-50/20 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 resize-none min-h-[100px] max-h-[300px]"
                placeholder="Enter details of the suspect"
                value={details}
                onChange={(e) => filterCheck(e.target.value)}
              />
              </div>

              <div className="absolute right-2 top-1/3 -translate-y-1/2 flex items-center space-x-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      className="rounded-full bg-gray-50 bg-opacity-10 p-2 text-gray-50 transition-colors hover:bg-gray-50/20 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
                      size="icon"
                      variant="ghost"
                      onClick={() => {
                        toast({
                          variant: "destructive",
                          title: "Voice input not Available!",
                          description: "Friday, February 10, 2023 at 5:57 PM",
                        })
                      }}
                    >
                      <MicIcon className="h-5 w-5 fill-gray-50" />
                      <span className="sr-only">Voice Input</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Voice Input</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                <TooltipTrigger>
                {safe ? (
                  details.length > 0 ? (
                    <Link href={{
                      pathname: '/ResultsPageMain',
                      query: { prompt: details },
                    }}>
                      <Button
                        className="rounded-full bg-gray-50 bg-opacity-10 p-2 text-gray-50 transition-colors hover:bg-gray-50/20 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
                        size="icon"
                        variant="ghost"
                      >
                        <SendIcon className="h-5 w-5 fill-gray-50" />
                        <span className="sr-only">Send</span>
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      className="rounded-full bg-gray-50 bg-opacity-10 p-2 text-gray-50 transition-colors hover:bg-gray-50/20 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
                      size="icon"
                      variant="ghost"
                      onClick={() => {
                        toast({
                          variant: "destructive",
                          title: "Please Fill in with a Description!"
                        });
                      }}
                    >
                      <SendIcon className="h-5 w-5 fill-gray-50" />
                      <span className="sr-only">Send</span>
                    </Button>
                  )
                ) : (
                  <Button
                    className="rounded-full bg-gray-50 bg-opacity-10 p-2 text-gray-50 transition-colors hover:bg-gray-50/20 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
                    size="icon"
                    variant="ghost"
                    onClick={() => {
                      toast({
                        variant: "destructive",

                        title: "The Content is Unsafe!",
                        description: "Please be cautious with the information you input.",
                      });
                    }}
                  >
                    <SendIcon className="h-5 w-5 fill-gray-50" />
                    <span className="sr-only">Send</span>
                  </Button>
                )}



                </TooltipTrigger>
                  <TooltipContent>
                    <p>Send for Generation</p>
                  </TooltipContent>
                </Tooltip>
                </TooltipProvider>
              </div>

              <div className="py-2 flex items-center space-x-2">
                <Select onValueChange={(val) => sendQuality(val)}>
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="speed" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="speed">
                      speed
                    </SelectItem>
                    <SelectItem value="quality">
                      quality
                    </SelectItem>
                  </SelectContent>
                </Select>
                
                {/* if sendquality is speed show rocket otherwise dont */}
                {quality === "speed" ? (
                  <RocketIcon />
                ) : (
                  <QualityIcon />
                )}
              </div>
            
            </div>
          </div>
        </div>
        
        <HoverCard>
        <HoverCardTrigger>
        <div className="flex-1 flex items-center justify-center transition-transform transition-filter duration-300 ease-in-out hover:scale-105 hover:brightness-110">
          <img
            alt="Criminal Face Generation"
            className="rounded-lg"
            height={450}
            src="/thief.jpg"
            style={{
              aspectRatio: "300/300",
              objectFit: "cover",
            }}
            width={450}
          />
        </div>
        </HoverCardTrigger>
        <HoverCardContent>
          Criminal Face Generation Framework – created and maintained by @Decoders.
        </HoverCardContent>
        </HoverCard>

      </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-10 md:px-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Stable Diffusion Based Face Canvas for Forensic Face Generation
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The Decoders project aims to develop a novel platform that leverages the power of Stable Diffusion, a
                  state-of-the-art generative AI model, to assist law enforcement and forensic investigators in the
                  Face Generation of criminal suspects.
                </p>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last transition-transform transition-filter duration-300 ease-in-out hover:scale-105 hover:brightness-110"
              height="310"
              src="/main page 2.jpg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">Generation</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Stable Diffusion-based Face Generation
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The Decoders platform leverages the power of Stable Diffusion, a state-of-the-art generative AI model,
                to generate realistic and diverse criminal faces. This capability is crucial for aiding forensic
                investigations and suspect Face Generation.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <img
                  alt="Generated Face"
                  className="aspect-square object-cover rounded-md"
                  height="128"
                  src="/block1.jpg"
                  width="128"
                />
              </div>
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <img
                  alt="Generated Face"
                  className="aspect-square object-cover rounded-md"
                  height="128"
                  src="/block2.jpg"
                  width="128"
                />
              </div>
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <img
                  alt="Generated Face"
                  className="aspect-square object-cover rounded-md"
                  height="128"
                  src="/block5.jpg"
                  width="128"
                />
              </div>
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <img
                  alt="Generated Face"
                  className="aspect-square object-cover rounded-md"
                  height="128"
                  src="/block4.jpg"
                  width="128"
                />
              </div>
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <img
                  alt="Generated Face"
                  className="aspect-square object-cover rounded-md"
                  height="128"
                  src="/block3.jpg"
                  width="128"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
                Model Evaluation
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Rigorous Model Evaluation</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The Decoders platform has undergone extensive evaluation to ensure the reliability and accuracy of the
                Stable Diffusion-based face generation model. The results demonstrate the system's effectiveness in
                producing realistic and diverse criminal faces.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 py-5">
              <Card>
                <CardHeader>
                  <CardTitle>Accuracy</CardTitle>
                  <CardDescription>95%</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The model achieves a high accuracy in generating realistic and diverse criminal faces.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Diversity</CardTitle>
                  <CardDescription>92%</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The generated faces exhibit a high level of diversity, covering a wide range of facial features and
                    characteristics.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Inference Time</CardTitle>
                  <CardDescription>0.5 sec</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The model can generate faces in a matter of seconds, enabling rapid and efficient forensic
                    Face Generation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm dark:bg-gray-700">
                Platform Components
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Key Components of the Decoders Platform
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                The Decoders platform is composed of several key components that work together to provide a
                comprehensive solution for forensic Face Generation.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Stable Diffusion Model</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The core of the Decoders platform is the Stable Diffusion model, a state-of-the-art generative AI
                    model that powers the face generation capabilities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Face Preprocessing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The platform includes advanced face preprocessing algorithms to ensure the input images are properly
                    formatted and optimized for the Stable Diffusion model.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Forensic Database</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The Decoders platform integrates with a comprehensive forensic database, allowing investigators to
                    cross-reference generated faces against existing records.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>User Interface</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The platform provides a user-friendly interface that enables law enforcement and forensic teams to
                    seamlessly interact with the face generation and Face Generation capabilities.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Reporting and Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The Decoders platform offers comprehensive reporting and analytics features, allowing users to track
                    the performance and effectiveness of the system in aiding forensic investigations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Security and Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    The platform prioritizes security and privacy, ensuring that all sensitive data and generated faces
                    are securely stored and accessed only by authorized personnel.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      <footer className="bg-gray-900 text-gray-50 px-4 py-3 flex items-center justify-between">
        <p className="text-sm">© 2024 Criminal Face Generation</p>
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
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" {...props}>
    <path fill="currentColor" d="M15.5 21.125c2.682 0 4.875-2.25 4.875-5V5.875c0-2.75-2.193-5-4.875-5s-4.875 2.25-4.875 5v10.25c0 2.75 2.193 5 4.875 5zM21.376 11v5.125c0 3.308-2.636 6-5.876 6s-5.875-2.69-5.875-6V11h-3v5.125c0 4.443 3.195 8.132 7.373 8.86v2.14h-3.372v3h9.75v-3h-3.377v-2.14c4.18-.726 7.374-4.417 7.374-8.86V11h-2.998z"></path>
    </svg>


    // <svg
    //   {...props}
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   strokeWidth="2"
    //   strokeLinecap="round"
    //   strokeLinejoin="round"
    // >
    //   <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
    //   <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    //   <line x1="12" x2="12" y1="19" y2="22" />
    // </svg>
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

function RocketIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path 
        fill="currentColor" 
        opacity="0.3" 
        d="M23.735.238V.236a.25.25 0 0 0-.2-.188c-.256-.04-6.336-.924-14.17 7.051a28 28 0 0 0-2.12 2.576l-4.047 1.166a.25.25 0 0 0-.124.08l-2.856 3.5a.248.248 0 0 0 .126.394l3.887 1.096l.484-.566q.268-.311.574-.58l.54-.472l-.38.608a6 6 0 0 1-.482.66l-.52.606c.008.79.214 1.488.62 2.068L3.68 19.653c-.148.16-.036.272.12.428l1.11 1.086c.153.16.255.258.41.1l1.505-1.534c.34.122 1.162.334 2.4.14l.75-.576q.32-.247.672-.442l.644-.36l-.514.53q-.28.288-.6.534l-.62.476l1.424 3.804a.246.246 0 0 0 .404.09l3.242-3.144a.25.25 0 0 0 .072-.136l.698-4.108c.884-.78 1.78-1.686 2.66-2.694c5.072-5.806 5.798-10.315 5.78-12.487c-.008-.702-.094-1.094-.1-1.122zM16.49 11.165c-1.274 1.296-3.1 1.564-4.082.6c-.98-.962-.744-2.794.53-4.09s3.1-1.566 4.08-.602c.982.964.746 2.796-.528 4.092"></path>
    </svg>
  )
}

function QualityIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
    <path fill="currentColor" opacity="0.3" d="M14.5 13.5h2v-3h-2M18 14a1 1 0 0 1-1 1h-.75v1.5h-1.5V15H14a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1m-7 5H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11m8-5H5c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Z"></path>
    </svg>
  )
}

function SendIcon(props) {
  return (

    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="-1 -1 17 17" {...props}>
    <path fill="currentColor" fillRule="evenodd" d="M11.821.098a1.62 1.62 0 0 1 2.077 2.076l-3.574 10.712a1.62 1.62 0 0 1-1.168 1.069a1.599 1.599 0 0 1-1.52-.434l-1.918-1.909l-2.014 1.042a.5.5 0 0 1-.73-.457l.083-3.184l7.045-5.117a.625.625 0 1 0-.735-1.012L2.203 8.088l-1.73-1.73a1.6 1.6 0 0 1-.437-1.447a1.62 1.62 0 0 1 1.069-1.238h.003L11.82.097Z" clipRule="evenodd"></path>
    </svg>
    //  <svg
    //   {...props}
    //   xmlns="http://www.w3.org/2000/svg"
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill="none"
    //   stroke="currentColor"
    //   strokeWidth="2"
    //   strokeLinecap="round"
    //   strokeLinejoin="round"
    // >
    //   <path d="m22 2-7 20-4-9-9-4Z" />
    //   <path d="M22 2 11 13" />
    // </svg>
  )
}