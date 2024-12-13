import { MapPinIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/16/solid";
import { Event } from "./page";

type EventProps = {
  event: Event;
};

export default function EventBlock({ event }: Readonly<EventProps>) {
  return (
    <div className=" flex-col items-center justify-between py-2 ">
      <div className=" flex justify-between items-baseline">
        <div className=" flex items-center ">
          <span className="size-50 font-bold text-lg"> {event.title}</span>
          <span className="size-50 font-light ml-2 text-sm mr-1 text-amber-200">
            {event.person.name} 
          </span>
          <span>
          {event.person.close && ( <StarIcon className="size-3 text-amber-200  " />    )}
          </span>
        </div>

        <span className=" font-mono font-semibold"> {event.time}</span>
      </div>
      <div className="flex align-top">
        <span className="font-semibold text-gray-500  text-sm"> {event.location}</span>
        <MapPinIcon className="size-4 ml-1 mt-2.25  text-gray-500  " />
      </div>
      <div className=" font-light overflow-hidden text-gray-300"> {event.description}</div>
    </div>
  );
}
