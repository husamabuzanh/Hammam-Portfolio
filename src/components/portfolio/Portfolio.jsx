import Projects from "./Projects";
import card1 from "../../assets/images/logos/PPU.jpg";
import card2 from "../../assets/images/logos/Aljebrini.jpg";
import card3 from "../../assets/images/logos/Trico.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Mechantronics Engineering",
    title: "PPU Graduation Project",
    description:
      "I focus on crafting smooth, carefully engineering that balance aesthetic appeal with practical functionality.",
    link: "https://drive.google.com/drive/u/0/folders/1JyyyqO9m8JU9MeGyvkrzI9GFVZNEuSxu",
  },
  {
    id: 2,
    image: card2,
    category: "Mechantronics Engineering",
    title: "Aljebrini Practical Engineering",
    description:
      "Maintenance real mechanical works, emphasizing clarity and user efficiency.",
    link: "https://drive.google.com/drive/u/0/folders/13V6Q1OUY_y0AOvw48JDAJKmZLtF8Z2ai",
  },
  {
    id: 3,
    image: card3,
    category: "Mechantronics Engineering",
    title: "Trico Practical Engineering",
    description:
      "Make professional Metal Turing for specific custome parts for machines.",
    link: "https://drive.google.com/drive/u/0/folders/1V9YCBpv_x5GVy5TSfte8PZreUaJ_pR4w",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">My Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in
            creating Engineering Solutions for the industry.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Projects
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
