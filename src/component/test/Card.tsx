import { ReactChild } from "react";

export const Card = (props: { title: string; children: ReactChild }) => {
  const FlexYcenter = "flex items-center";

  return (
    <div className="mb-4">
      <div className="shadow-lg rounded-2xl p-4 bg-white dark:bg-gray-700 w-full">
        <div className="flex flex-col w-full">
          <div className="flex justify-between mb-6">
            <h2 className="font-bold text-md text-black dark:text-white ml-2">
              {props.title}
            </h2>

            <div className={`${FlexYcenter} `}>
              <button className="border p-1 border-gray-200 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  className="w-4 h-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                >
                  <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z"></path>
                </svg>
              </button>
              <button className="text-gray-200">
                <svg
                  width="25"
                  height="25"
                  fill="currentColor"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1088 1248v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h192q40 0 68 28t28 68z"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="p-2">{props.children}</div>
        </div>
      </div>
    </div>
  );
};
