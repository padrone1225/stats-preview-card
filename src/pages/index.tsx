/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#351544_0,#100020_100%)] min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-2 overflow-hidden max-w-[1000px] rounded-xl gap-10 pl-14 m-8 bg-[linear-gradient(to_top,hsla(246,38%,16%,0.3)_20%,rgb(70,39,98,0.5)_90%)] transition-all ease-in duration-500 shadow-primary-shadow hover:shadow-secondary-shadow hover:transform hover:scale-105 animate-[slideIn_1s_ease-out] sm:flex-col-reverse sm:pl-0 sm:gap-5 sm:flex">
        <div className="flex justify-center flex-col gap-x-[6.25rem] gap-y-4 py-5 sm:text-center sm:justify-center sm:items-center">
          <h1
            className="max max-w-[25rem] font-bold text-[32px] bg-[linear-gradient(100deg,#fbf9fb_-12.67%,#c7a6c8_105.92%)] bg-clip-text"
            id="title"
          >
            Get{" "}
            <span className="bg-[linear-gradient(to_right,#af5ec3,#ef45b4,#fa747d,#f7a0cf,#ef45b4,#af5ec3)] bg-[length:300%_auto] bg-clip-text animate-[move_5s_linear_infinite] delay-[5s]">
              insights
            </span>{" "}
            that help your business grow.
          </h1>
          <p className="max-w-[25rem] font-medium text-stat-white text-[15.2px] leading-7">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className="flex gap-10 flex-row flex-wrap" id="description">
            <div>
              <h2 className="text-[28.8px] font-bold pb-2 bg-[linear-gradient(to_right,#af5ec3,#ef45b4,#fa747d,#f7a0cf,#ef45b4,#af5ec3)] bg-[length:300%_auto] bg-clip-text animate-[move_5s_linear_infinite]">
                10k+
              </h2>
              <p className="font-medium text-stat-white text-[12.8px] tracking-[0.0875rem] uppercase">
                Companies
              </p>
            </div>
            <div>
              <h2 className="text-[28.8px] font-bold pb-2 bg-[linear-gradient(to_right,#af5ec3,#ef45b4,#fa747d,#f7a0cf,#ef45b4,#af5ec3)] bg-[length:300%_auto] bg-clip-text animate-[move_5s_linear_infinite]">
                314
              </h2>
              <p className="font-medium text-stat-white text-[12.8px] tracking-[0.0875rem] uppercase">
                Templates
              </p>
            </div>
            <div>
              <h2 className="text-[28.8px] font-bold pb-2 bg-[linear-gradient(to_right,#af5ec3,#ef45b4,#fa747d,#f7a0cf,#ef45b4,#af5ec3)] bg-[length:300%_auto] bg-clip-text animate-[move_5s_linear_infinite]">
                12m+
              </h2>
              <p className="font-medium text-stat-white text-[12.8px] tracking-[0.0875rem] uppercase">
                Queries
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[linear-gradient(320deg,#ff61f3_0,#b86ffb_100%)]">
          <img
            src="/images/image-header-desktop.jpg"
            alt=""
            className="w-full h-full opacity-80 object-cover rounded-[0_14px_14px_0] mix-blend-multiply transition ease-in-out duration-1000 sm:block sm:rounded-[14px_14px_0_0]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
