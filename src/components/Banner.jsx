// import React from 'react'

export const Banner = () => {


  return (
    <>
        <div class="relative rounded-2xl mt-10 md:mb-52 md:my-10 md:mx-320">
        <ul id="slider">
          <li class="md:h-1/4 w-full relative">
            <img
              class="drop-shadow-2xl h-full w-full rounded-2xl object-cover"
              src="images/carousel-1.jpg"
              alt=""
            />
            <div class="flex gap-5 absolute mx-5 top-64 lg:top-[80%]">
              <div class="bg-green-500 flex relative rounded-lg text-white">
                <div class="lg:my-10 lg:ml-10 hidden lg:block">
                  <h2 class="text-white font-bold text-2xl">Organic Fruits</h2>
                  <p class="my-3">
                    aperiam laudantium ipsam inventore. Repellat, laboriosam!
                  </p>
                  <a class="flex" href="">
                    <span class="mr-2">Read More </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
                <div class="w-full hidden lg:block">
                  <img
                    class="drop-shadow-2xl h-full"
                    src="images/fruit.png"
                    alt=""
                  />
                </div>
              </div>

              <div class="bg-orange-500 rounded-lg flex text-white">
                <div class="lg:py-5 lg:pl-5 hidden lg:block">
                  <h2 class="text-white font-bold text-2xl">
                    Organic Vegetables
                  </h2>
                  <p class="my-3">
                    aperiam laudantium ipsam inventore. Repellat, laboriosam!
                  </p>
                  <a class="flex my-2" href="">
                    <span class="mr-2">Read More </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
                <div class="w-full hidden lg:block">
                  <img
                    class="drop-shadow-2xl h-full"
                    src="images/vegetable.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </li>

          <li class="lg:h-1/4 w-full relative hidden">
            <img
              class="drop-shadow-2xl h-full w-full rounded-2xl object-cover"
              src="images/carousel-2.jpg"
              alt=""
            />
            <div class="flex gap-5 absolute mx-5 top-64 lg:top-[80%]">
              <div class="bg-green-500 flex relative rounded-lg text-white">
                <div class="lg:my-10 lg:ml-10 hidden lg:block">
                  <h2 class="text-white font-bold text-2xl">Organic Fruits</h2>
                  <p class="my-3">
                    aperiam laudantium ipsam inventore. Repellat, laboriosam!
                  </p>
                  <a class="flex" href="">
                    <span class="mr-2">Read More </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
                <div class="w-full hidden lg:block">
                  <img
                    class="drop-shadow-2xl h-full"
                    src="images/fruit.png"
                    alt=""
                  />
                </div>
              </div>

              <div class="bg-orange-500 rounded-lg flex text-white">
                <div class="lg:py-5 lg:pl-5 hidden lg:block">
                  <h2 class="text-white font-bold text-2xl">
                    Organic Vegetables
                  </h2>
                  <p class="my-3">
                    aperiam laudantium ipsam inventore. Repellat, laboriosam!
                  </p>
                  <a class="flex my-2" href="">
                    <span class="mr-2">Read More </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </a>
                </div>
                <div class="w-full hidden lg:block">
                  <img
                    class="drop-shadow-2xl h-full"
                    src="../img/vegetable.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div class="absolute flex h-full w-full left-0 top-0 px-4">
          <div class="my-auto w-full flex justify-between">
            <button

              class="bg-white p-2 bg-opacity-90 shadow-xl rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
            </button>
            <button

              class="bg-white p-2 bg-opacity-90 shadow-xl rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
    </div>
    </>
  )
}
