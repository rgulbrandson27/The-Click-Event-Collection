
import React from 'react'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { ChevronDownIcon } from '@heroicons/react/16/solid'


const AddVideoForm = () => {

      return (
        <>
        <form className="border-4 border-yellow-400 h-full w-full p-4 rounded-lg bg-white showdow-md px-8 pt-6 pb-8 mb-4">
          <h1 className="text-center text-2xl font-semibold pb-2">New Video</h1>
      

          {/* <label class="block text-gray-700 text-sm font-bold mb-2" for="videoName">Video Name</label> */}
    
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 mb-2 ml-2">
                      <path d="M3.25 4A2.25 2.25 0 0 0 1 6.25v7.5A2.25 2.25 0 0 0 3.25 16h7.5A2.25 2.25 0 0 0 13 13.75v-7.5A2.25 2.25 0 0 0 10.75 4h-7.5ZM19 4.75a.75.75 0 0 0-1.28-.53l-3 3a.75.75 0 0 0-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 0 0 1.28-.53V4.75Z" />
          </svg>
          
          <input class="shadow appearance-none border rounded w-full py-2 mb-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="videoName" type="text" placeholder="Enter Full Title"></input>
          <input class="shadow appearance-none border rounded w-full py-2 mb-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="videoName" type="text" placeholder="Paste Video Link"></input>
          <input class="shadow appearance-none border rounded w-full py-2 mb-6 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="videoName" type="text" placeholder="Enter Channel Name"></input>


          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 mb-2 ml-2">
              <path fillRule="evenodd" d="M1 5.25A2.25 2.25 0 0 1 3.25 3h13.5A2.25 2.25 0 0 1 19 5.25v9.5A2.25 2.25 0 0 1 16.75 17H3.25A2.25 2.25 0 0 1 1 14.75v-9.5Zm1.5 5.81v3.69c0 .414.336.75.75.75h13.5a.75.75 0 0 0 .75-.75v-2.69l-2.22-2.219a.75.75 0 0 0-1.06 0l-1.91 1.909.47.47a.75.75 0 1 1-1.06 1.06L6.53 8.091a.75.75 0 0 0-1.06 0l-2.97 2.97ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" clipRule="evenodd" />
          </svg>
          
          <input class="shadow appearance-none border rounded w-full py-2 mb-8 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="videoName" type="text" placeholder="Add Thumbnail Image"></input>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-7 mb-2 ml-2">
              <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clipRule="evenodd" />
          </svg>  



          <div className="flex align-middle">
   
    
          </div>

          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password"></label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="videoLink" type="text" placeholder="Paste video url"></input>
           </div>

          <div class="flex items-center justify-between">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
            </button>
            <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
            </a>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-8">
            <button type="button" className="text-sm/6 font-semibold text-gray-900 hover:scale-110">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-md hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Video
            </button>
        </div>
      </form>


      <p class="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
      </p>


<form class="w-full max-w-sm">
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
    
  
  </div>
  <div class="md:flex md:items-center mb-6">

  
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3"></div>
    <label class="md:w-2/3 block text-gray-500 font-bold">
      <input class="mr-2 leading-tight" type="checkbox"></input>
      <span class="text-sm">
        Send me your newsletter!
      </span>
    </label>
  </div>

  </div>
  
</form>


      </> 
      )
    }
    
export default AddVideoForm
          {/* <div className="space-y-0">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">Profile</h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                This information will be displayed publicly so be careful what you share.
              </p>
    
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4"> */}
                  
                  {/* <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                    Username
                  </label> */}

    
                  
             
                    



            
                  {/* <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6"></div>
                      <input
                        id="videoName"
                        name="videoName"
                        type="text"
                        placeholder="Past Link to Video"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div> */}

                {/* <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                    About
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                      defaultValue={''}
                    />
                  </div> */}
                  {/* <p className="mt-3 text-sm/6 text-gray-600">Write a few sentences about yourself.</p>
                </div>
    
                <div className="col-span-full">
                  <label htmlFor="photo" className="block text-sm/6 font-medium text-gray-900">
                    Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>
                </div> */}
    
                {/* <div className="col-span-full">
                  <label htmlFor="cover-photo" className="block text-sm/6 font-medium text-gray-900">
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                      <div className="mt-4 flex text-sm/6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
              <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>
    
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                    First name
                  </label>
                  <div className="mt-2">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                    Last name
                  </label>
                  <div className="mt-2">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-3">
                  <label htmlFor="country" className="block text-sm/6 font-medium text-gray-900">
                    Country
                  </label>
                  <div className="mt-2 grid grid-cols-1">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                </div>
    
                <div className="col-span-full">
                  <label htmlFor="street-address" className="block text-sm/6 font-medium text-gray-900">
                    Street address
                  </label>
                  <div className="mt-2">
                    <input
                      id="street-address"
                      name="street-address"
                      type="text"
                      autoComplete="street-address"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-2 sm:col-start-1">
                  <label htmlFor="city" className="block text-sm/6 font-medium text-gray-900">
                    City
                  </label>
                  <div className="mt-2">
                    <input
                      id="city"
                      name="city"
                      type="text"
                      autoComplete="address-level2"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-2">
                  <label htmlFor="region" className="block text-sm/6 font-medium text-gray-900">
                    State / Province
                  </label>
                  <div className="mt-2">
                    <input
                      id="region"
                      name="region"
                      type="text"
                      autoComplete="address-level1"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
    
                <div className="sm:col-span-2">
                  <label htmlFor="postal-code" className="block text-sm/6 font-medium text-gray-900">
                    ZIP / Postal code
                  </label>
                  <div className="mt-2">
                    <input
                      id="postal-code"
                      name="postal-code"
                      type="text"
                      autoComplete="postal-code"
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
            </div> */}
{/*     
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base/7 font-semibold text-gray-900">Notifications</h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                We'll always let you know about important changes, but you pick what else you want to hear about.
              </p>
    
              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm/6 font-semibold text-gray-900">By email</legend>
                  <div className="mt-6 space-y-6">
                    <div className="flex gap-3">
                      <div className="flex h-6 shrink-0 items-center">
                        <div className="group grid size-4 grid-cols-1">
                          <input
                            defaultChecked
                            id="comments"
                            name="comments"
                            type="checkbox"
                            aria-describedby="comments-description"
                            className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          />
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                          >
                            <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-[:checked]:opacity-100"
                            />
                            <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-[:indeterminate]:opacity-100"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-sm/6">
                        <label htmlFor="comments" className="font-medium text-gray-900">
                          Comments
                        </label>
                        <p id="comments-description" className="text-gray-500">
                          Get notified when someones posts a comment on a posting.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex h-6 shrink-0 items-center">
                        <div className="group grid size-4 grid-cols-1">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            aria-describedby="candidates-description"
                            className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          />
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                          >
                            <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-[:checked]:opacity-100"
                            />
                            
                            <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-[:indeterminate]:opacity-100"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-sm/6">
                        <label htmlFor="candidates" className="font-medium text-gray-900">
                          Candidates
                        </label>
                        <p id="candidates-description" className="text-gray-500">
                          Get notified when a candidate applies for a job.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex h-6 shrink-0 items-center">
                        <div className="group grid size-4 grid-cols-1">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            aria-describedby="offers-description"
                            className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          />
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                          >
                            <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-[:checked]:opacity-100"
                            />
                            <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-[:indeterminate]:opacity-100"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-sm/6">
                        <label htmlFor="offers" className="font-medium text-gray-900">
                          Offers
                        </label>
                        <p id="offers-description" className="text-gray-500">
                          Get notified when a candidate accepts or rejects an offer.
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset> */}
{/*     
                <fieldset>
                  <legend className="text-sm/6 font-semibold text-gray-900">Push notifications</legend>
                  <p className="mt-1 text-sm/6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        defaultChecked
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                      />
                      <label htmlFor="push-everything" className="block text-sm/6 font-medium text-gray-900">
                        Everything
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                      />
                      <label htmlFor="push-email" className="block text-sm/6 font-medium text-gray-900">
                        Same as email
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="radio"
                        className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                      />
                      <label htmlFor="push-nothing" className="block text-sm/6 font-medium text-gray-900">
                        No push notifications
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div> */}
    


//clock
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5">
  <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clipRule="evenodd" />
</svg> */}


{/* <div classname="modal fade" id="botanical-modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="botanical-modal" aria-hidden="true">
<div classname="modal-dialog modal-dialog-scrollable">
    <div classname="modal-content">

        <div classname="modal-header">
            <h1 classname="modal-title fs-5" id="botanical-modal-header">Add to Wish List</h1>
            <button type="button" classname="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>


        <div classname="modal-body container-fluid">
            <div classname="mb-3">
            <label for="setName" classname="form-label">Set Name <span classname="required">*</span></label>
            <input type="text" classname="form-control fw-lighter" id="setName" placeholder="Enter Name of Lego Set" aria-label="Name of Set"></input>
        </div>

        <div classname="row">    
            <div classname="col-4 mx-auto mb-1">
                <label for="price" classname="form-label">Enter Price</label>
                    <div classname="input-group mb-1">
                        <span classname="input-group-text">$</span>
                        <input type="text" classname="form-control" id="price" aria-label="Amount"></input>
                    </div>  
            </div>
        </div>

        <div classname="col-4 mx-auto mb-2">
            <label for="year" classname="form-label">Production Year</label>
            <input type="number" classname="form-control fw-lighter" id="year" placeholder="2024" aria-label="Year"></input>
        </div>  
    </div>


    <div classname="row">    
        <div classname="col-4 mx-auto mb-1">
            <label for="pieces" classname="form-label">Number of Pieces</label>
            <input type="number" classname="form-control" id="pieces" aria-label="Number of Pieces"></input>
        </div>  
        <div classname="col-4 mx-auto mb-1">
            <label for="availability" classname="form-label">Availability</label>
            <select name="availability" classname="fw-lighter" id="availability">
                <option value=""></option>
                <option value="Available">Available</option>
                <option value="On Back Order">On Back Order</option>
                <option value="Out of Stock">Out of Stock</option>
                <option value="Sold Out">Sold Out</option>
                <option value="Retired">Retired</option>
                <option value="Coming Soon">Coming Soon</option>
            </select>
        </div>  
    </div>

    <div classname="mb-3">
        <label for="botanical-link" classname="form-label">Link</label>
        <input type="text" classname="form-control fw-lighter" id="botanical-link" placeholder="add link here"></input>
    </div>

    <div classname="mb-3">
        <label for="exampleFormControlInput1" classname="form-label">Add cover image</label>
        <input type="url" classname="form-control fw-lighter" id="coverImage" placeholder="Cover image url"></input>
    </div>

    <div classname="mb-3">
        <label for="exampleFormControlTextarea1" classname="form-label">Add up to four additional images</label>
        <input type="url" classname="form-control mb-1 fw-lighter" id="image-1" placeholder="Image 1 url"></input>
        <input type="url" classname="form-control mb-1 fw-lighter" id="image-2" placeholder="Image 2 url"></input>
        <input type="url" classname="form-control mb-1 fw-lighter" id="image-3" placeholder="Image 3 url"></input>
        <input type="url" classname="form-control mb-1 fw-lighter" id="image-4" placeholder="Image 4 url"></input>
    </div>

    <div>
        <label for="legoSetId" classname="form-label">Lego Set Id  -- (1st initial of category plus 5 digit lego id) <span classname="required">*</span></label>
        <input type="text" classname="form-control mb-1 fw-lighter" id="legoSetId" placeholder="Example:  a12345"></input>
    </div>
</div>


<div classname="modal-footer">
  <button type="button" classname="btn btn-secondary" data-bs-dismiss="modal" onclick="clearFields()">Cancel</button>
  <button type="button" classname="btn btn-primary" id="add-button">Add</button>
</div>
</div>
</div> */}
