export interface TransactionData {
  type: "IN" | "OUT";
  // type: string;
  amount: number;
  startDate: number; // Timestamp
  src: string;
  time: number; // Timestamp
}

export interface Transaction {
  id: number;
  data: TransactionData;
}

export interface DummyData {
  recentTransaction: Transaction[];
}

const dummyData: DummyData = {
  recentTransaction: [
    {
      id: 1,
      data: {
        type: "IN",
        amount: 100,
        startDate: new Date("2024-08-01").getTime(),
        src: "Salary",
        time: new Date("2024-08-01T08:00:00Z").getTime(),
      },
    },
    {
      id: 2,
      data: {
        type: "OUT",
        amount: 50,
        startDate: new Date("2024-08-05").getTime(),
        src: "Groceries",
        time: new Date("2024-08-05T12:30:00Z").getTime(),
      },
    },
    {
      id: 3,
      data: {
        type: "IN",
        amount: 150,
        startDate: new Date("2024-08-10").getTime(),
        src: "Freelance",
        time: new Date("2024-08-10T10:00:00Z").getTime(),
      },
    },
    {
      id: 4,
      data: {
        type: "OUT",
        amount: 30,
        startDate: new Date("2024-08-12").getTime(),
        src: "Dining",
        time: new Date("2024-08-12T19:00:00Z").getTime(),
      },
    },
    {
      id: 5,
      data: {
        type: "IN",
        amount: 200,
        startDate: new Date("2024-08-15").getTime(),
        src: "Investment",
        time: new Date("2024-08-15T14:45:00Z").getTime(),
      },
    },
    {
      id: 6,
      data: {
        type: "OUT",
        amount: 75,
        startDate: new Date("2024-08-18").getTime(),
        src: "Utilities",
        time: new Date("2024-08-18T16:00:00Z").getTime(),
      },
    },
    {
      id: 6,
      data: {
        type: "OUT",
        amount: 75,
        startDate: new Date("2024-08-18").getTime(),
        src: "Utilities",
        time: new Date("2024-08-18T16:00:00Z").getTime(),
      },
    },
    {
      id: 6,
      data: {
        type: "OUT",
        amount: 75,
        startDate: new Date("2024-08-18").getTime(),
        src: "Utilities",
        time: new Date("2024-08-18T16:00:00Z").getTime(),
      },
    },
    {
      id: 6,
      data: {
        type: "OUT",
        amount: 75,
        startDate: new Date("2024-08-18").getTime(),
        src: "Utilities",
        time: new Date("2024-08-18T16:00:00Z").getTime(),
      },
    },
  ],
};

export default dummyData;
