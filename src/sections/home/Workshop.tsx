import type {FC} from 'react'

const Workshop: FC = ()=>{
    return(
        <section className="px-[5%] md:px-[15%] mt-[200px] font-default bg-white">
  <div className="flex gap-12 md:flex-row flex-col items-center">
    {/* Left Side */}
    <div className="md:w-[60%]">
      <h4 className="uppercase text-primary/40 tracking-wide mb-2">
        Workshop
      </h4>
      <h2 className="mb-6 text-4xl lg:text-7xl">
        Our <span className="text-primary font-bold">workshop</span>
      </h2>
      <p className="text-gray-800 mb-6">
        We also bring innovation directly to your school or college with our
        hands-on bootcamps. Here’s what you and your students can expect:
      </p>

      <ol className="list-decimal list-inside text-gray-800 space-y-2 mb-6">
        <li>You'll build at least one project a day.</li>
        <li>
          You’ll get a comprehensive taste of Robotics, Coding, AI and Design
          all within a week.
        </li>
        <li>Get certified at the end of the session.</li>
      </ol>

      <p className="text-gray-700 mb-6">
        If you think this is too good to be true, click the button below to see
        the complete details of the bootcamp and our proof of work.
      </p>

      <button className="bg-primary text-white mt-15 px-4 py-2 rounded-full flex items-center space-x-2 hover:scale-105 transition-transform duration-300 cursor-pointer">
        Contact Our Team »
      </button>
    </div>

    {/* Right Side */}
    <div className="relative h-[400px] w-full md:w-[40%] flex justify-end group">
      <img
        src="src/assets/photo/Sayog Rai.jpg"
        alt="Workshop"
        className="scale-100 w-full object-cover rounded-xl"
      />
        <img
            src="src/assets/100+ Students.png"
            alt="Decorative"
            className="absolute bottom-[-10%] left-[30%] md:bottom-[-10%] md:left-[70%] drop-shadow-lg transition-transform duration-1000 group-hover:translate-x-10 group-hover:translate-y-10"
        />

        <button
            className="absolute bottom-[95%] left-0 md:bottom-[80%] md:left-[-15%] text-primary opacity-90 rounded-md bg-[rgba(250,250,250,0.6)] px-4 py-2 drop-shadow-lg transition-transform duration-1000 group-hover:-translate-x-10 group-hover:-translate-y-10"
        >
            10 Workshops
        </button>
    </div>
  </div>
</section>

)
}

export default Workshop;