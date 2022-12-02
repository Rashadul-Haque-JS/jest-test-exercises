export type User = {
  name: string;
  group: number;
};

export type Group = {
  id: number;
  groupName: string;
  users?: string[];
};

export const mockUsers: User[] = [
  {
    name: "Erik",
    group: 1,
  },
  {
    name: "Lisa",
    group: 2,
  },
  {
    name: "Hampus",
    group: 2,
  },
  {
    name: "Linda",
    group: 3,
  },
  {
    name: "Eva",
    group: 1,
  },
  {
    name: "Anna",
    group: 3,
  },
];

export const groups: Group[] = [
  {
    id: 1,
    groupName: "Hajarna",
  },
  {
    id: 2,
    groupName: "Valarna",
  },
  {
    id: 3,
    groupName: "Zebrorna",
  },
];

export type ApiResponse<T> =
  | {
      status: "success";
      data: T[];
    }
  | {
      status: "error";
      error: string;
    };

export const fetchData = async <T>(array: T[]): Promise<ApiResponse<T>> => {
  return new Promise((res) =>
    res({
      data: array,
      status: "success",
    })
  );
};

// Format group for excercise 9, d3
const formatGroup = async (n: number) => {
  const usersRes = await fetchData(mockUsers);
  const groupsRes = await fetchData(groups);

  if (usersRes.status === "error" || groupsRes.status === "error") {
    throw new Error("error fetching data");
  }

  const array: string[] = [];

  for (let user of usersRes.data) {
    if (user.group === n) {
      array.push(user.name);
    }
  }

  let groupData;

  for (let object of groupsRes.data) {
    if (object.id === n) {
      groupData = object;
      groupData.users = array;
    }
  }
  return groupData;
};

// actual formula for exc 9, d3
export const getGroupsWithUsers = async () => {
  const arrayOfGroups: Group[] = [];
  const groupsRes = await fetchData(groups);
  if (groupsRes.status === "error") {
    throw new Error("error fetching data");
  }
  for (let group of groupsRes.data) {
    const data = await formatGroup(group.id);
    if (data) {
      arrayOfGroups.push(data);
    }
  }
  console.log(arrayOfGroups);
  return arrayOfGroups;
};
