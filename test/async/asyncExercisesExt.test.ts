import { getUsersWithGroup, getUser } from "../../src/exercisesAsync";

// Exercise 9 , D4
describe("Get user with group", () => {
  it("should return an array of user object contains a nested group object as expected]", async () => {
    const data = await getUsersWithGroup();

    expect(data).toEqual([
      { name: "Erik", group: { id: 1, groupName: "Hajarna" } },
      { name: "Eva", group: { id: 1, groupName: "Hajarna" } },
      { name: "Lisa", group: { id: 2, groupName: "Valarna" } },
      { name: "Hampus", group: { id: 2, groupName: "Valarna" } },
      { name: "Linda", group: { id: 3, groupName: "Zebrorna" } },
      { name: "Anna", group: { id: 3, groupName: "Zebrorna" } },
    ]);
  });
});


// Exercise 9 , D5
describe("User case sensative ", () => {
// lowercase and false
  it("should return expected data", async () => {
    expect(await getUser("lisa", false)).toEqual({ name: "Lisa", group: 2 });
  });

  //   lowercase and ture
  it("should return undefined", async () => {
    expect(await getUser("lisa", true)).toBe(undefined);
  });

//   uppercase and true
  it("should return expected data", async () => {
    expect(await getUser("Lisa", true)).toEqual({ name: "Lisa", group: 2 });
  });

//   uppercase and false
  it("should return expected data", async () => {
    expect(await getUser("Eva", false)).toEqual({ name: "Eva", group: 1 });
  });
});
