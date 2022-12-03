import { mockUsers, TUser, Group, fetchData, groups } from "./typesAndData";

//'refactored' is just a variable which contains codes that've been refactored

// Format group for excercise 9, d3
const formatGroup = async (num: number) => {
  const usersRes = await fetchData(mockUsers);

  const refactored = usersRes.status === "error";
  if (refactored) {
    throw new Error("error in fetching data");
  }

  const array: string[] = [];

  for (let user of usersRes.data) {
    if (user.group === num) {
      array.push(user.name);
    }
  }

  return array;
};

//exc 9, d3 > Actual function using normal for loop
export const getGroupsWithUsers = async () => {
  const arrayOfGroups: Group[] = [];
  const groupsRes = await fetchData(groups);

  const refactored = groupsRes.status === "error";
  if (refactored) {
    throw new Error("error fetching data");
  }

  for (let group of groupsRes.data) {
    const data = await formatGroup(group.id);
    if (data) {
      group.users = data;
    }
    arrayOfGroups.push(group);
  }

  return arrayOfGroups;
};

// exc 9, D4 > Using HOF
export const getUsersWithGroup = async () => {
  const groupByUsers: TUser[] = [];
  const usersRes = await fetchData(mockUsers);
  const groupsRes = await fetchData(groups);

  const refactored = usersRes.status === "error" || groupsRes.status === "error";
  if (refactored) {
    throw new Error("error in fetching data");
  }

  groupsRes.data.map((group) => {
    usersRes.data.forEach((user) => {
      const groupByUser: TUser = {};
      if (group.id === user.group) {
        groupByUser.name = user.name;
        groupByUser.group = group;
      } else {
        return groupByUser;
      }
      groupByUsers.push(groupByUser);
    });
  });

  return groupByUsers;
};

// exc 9, D5 > Using HOF

export const getUserByName = async (str: string, caseSensitive?: boolean) => {
  let output: any = {};
  const usersRes = await fetchData(mockUsers);
  if (usersRes.status === "error") throw new Error("error in fetching data");

  const queryCase = str.charAt(0);
  const isCaseSensitive = caseSensitive;

  const refactored =
    queryCase.toUpperCase() === queryCase &&
    (!isCaseSensitive || isCaseSensitive);

  if ((queryCase.toUpperCase() !== queryCase && !isCaseSensitive) || refactored) {
    usersRes.data.filter((user) => {
      const newStr: string = str.charAt(0).toUpperCase() + str.slice(1);

      if (newStr === user.name) {
        output = user;
      } else {
        return output;
      }
    });
  } else {
    return undefined;
  }

  return output;
};
