// import { getUsers } from "../src/exercises";
import { getGroupsWithUsers } from "../../src/exercisesAsync";
import { mockUsers, fetchData, groups } from "../../src/typesAndData";

// Exercise 9, D1-2
describe("Get users and groups data", () => {
  // Get data of user
  it("should return users data as expected", async () => {
    const data = await fetchData(mockUsers);
    const expectedData = Object.values(data)[1];
    expect(expectedData).toEqual([
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
    ]);
  });

  // Get data of group
  it("should return groups data as expected", async () => {
    const data = await fetchData(groups);
    const expectedData = Object.values(data)[1];
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

  // Get success status user
  it("should return user response status == success", async () => {
    const data = await fetchData(mockUsers);
    expect(data.status).toBe("success");
  });

  // Get success status group
  it("should return group response status == success", async () => {
    const data = await fetchData(groups);
    expect(data.status).toBe("success");
  });
});


// Exercise 9, D3
describe("Get group with users", () => {
  it("should reformed group object with new key(users) as expected]", async () => {
    const data = await getGroupsWithUsers();
    expect(data).toEqual([
      { id: 1, groupName: "Hajarna", users: ["Erik", "Eva"] },
      { id: 2, groupName: "Valarna", users: ["Lisa", "Hampus"] },
      { id: 3, groupName: "Zebrorna", users: ["Linda", "Anna"] },
    ]);
  });
});
