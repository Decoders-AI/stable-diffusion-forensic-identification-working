'use client';
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

import { useSearchParams } from "next/navigation";

export function RefinePage() {
  const searchParams = useSearchParams();
  const [imageSrc, setImageSrc] = useState(null);
  const [choicesList, setChoicesList] = useState([]);
  const [activeSliders, setActiveSliders] = useState([]);
  const [sliderValues, setSliderValues] = useState({});

  useEffect(() => {
    const fetchImage = async () => {
      const response = await fetch('https://picsum.photos/200/300');
      setImageSrc(response.url);
    };

    const fetchChoicesList = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/myapp/receivechoices/');
        if (response.ok) {
          const data = await response.json();
          console.log('Choices List:', data.choices);
          setChoicesList(data.choices);
          setActiveSliders(data.choices); // Set all choices as active initially
        } else {
          console.error('Failed to fetch choices list');
        }
      } catch (error) {
        console.error('Error fetching choices list:', error);
      }
    };

    fetchImage();
    fetchChoicesList();
  }, []);

  const toggleSlider = (choice) => {
    setActiveSliders(prevSliders => {
      if (prevSliders.includes(choice)) {
        return prevSliders.filter(item => item !== choice);
      } else {
        return [...prevSliders, choice];
      }
    });
  };

  // Function to handle slider value changes
  const handleSliderChange = (choice, value) => {
    setSliderValues(prevValues => ({
      ...prevValues,
      [choice]: value[0] // Access the first value in the array
    }));
  };

  const refineFace = async () => {
    try {
      const csrftoken = getCookie('csrftoken');
      
      // Construct payload with choices and slider values
      const payload = {
        choices: activeSliders.map(choice => ({
          choice,
          sliderValue: sliderValues[choice] || 50 // Default value if slider value not found
        }))
      };
  
      const response = await fetch('http://127.0.0.1:8000/myapp/receiveslidersinput/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken // Include CSRF token in headers
        },
        body: JSON.stringify(payload)
      });
  
      if (response.ok) {
        // Handle success
        window.location.href = '/ResultsPageMain';
      } else {
        console.error('Failed to refine face:', response.statusText);
      }
    } catch (error) {
      console.error('Error refining face:', error);
    }
  };

  // Function to get CSRF token from cookie
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gradient-to-br from-[#12012e] to-[#732bbf] dark:from-[#12012e] dark:to-[#732bbf]">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
          <Link href={"/"}>
            <h2 className="text-lg font-semibold">Criminal Identification Platform</h2>
          </Link>
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
                src={searchParams.get('image')}
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
            {choicesList.map((choice, index) => (
              <div key={index} className="grid grid-cols-[1fr_auto] items-center gap-2">
                {activeSliders.includes(choice) && (
                  <div>
                    <Label htmlFor={choice}>{choice}</Label>
                    <Slider
                      defaultValue={[sliderValues[choice] || 50]} // Set default value from sliderValues
                      id={choice}
                      max={100}
                      step={1}
                      onValueChange={(value) => handleSliderChange(choice, value)}
                    />
                  </div>
                )}
                <Button className="shrink-0" size="icon" variant="ghost" onClick={() => toggleSlider(choice)}>
                  <XIcon className="h-5 w-5" />
                </Button>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <Button className="w-full" size="lg" onClick={refineFace}>
              Refine
            </Button>
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
