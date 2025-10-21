// assets/products.tsx
export interface Product {
  id: string;
  name: string;
  images: string[]; // multiple images
  description: string;
  price?: number;
  restocking?: boolean;
}

export const products: Product[] = [
  {
    id: "car-kit",
    name: "Makit Robotics Kit",
    images: [
      "/photo/products/car-kit/1.jpg",
      "/photo/products/car-kit/2.png",
      "/photo/products/car-kit/3.png",
      "/photo/products/car-kit/4.png",
      "/photo/products/car-kit/5.png",
      "/photo/products/car-kit/6.png",
      "/photo/products/car-kit/7.png",
    ],
    description: `<p className="text-gray-700 mb-2">
  The perfect kit for hands-on STEM learning.
<br/><br/>
</p>
<ul className="list-disc ml-6 text-gray-700 space-y-1">
  <li>1. Covers the Full STEM Curriculum</li>
  <br/>
  <li>2. Comes with Customized Coding Platform + step by step Video Tutorials</li>
  <br/>
  <li>3. In built tutorial for 5+ different combinations and room for infinite tinkering</li>
  <br/>
  <li>4. Students gain Hands-On Learning as they apply both mechanical assembly as well as coding practices</li>
</ul>
`,
    price: 7500,
    restocking: true,
  },
  {
    id: "robot-dog",
    name: "Robot Dog Kit",
    images: ["/photo/products/robot-dog/1.jpg"],
    description: `<p className="text-gray-700 mb-2">
  The perfect kit for hands-on STEM learning.
  <br/><br/>
</p>
<ul>
  <li>Hands-On Robotics</li>
  <li>1. Build the robot’s body with modular parts.</li>
  <li>2. Program its "brain" using your own code and logic.</li>
  <br/>
  <li>Applied Math & Science</li>
  <li>1. Adjust angles/equations to see real-time movement changes.</li>
  <li>2. Explore Physics for lifelike leg motion.</li>
  <li>3. Use sensors for navigation calculations.</li>
    <br/>
  <li> Educational Value</li>
  <li>1. Combines engineering, coding, and physics.</li>
  <li>2. Scales from beginner to advanced projects.</li>
  <li>3. Prepares for robotics and automation fields.</li>
</ul>
`,
    restocking: true,
  },
];
