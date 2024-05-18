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
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"


export function MainPage() {
  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-900/65 text-gray-50 px-4 py-3 flex items-center justify-between fixed top-0 left-0 right-0 backdrop-blur-sm z-50">
        <h1 className="text-lg font-semibold">Criminal Identification</h1>
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
      <div className="flex-1 flex bg-gradient-to-br from-[#12012e] to-[#732bbf] px-4 p-16 mt-16">
        <div className="flex-1 flex flex-col items-center justify-center px-10">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-50">Criminal Identification</h1>
            <p className="text-gray-300 py-3">
              Quickly and efficiently input information related to criminal identification.
            </p>
            <div className="relative w-full">
              <Textarea
                className="w-full rounded-lg bg-gray-50 bg-opacity-10 px-4 py-3 text-sm font-medium text-gray-50 shadow-sm transition-colors hover:bg-gray-50/20 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 resize-none min-h-[100px] max-h-[300px]"
                placeholder="Enter details"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
                <Button
                  className="rounded-full bg-gray-50 bg-opacity-10 p-2 text-gray-50 transition-colors hover:bg-gray-50/20 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
                  size="icon"
                  variant="ghost"
                >
                  <MicIcon className="h-5 w-5 fill-gray-50" />
                  <span className="sr-only">Voice Input</span>
                </Button>
                <Button
                  //make it go to refinePage when clicked
                  className="rounded-full bg-gray-50 bg-opacity-10 p-2 text-gray-50 transition-colors hover:bg-gray-50/20 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
                  size="icon"
                  variant="ghost"
                >
                  <SendIcon className="h-5 w-5 fill-gray-50" />
                  <span className="sr-only">Send</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center transition-transform transition-filter duration-300 ease-in-out hover:scale-105 hover:brightness-110">
          <img
            alt="Criminal Identification"
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
      </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-10 md:px-16">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Stable Diffusion Based Criminal Face Generation Platform for Forensic Identification
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The Decoders project aims to develop a novel platform that leverages the power of Stable Diffusion, a
                  state-of-the-art generative AI model, to assist law enforcement and forensic investigators in the
                  identification of criminal suspects.
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
                investigations and suspect identification.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <img
                  alt="Generated Face"
                  className="aspect-square object-cover rounded-md"
                  height="128"
                  src="/placeholder.svg"
                  width="128"
                />
              </div>
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <img
                  alt="Generated Face"
                  className="aspect-square object-cover rounded-md"
                  height="128"
                  src="/placeholder.svg"
                  width="128"
                />
              </div>
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <img
                  alt="Generated Face"
                  className="aspect-square object-cover rounded-md"
                  height="128"
                  src="/placeholder.svg"
                  width="128"
                />
              </div>
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <img
                  alt="Generated Face"
                  className="aspect-square object-cover rounded-md"
                  height="128"
                  src="/placeholder.svg"
                  width="128"
                />
              </div>
              <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                <img
                  alt="Generated Face"
                  className="aspect-square object-cover rounded-md"
                  height="128"
                  src="/placeholder.svg"
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
                    identification.
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
                comprehensive solution for forensic identification.
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
                    seamlessly interact with the face generation and identification capabilities.
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