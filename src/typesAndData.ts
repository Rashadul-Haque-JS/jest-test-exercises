export type User = {
  name: string;
  group: number;
  
};

export type TUser = {
    name?: string;
    group?: {
      id: number;
      groupName: string;
    };
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
  return new Promise((res, rej) => {
    if (res) {
      return res({
        status: "success",
        data: array,
      });
    } else {
      return rej({
        status: "error",
        error: "error",
      });
    }
  });
};
