import { StarIcon, HomeIcon } from "@heroicons/react/16/solid";
import { Person } from "./page";

type PersonBlockProps = {
  person: Person;
};

export default function PersonBlock({ person }: Readonly<PersonBlockProps>) {
  return (
    <div className=" flex items-center justify-between py-3 ">
      <div className=" font-bold"> {person.name}</div>
      <div className="flex items-center  ">
        {person.close && (
          <StarIcon className="size-5 ml-1 mt-2.25  text-white  " />
        )}
        {person.active && (
          <HomeIcon
            className= {`size-5 ${ person.active ?   "text-emerald-400": "text-white" }  `}
          />
        )}
      </div>
    </div>
  );
}
