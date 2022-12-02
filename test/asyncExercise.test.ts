// import { getUsers } from "../src/exercises";
import {
  mockUsers,
  fetchData,
  groups,
  getGroupsWithUsers,
} from "../src/async";

// Exercise 9 D1-2
describe("Get users data", () => {
  it("should return status == success", async () => {
    const data = await fetchData(mockUsers);
    expect(data.status).toBe("success");
  });

  it("should return data success", async () => {
    const data = await fetchData(groups);
    expect(data.status).toBe("success");
  });
});

// Exercise 9, D1-2
describe("Get users data", () => {
  it("should return status == success", async () => {
    const data = await fetchData(mockUsers);
    const expectedData = Object.values(data)[0];
    expect(expectedData).toEqual([
      {
          "name": "Erik",
          "group": 1
      },
      {
          "name": "Lisa",
          "group": 2
      },
      {
          "name": "Hampus",
          "group": 2
      },
      {
          "name": "Linda",
          "group": 3
      },
      {
          "name": "Eva",
          "group": 1
      },
      {
          "name": "Anna",
          "group": 3
      }
   ]);
  });

  it("should return data success", async () => {
    const data = await fetchData(groups);
    const expectedData = Object.values(data)[0];
    expect(expectedData).toEqual([
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
    ]);
  });
});

// Exercise 9, D3
describe("Get group with users", () => {
  it("should group with users:[name,...]", async () => {
    const data = await getGroupsWithUsers();
    expect(data).toEqual([
      { id: 1, groupName: "Hajarna", users: ["Erik", "Eva"] },
      { id: 2, groupName: "Valarna", users: ["Lisa", "Hampus"] },
      { id: 3, groupName: "Zebrorna", users: ["Linda", "Anna"] },
    ]);
  });
});
