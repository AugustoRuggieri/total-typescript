interface UserPart {
  name: string;
  age: number;
};

interface UserPart2 {
  phone: string;
};

interface User extends UserPart, UserPart2 {
  id: string | number;
}

const user: User = {
  id: "1",
  name: "John",
  age: 20,
  phone: "123456789",
};
