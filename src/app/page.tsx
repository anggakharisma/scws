import Hero from '@/app/assets/images/hero.jpg';
import Ignite from '@/app/assets/images/ignites.jpg';
import Image from 'next/image';
export default function Home() {
  return (
    <div className="max-w-max w-full md:w-10/12 px-4 p-2 lg:px-8 mx-auto">
      <div className="bg-primary lg:pl-10 pb-10 md:pb-0 flex flex-col-reverse md:flex-row justify-between rounded-2xl relative mb-40">
        <div className="w-full h-full rounded-3xl absolute bg-secondary left-0 -top-[10px] -z-10"></div>
        <div className="flex flex-col w-5/6 mt-8 md:w-1/3 justify-center mx-auto">
          <h1 className="text-[#171717] text-3xl md:text-5xl md:leading-[4rem] font-bold w-5/6">Building Strong Mind Strong Community</h1>
          <button className='bg-[#061D3D] text-white rounded-xl p-6 py-2 text-left self-start my-4'>Enroll Now</button>
        </div>
        <Image className='rounded-[20px]' src={Hero} alt='hero images with students talking as discussing lesson' />
        <div className='absolute shadow-md -bottom-[4rem] md:-bottom-10 md:left-20 flex left-[50%] -translate-x-1/2 md:translate-x-0'>
          {
            [
              {
                count: "15+",
                title: "Teachers"
              },
              {
                count: "30+",
                title: "Courses"
              },
              {
                count: "30+",
                title: "Courses"
              }
            ].map((item, id) => {
              return <div key={id} className='md:flex flex-col items-center bg-white p-4 md:p-6'>
                <h3 className='font-bold'>{item.count}</h3>
                <p>{item.title}</p>
              </div>
            })
          }
        </div>
      </div>


      <div className='mt-24 flex flex-col md:flex-row gap-8 w-10/12 mx-auto mb-80'>
        <div className='bg-red-400 w-full h-[480px] relative'>
          <div className='absolute w-full h-full -top-4 -left-4 bg-primary'></div>
          <div className='absolute w-full h-full -top-8 -left-8 bg-secondary -z-10'></div>
          <Image
            src={Ignite}
            fill={true}
            style={{ objectFit: "cover" }}
            alt="ignites" />
        </div>
        <div className='p-0'>
          <h1 className='text-4xl md:text-5xl w-full md:w-3/6 font-bold mb-8'>Where Education Ignites</h1>
          <p className='mb-8 text-lg leading-loose'>{"At SCWS, education isn't just about memorizing facts and figures. It's about igniting a passion for learning that will stay with you long after you graduate. Our classrooms are vibrant hubs of curiosity and exploration, where teachers act as guides, mentors, and fellow explorers on the journey of knowledge."}<br /><br />

            {"Here at SCWS, you'll be challenged to think critically, ask insightful questions, and delve deeper into subjects that spark your interest. We foster a collaborative environment where students learn from each other, share ideas, and build the confidence to express themselves."}
          </p>

        </div>
      </div>
    </div>
  )
}
