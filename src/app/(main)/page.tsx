"use client"
import Hero from '@/app/assets/images/hero.jpg';
import ArtsCulture from '@/app/assets/images/arts_and_culture.jpg';
import Teacher from '@/app/assets/images/teachers.jpg';
import Awards from '@/app/assets/images/awards.jpg';
import Ignite from '@/app/assets/images/ignites.jpg';
import Career from '@/app/assets/images/career.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-max w-full lg:w-10/12 px-4 p-2 lg:px-8 mx-auto">
      <div className="bg-primary lg:pl-10 pb-10 lg:pb-0 flex flex-col-reverse lg:flex-row justify-between rounded-2xl relative mb-40">
        <div className="w-full h-full rounded-3xl absolute bg-secondary left-0 -top-[10px] -z-10"></div>
        <div className="flex flex-col w-5/6 mt-8 lg:w-1/3 justify-center mx-auto">
          <h1 className="text-[#171717] md:text-3xl text-xl lg:text-5xl lg:leading-[4rem] font-bold w-5/6">Building Strong Mind Strong Community</h1>
          <button className='bg-[#061D3D] text-white rounded-xl p-6 py-2 text-left self-start my-4'>Enroll Now</button>
        </div>
        <Image className='rounded-[20px]' src={Hero} alt='hero images with students talking as discussing lesson' />
        <div className='absolute shadow-lg -bottom-[4rem] lg:-bottom-14 lg:left-24 flex left-[50%] -translate-x-1/2 lg:translate-x-0'>
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
                count: "31+",
                title: "Courses"
              },
              {
                count: "21+",
                title: "Courses"
              }
            ].map((item, id) => {
              return <div key={id} className='lg:flex flex-col items-center bg-white p-4 py-6 lg:p-6'>
                <h3 className='font-bold'>{item.count}</h3>
                <p>{item.title}</p>
              </div>
            })
          }
        </div>
      </div>


      <div className='mt-24 flex flex-col lg:flex-row gap-8 w-10/12 mx-auto mb-12'>
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
          <h1 className='text-4xl lg:text-5xl w-full lg:w-3/6 font-bold mb-8'>Where Education Ignites</h1>
          <p className='mb-8 text-lg leading-loose'>{"At SCWS, education isn't just about memorizing facts and figures. It's about igniting a passion for learning that will stay with you long after you graduate. Our classrooms are vibrant hubs of curiosity and exploration, where teachers act as guides, mentors, and fellow explorers on the journey of knowledge."}<br /><br />

            {"Here at SCWS, you'll be challenged to think critically, ask insightful questions, and delve deeper into subjects that spark your interest. We foster a collaborative environment where students learn from each other, share ideas, and build the confidence to express themselves."}
          </p>
        </div>
      </div>

      <div className='md-0 md:mt-24 gap-0 w-10/12 mx-auto min-w-40 mb-80 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 justify-between items-center'>
        <div className='p-8 bg-secondary min-h-56 flex flex-col justify-between'>
          <h3 className='text-primary font-bold md:text-3xl text-xl'>Activity</h3>
          <p className='text-white self-end items-end'>Activity</p>
        </div>
        <div
          className='p-8 min-h-56 flex items-center col-span-0 lg:col-span-2 relative'
          style={{
            width: "100%",
            height: "100%",
            backgroundPosition: "100%",
            backgroundSize: "100%",
            backgroundImage: `url(${ArtsCulture.src})`
          }}
        >
          <div className='bg-black opacity-40 absolute top-0 left-0 bottom-0 right-0 w-full h-full'></div>
          <h3 className='text-white md:text-3xl text-xl font-bold z-10'>{'ARTS & CULTURE'}</h3>
        </div>
        <div className='p-8 bg-gray-400 min-h-56 flex justify-center items-center relative'
          style={{
            width: "100%",
            height: "100%",
            backgroundPosition: "100%",
            backgroundSize: "100%",
            backgroundImage: `url(${Teacher.src})`
          }}
        >
          <div className='bg-black opacity-40 absolute top-0 left-0 bottom-0 right-0 w-full h-full'></div>
          <h3 className='text-white z-10 font-bold md:text-3xl text-xl'>TEACHERS</h3>
        </div>
        <div className='p-8 bg-gray-400 min-h-56 flex justify-center items-center relative'
          style={{
            width: "100%",
            height: "100%",
            backgroundPosition: "100%",
            backgroundSize: "100%",
            backgroundImage: `url(${Awards.src})`
          }}
        >
          <div className='bg-black opacity-40 absolute top-0 left-0 bottom-0 right-0 w-full h-full'></div>
          <h3 className='text-white font-bold md:text-3xl text-xl z-10'>AWARDS</h3>
        </div>
        <div className='p-8 bg-white min-h-56 flex justify-center items-center'>
          <h3 className='text-black font-bold md:text-3xl text-xl'>GRADUATES</h3>
        </div>
        <div
          className='p-8 bg-gray-400 min-h-56 flex justify-center items-center relative'
          style={{
            backgroundSize: "cover",
            backgroundPosition: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundImage: `url(${Career.src})`
          }}
        >
          <div className='bg-black opacity-40 absolute top-0 left-0 bottom-0 right-0 w-full h-full'></div>
          <h3 className='text-white font-bold md:text-3xl text-xl z-10'>CARRERS</h3>
        </div>

        <div className='p-8 bg-secondary min-h-56 flex justify-center items-center'>
          <h3 className='text-secondary font-bold md:text-3xl text-xl'>GRADUATES</h3>
        </div>
      </div>
    </div>
  )
}
