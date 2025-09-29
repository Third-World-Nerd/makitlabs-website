export const whoarewe:string = `We are a group of Engineers from Pulchowk Campus turned Content Creator and Educator. Ever since we were kids, we’d break open the machines around us and seeing the technology inside often overwhelmed us but also made us very eager to learn. <br /> <br />

Sure we learnt a lot of interesting theories in our school, but we always felt missing in our learning as we would hardly build anything. Some cool projects? Or a Robot? With both Hardware and Software?<br /> <br />

So, with that energy and curiosity still engraved in us, after our pursuit of Engineering, we started educating students through our youtube video when we modelled our pedagogy in a story telling approach infusing interesting cuts and animation in Our YouTube channel Third World Nerd. To our delight, many students from all over the country enjoyed our approach and cited us as an inspiration to enter robotics but also expressed the barrier to entry in robotics when they tried to build projects like Engineer Kumar (Our Hero of Third World Nerd).<br /> <br />

This is why we started our journey with Makit Labs, to ease a student’s entry to robotics. We are here to help students build their first ever Robotics Project, which will teach them how hardware, software, mathematics and AI all come together to solve a problem. We want to show them how fun the theories can be when you build a practical application using it which will in turn enhance their creativity and make them more resilient.`

export interface WhyUs {
  id:string;
  title: string;
  description: string;
  button: string;
  image: string;
}

export const whyus: WhyUs[] = [
  {
    id:"first",
    title: "Accomplished Teachers",
    description:
      "Our teachers are engineers themselves. They will teach you how to approach a problem, so you can find the solutions to every similar problem on your own.",
    button: "Join our free demo class",
    image: "src/assets/teachers.png",
  },
  {
    id:"second",
    title: "Customized Kits and Platform",
    description:
      "Our personalized kits and ready-to-use coding templates makes sure you don’t get stuck on tiny things like missing screws, tangled wires or incomaptible modules.",
    button: "Explore our kits",
    image: "src/assets/kits.png",
  },
  {
    id:"third",
    title: "Personalized Curriculum",
    description:
      "We know everyone thinks and learns differently. So, at Makit Labs, you don’t enroll into a curriculum, we tailor your syllabus and design our teaching resources based on your needs and interests.",
    button: "Explore curriculum",
    image: "src/assets/curriculum.png",
  },
  {
    id:"fourth",
    title: "Community Support",
    description:
      "Join a network of like-minded learners and mentors who inspire and help each other grow in their journey.",
    button: "Meet our community",
    image: "src/assets/community.png",
  },
];
