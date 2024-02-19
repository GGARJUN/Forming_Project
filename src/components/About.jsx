// import React from 'react'

export const About = () => {
  return (
    <>
        <section id="" class="mt-10 rounded-2xl p-5 text-black bg-slate-300">
        <h1 class="text-center text-3xl font-bold py-5">About Us</h1>
        <div class="lg:flex gap-5 items-start">
          <img
            class="sm:w-screen lg:w-auto sm:mb-5 border-8 p-5 border-green-500"
            src="images/about.png"
            alt=""
          />
          <div class="">
            <h1 class="font-bold text-5xl py-5">
              We Produce Organic Food For Your Family
            </h1>
            <p class="font-medium text-lg">
              Tempor erat elitr at rebum at at clita. Diam dolor diam ipsum et
              tempor sit. Clita erat ipsum et lorem et sit, sed stet no labore
              lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore
              erat amet magna
            </p>
            <div class="flex gap-2 ">
              <div class="p-3 ">
                <img
                  class="flex w-32 h-232 mx-auto"
                  src="images/sprout_346195.png"
                  alt=""
                />
                <div class="bg-slate-500 text-white p-5 rounded-2xl my-5">
                  <h2 class="font-bold text-2xl">100% Organic</h2>
                  <p class="font-normal text-lg">
                    Labore justo vero ipsum sit clita erat lorem magna clita
                    nonumy dolor magna dolor vero
                  </p>
                </div>
              </div>
              <div class="p-3  rounded-2xl">
                <img
                  class="flex w-32 h-32 mx-auto"
                  src="images/sprout_346195.png"
                  alt=""
                />
                <div class="bg-slate-500 text-white p-5 rounded-2xl my-5">
                  <h2 class="font-bold text-2xl">100% Organic</h2>
                  <p class="font-normal text-lg">
                    Labore justo vero ipsum sit clita erat lorem magna clita
                    nonumy dolor magna dolor vero
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    </>
  )
}
