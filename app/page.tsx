import Image from "next/image";

export default function Home() {
  return (
    <ul>
      <li>
        <a href="/events">Events</a>
      </li>
      <li>
        <a href="/groups">Groups</a>
      </li>
      <li>
        <a href="/people">People</a>
      </li>
      <li>
        <a href="/profile">Profile</a>
      </li>
    </ul>
  );
}
