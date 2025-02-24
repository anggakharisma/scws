import Activity from "@/app/assets/icons/activity.svg";
import Hero from "@/app/assets/images/hero.jpg";
import Ignite from "@/app/assets/images/ignites.jpg";
import Image from "next/image";

// !TODO: add some animation on load and hover on activity card
export default function Home() {
  return (
    <div className="w-full mt-8">
      <div className="bg-primary lg:pl-10 pb-10 lg:pb-0 flex flex-col-reverse lg:flex-row justify-between rounded-2xl relative mb-40">
        <div className="w-full h-full rounded-3xl absolute bg-secondary left-0 -top-[10px] -z-10"></div>
        <div className="flex flex-col w-5/6 mt-8 lg:w-1/3 justify-center items-center mx-auto relative">
          <h1 className="text-[#171717] md:text-3xl text-3xl lg:text-5xl lg:leading-[4rem] font-bold w-full lg:text-left">
            Building Strong Mind Strong Community
          </h1>
          <button className="bg-[#061D3D] text-white rounded-xl p-6 py-2 text-left self-center lg:self-start my-4 hover:filter hover:invert transition-all">
            Enroll Now
          </button>
        </div>
        <div className="w-full md:w-3/6 h-full bg-cover">
          <Image
            className="rounded-[16px]"
            src={Hero}
            alt="hero images with students talking as discussing lesson"
            sizes="100vw"
          />
        </div>
        <div className="absolute -bottom-[4rem] lg:-bottom-14 flex left-1/2 lg:left-1/4  -translate-x-1/2 shadow-lg rounded-lg">
          {[
            {
              count: "15+",
              title: "Teachers",
            },
            {
              count: "30+",
              title: "Courses",
            },
            {
              count: "17+",
              title: "Awards",
            },
            {
              count: "200+",
              title: "students",
            },
          ].map((item, id) => {
            return (
              <div
                key={id}
                className="lg:flex flex-col items-center bg-white p-6 py-8 lg:p-8"
              >
                <h3 className="font-bold">{item.count}</h3>
                {item.title}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-24 flex flex-col lg:flex-row gap-8 w-10/12 mx-auto mb-12">
        <div className="w-4/6 h-[480px] relative rounded-lg">
          <div className="absolute w-full h-full -top-4 -left-4 bg-primary rounded-lg"></div>
          <div className="absolute w-full h-full -top-8 -left-8 bg-secondary -z-10 rounded-lg"></div>
          <Image
            src={Ignite}
            className="rounded-lg"
            fill={true}
            style={{ objectFit: "cover" }}
            alt="ignites"
          />
        </div>
        <div className="p-0 w-full">
          <h1 className="text-4xl lg:text-5xl w-full lg:w-5/6 font-bold mb-8">
            Where Education Ignites
          </h1>
          <p className="font-light text-lg leading-loose indent-8">
            {
              "At SCWS, education isn't just about memorizing facts and figures. It's about igniting a passion for learning that will stay with you long after you graduate. Our classrooms are vibrant hubs of curiosity and exploration, where teachers act as guides, mentors, and fellow explorers on the journey of knowledge."
            }
            <br />
          </p>
          <p className="font-light text-lg leading-loose indent-12 mt-4">
            {
              "Here at SCWS, you'll be challenged to think critically, ask insightful questions, and delve deeper into subjects that spark your interest. We foster a collaborative environment where students learn from each other, share ideas, and build the confidence to express themselves."
            }
          </p>
        </div>
      </div>

      {
        // Info Section
      }
      <div className="w-11/12 mx-auto shadow-lg bg-white">
        <div className="md-0 md:mt-24 gap-0 w min-w-40 mb-10 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 justify-between items-center relative">
          <div className="p-8 bg-secondary min-h-56 flex flex-col justify-between transition-all hover:cursor-pointer">
            <h3 className="text-primary font-medium md:text-3xl text-xl">
              Activity
            </h3>
            <Image
              className="self-end items-end"
              src={Activity}
              width={60}
              height={60}
              alt="activity icon"
            />
          </div>


          <div className="p-8 bg-secondary min-h-56 flex justify-center items-center hover:cursor-pointer">
            <h3 className="text-secondary font-medium md:text-3xl text-xl">
              GRADUATES
            </h3>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto">
        <h1 className="text-4xl lg:text-3xl w-full lg:w-4/6 font-medium mb-8">
          NEWS
        </h1>
        <p></p>
      </div>
    </div>
  );
}
