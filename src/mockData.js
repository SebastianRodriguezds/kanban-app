import { v4 as uuidv4 } from "uuid";

const mockData = [
  {
    id: uuidv4(),
    title: "📋 To do",
    tasks: [
      {
        id: uuidv4(),
        title: "Study JS",
      },
      {
        id: uuidv4(),
        title: "Study HTML",
      },
      {
        id: uuidv4(),
        title: "Read CSS book",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "✍️In progress",
    tasks: [
      {
        id: uuidv4(),
        title: "Course React",
      },
      {
        id: uuidv4(),
        title: "Course PHP",
      },
      {
        id: uuidv4(),
        title: "Design book",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "✔️ Completed",
    tasks: [
      {
        id: uuidv4(),
        title: "Course Web",
      },
      {
        id: uuidv4(),
        title: "Course VScode",
      },
      {
        id: uuidv4(),
        title: "book Cyber Security",
      },
    ],
  }
];

export default mockData;