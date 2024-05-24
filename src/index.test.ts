import Person from "./index";

test("Should return Gabriel", () => {
  const person = new Person();

  expect(person.sayMyName()).toBe("Gabriel");
});
