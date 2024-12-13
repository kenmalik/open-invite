import PersonBlock from "./PersonBlock";

export type Person = {
  name: string;
  close: boolean;
  active: boolean;
};

export default function People() {
  let data = [
    {
      name: "Carter Ellington",
      close: true,
      active: true,
    },
    {
      name: "Nina Batiste",
      close: false,
      active: true,
    },
    {
      name: "Miles Warren",
      close: true,
      active: false,
    },
    {
      name: "Evelyn Parker",
      close: false,
      active: true,
    },
    {
      name: "Dex Harper",
      close: false,
      active: false,
    },
    {
      name: "Selena Keys",
      close: false,
      active: true,
    },
    {
      name: "Bennie Carter",
      close: false,
      active: false,
    },
    {
      name: "Jacques Coleman",
      close: false,
      active: true,
    },
    {
      name: "Renee Holloway",
      close: true,
      active: false,
    },
    {
      name: "Lester Brookes",
      close: false,
      active: true,
    },
    {
      name: "Vivian Starks",
      close: true,
      active: false,
    },
    {
      name: "Elijah Green",
      close: false,
      active: true,
    },
    {
      name: "Ramona Davis",
      close: true,
      active: false,
    },
    {
      name: "Julius King",
      close: false,
      active: true,
    },
    {
      name: "Harper Bell",
      close: true,
      active: true,
    },
    {
      name: "Camille Rivers",
      close: false,
      active: true,
    },
    {
      name: "Langston Reid",
      close: true,
      active: false,
    },
    {
      name: "Dorian Chase",
      close: false,
      active: true,
    },
    {
      name: "Maya Coltrane",
      close: true,
      active: false,
    },
  ];
  // Name , close, active
  let x = data.toSorted((a, b) => {
    let aVal = +a.close + +a.active * 2; //Cast bool to int value to compute weight for compared entries :3
    let bVal = +b.close + +b.active * 2;
    return bVal - aVal;
  });

  return (
    <div>
      {x.map((entry) => (
        <PersonBlock person={entry} key={entry.name} />
      ))}
    </div>
  );
}
