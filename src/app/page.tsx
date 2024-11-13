import Card from "@/app/components/Card";
import DownButton from "@/app/components/DownButton";
import data from "../../public/edit_me.json";

export default function Home() {
  return (
    <main>
      <div className="h-screen flex items-center justify-center">
        <div className="absolute top-7 left-2/5 bg-yellow-300 z-30">
          <h6 className="text-[64px]">{data.MyName}</h6>
          <h6 className="text-[24px] pt-0">{data.MyRole}</h6>
        </div>
        <div className="absolute h-[800px] w-[1200px] bg-black opacity-5 clip-hexagon"></div>
        <div className="h-[800px] w-[1000px] grid grid-cols-3 gap-3 grid-rows-3 mt-60 items-center">
          {data.projects.map((project, index) => (
            <div key={index}>
              <Card
                title={project.title}
                image={project.image_path}
                link={project.github_link}
                description={project.description}
              />
            </div>
          ))}
        </div>
        <DownButton />
      </div>
    </main>
  );
}
