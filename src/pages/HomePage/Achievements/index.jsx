import React from "react";

const achievements = [
  {
    year: "2016",
    achievements: [
      {
        heading: "Pixel smartphone",
        description: "Google’s line of smartphones features advanced camera capabilities and integration capacity with Google software and services.",
      },
      {
        heading: "Google Nest",
        description: "This rebranded segment includes all of Google’s smart home devices, including routers, thermostats, security systems, and smart speakers.",
      },
      {
        heading: "Google Workspace",
        description:`Originally G Suite, this set of productivity apps traces its
                roots back to 2006, when the company launched Google Apps.
                Google Workspace is an integrated suite of cloud, productivity,
                and collaboration tools that draw on various Google applications
                such as Gmail, Google Docs, and Google Calendar.`,
      },
    ],
  },
  {
    year: "2017",
    achievements: [
      {
        heading: "Google Meet",
        description: `"This video conferencing platform, originally launched in 2017,
        rose in popularity during the COVID-19 pandemic—along with
        competitors, such as Zoom Video Communications (ZM) and Slack
        from Salesforce (CRM).`,
      },
    ],
  },
  {
    year: "2019",
    achievements: [
      {
        heading: "Wing Aviation for drone delivery",
        description: `Although the company had been working on Wing since 2014, in
        April 2019, Alphabet’s drone delivery service—which aims to
        revolutionize package delivery—became the first of its kind to
        gain approval from the Federal Aviation Administration (FAA).`,
      },
      {
        heading: "Google Cloud Anthos",
        description: `This enterprise-grade platform is designed to manage
        applications and services across various cloud environments.`,
      },
    ],
  },
  {
    year: "2023",
    achievements: [
      {
        heading: "Bard",
        description: `Initially unveiled to compete with OpenAI’s ChatGPT, Bard is
        Alphabet’s conversational AI chatbot developed for creative
        content generation.`,
      },
      {
        heading: "Google Gemini",
        description: `Gemini is Google’s most advanced and versatile AI model. Unlike
        Bard, an older model whose applications are generally limited to
        language and code creation, Gemini is capable of operating in a
        “multimodal” capacity across different information formats:
        text, code, audio, image, and video.`,
      },
    ],
  },
];

const Achievements = () => {
  return (
    <>
      <div className="flex justify-center w-full bg-[#171717] mt-16">
        <div className="w-8/12 flex flex-col justify-center items-center">
          <div className="text-center text-2xl md:text-5xl tracking-widest mt-16 text-white">
            Achievements
          </div>
          <div className="w-11/12 sm:w-11/12 md:10/12 lg:w-6/12">
            <div className="border mt-2 mb-4 border-white"></div>
            <div className="text-white">
              <div className="text-sm text-gray-300 mb-16 text-center">
                Pichai’s tenure (beginning in 2015) oversaw numerous
                initiatives, product launches, and product overhauls, including:
              </div>
             
            
            </div>
            <div>
              <div>
                {achievements.map(({ year, achievements }) => {
                  return (
                    <>
                      <div class="ps-2 my-2 first:mt-0">
                        <h3 class="text-5xl font-medium uppercase text-gray-500 dark:text-gray-400">
                          {year}
                        </h3>
                      </div>
                      <div class="flex gap-x-3">
                        <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                          <div class="relative z-10 size-7 flex justify-center items-center">
                            <div class="size-2 rounded-full bg-gray-400"></div>
                          </div>
                        </div>
                        <div className="flex-col mt-4">

                        {achievements.map(({ heading, description }) => {
                            return (
                                <div class="grow pt-0.5 pb-8">
                              <h3 class="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
                                {heading}
                              </h3>
                              <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                                {description}
                              </p>
                            </div>
                          );
                        })}
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center my-8">
              <button className="bg-[#353333] px-12 rounded-md border border-neutral-600 py-2 text-white">
                Read More!
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;
