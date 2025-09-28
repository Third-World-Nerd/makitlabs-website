import { whoarewe } from "../../assets/copies";

const WhoAreWe: React.FC = () => {
  return (
    <section className="w-full px-[140px] flex flex-col lg:flex-row gap-12 mt-[120px]">
      {/* Left Column */}
      <div className="flex flex-col lg:flex-row gap-7">
        {/* First Column (Tall Image + Button) */}
        <div className="flex flex-col gap-8">
          <img
            src="src/assets/photo/Who are we 1.png"
            alt="Student Project"
            className="h-[446px] w-[263px] rounded-t-4xl rounded-bl-4xl object-cover"
          />
          <div className="flex items-center p-3 gap-4 w-[263px] rounded-t-4xl rounded-br-4xl shadow-lg text-sm font-medium shadow-purple-200">
            <img
            src="src/assets/TWN.png"
              alt="Third World Nerd"
              className=""
            />
            <button className="text-purple-700 text-left">
              We are building the school of Rancho from 3 Idiots !!!
            </button>
          </div>
        </div>

        {/* Second Column (Circular + Square Images) */}
        <div>
        <div className="w-[300px] h-[300px] overflow-hidden rounded-full">
          {/* Circular Image */}
          <img
            src="src/assets/photo/Who are we 3.png"
            alt="Student Robotics"
            className="scale-180 transform translate-y-12 translate-x-12 object-cover h-full w-full rounded-full"
          />
        </div>
          <div className="w-[263px] h-[263px] overflow-hidden rounded-b-4xl rounded-tr-4xl">
            <img
              src="src/assets/photo/Who are we 2.png"
              alt="Student Robotics"
              className="scale-150 transform -translate-y-10 object-cover h-full w-full"
            />
          </div>

        </div>

      </div>

      {/* Right Column (Text Content) */}
      <div className="flex-1 flex flex-col font-default">
        <p className="text-[rgba(94,7,225,0.4)] uppercase text-sm ">About Us</p>
        <h2 className="text-7xl mb-[20px]">
          Who are <span className="text-primary font-bold">we</span>
        </h2>
        <p dangerouslySetInnerHTML={{ __html: whoarewe }} />
        <p className="text-primary font-semibold mt-2">
          Sakar Pathak (Er. Kumar from Third World Nerd)
        </p>
        <span>CEO, Makit Labs</span>
        <button className="border mt-7 border-purple-600 text-purple-600 px-2 rounded-full w-max hover:bg-purple-600 hover:text-white transition duration-300">
          Contact Us Directly &gt;&gt;
        </button>
      </div>
    </section>
  );
};

export default WhoAreWe;
