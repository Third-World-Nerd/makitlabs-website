import type {FC} from 'react'

const Courses: FC = () => {
    return (
<section id="Courses" className="mx-[5%] md:mx-[10%] pt-[150px] font-default bg-white">
  {/* Heading */}
  <div className="text-center mb-12">
    <h4 className="uppercase text-primary/40 tracking-wide mb-2">
      Our Courses
    </h4>
    <h2 className="text-4xl lg:text-7xl font-bold">
      Find the <span className="text-primary">right plan</span>
    </h2>
  </div>

  {/* Cards */}
  <div className="flex justify-center gap-10 md:flex-row flex-col items-center">
    {/* Card 1 */}
    <div className="w-[300px] rounded-2xl border border-gray-200 bg-[#FAFAFA]/60 shadow-sm p-8 flex flex-col justify-between md:scale-110">
      <div>
        <h5 className="text-primary/40 mb-2">30+ Students</h5>
        <h3 className="text-xl lg:text-2xl mb-1">For Individuals</h3>
        <p className="lg:text-2xl font-semibold text-primary mb-6">
          Rs 4800 <span className="text-sm text-primary/40">/month</span>
        </p>
        <ul className="space-y-3 text-gray-800">
          <li className="flex items-center gap-2">
            <span className="text-primary">&#10003;</span> Every Saturday Two Hours (11AM – 1PM)
          </li>
          <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Completely Hands On Learning</li>
          <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Personalized Curriculum</li>
          <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Access to our Kits in Class</li>
        </ul>
      </div>
      <button className="text-sm w-fit lg:text-base mt-7 bg-primary text-white px-4 py-2 rounded-full flex hover:scale-105 transition-transform duration-300 cursor-pointer">
        Join our free demo class<span className="tracking-tighter font-mono pl-1">&gt;&gt;</span>
      </button>
    </div>

    {/* Card 2 */}
    <div className="w-[300px] rounded-2xl border border-gray-200 bg-[#FAFAFA]/60 shadow-sm p-8 flex flex-col justify-between scale-100">
      <div>
        <h5 className="text-primary/40 font-semibold mb-2">3+ Workshops</h5>
        <h3 className="text-xl lg:text-2xl mb-6">For Schools and Colleges</h3>
        <ul className="space-y-3 text-gray-800">
          <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> 7 days Bootcamp</li>
          <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> 2 Hour Sessions per day</li>
          <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Level-based curriculum</li>
          <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Post Bootcamp Competition</li>
          <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Certification Provided</li>
          <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Content Marketing For Institution</li>
        </ul>
      </div>
      <button className="text-sm lg:text-base border mt-7 border-purple-600 text-purple-600 px-2 rounded-full w-max cursor-pointer hover:bg-purple-600 hover:text-white transition duration-300">
        Contact our team<span className="tracking-tighter font-mono pl-1">&gt;&gt;</span>
      </button>
    </div>
  </div>
</section>

    );
};

export default Courses;