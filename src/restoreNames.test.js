"use strict";

const { restoreNames } = require("./restoreNames");

describe("restoreNames", () => {
  it("should set correct firstName for users with undefined firstName", () => {
    const users = [
      {
        firstName: undefined,
        lastName: "Holy",
        fullName: "Jack Holy",
      },
      {
        lastName: "Adams",
        fullName: "Mike Adams",
      },
    ];

    const modifiedUsers = restoreNames([...users]); // Create a copy of users

    expect(modifiedUsers[0].firstName).toBe("Jack");
    expect(modifiedUsers[1].firstName).toBe("Mike");
  });

  it("should not modify firstName for users with defined firstName", () => {
    const users = [
      {
        firstName: "John",
        lastName: "Smith",
        fullName: "John Smith",
      },
      {
        firstName: "Alice",
        lastName: "Johnson",
        fullName: "Alice Johnson",
      },
    ];

    const modifiedUsers = restoreNames([...users]); // Create a copy of users

    expect(modifiedUsers[0].firstName).toBe("John");
    expect(modifiedUsers[1].firstName).toBe("Alice");
  });

  it("should handle an empty array", () => {
    const users = [];

    const modifiedUsers = restoreNames([...users]); // Create a copy of users

    expect(modifiedUsers.length).toBe(0);
    expect(modifiedUsers).toEqual([]);
  });

  it("should handle users with null firstName", () => {
    const users = [
      {
        firstName: null,
        lastName: "Smith",
        fullName: "John Smith",
      },
      {
        firstName: null,
        lastName: "Johnson",
        fullName: "Alice Johnson",
      },
    ];

    const modifiedUsers = restoreNames([...users]); // Create a copy of users

    const userJohn = modifiedUsers.find((user) => user.lastName === "Smith");
    const userAlice = modifiedUsers.find((user) => user.lastName === "Johnson");

    expect(userJohn.firstName).toBe("John");
    expect(userAlice.firstName).toBe("Alice");
  });
});
