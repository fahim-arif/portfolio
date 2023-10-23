import Image from "next/image";
import { Project } from "@/common/types";
import Link from "next/link";

const Thumbnail = ({ project }: { project: Project }) => {
  return (
    <>
      <div className=" bg-white rounded-xl relative">
        <Link href={`/project/${project.id}`}>
          <div className="flex justify-center items-center">
            <Image
              src={project.thumbnail}
              alt={project.title}
              width={390}
              height={300}
              className="rounded-xl object-cover"
            ></Image>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Thumbnail;
