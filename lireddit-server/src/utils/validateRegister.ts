import { UsernamePasswordInput } from "../resolvers/UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "invalid email",
      },
    ];
  }
  if (options.username.length < 5) {
    return [
      {
        field: "username",
        message: "length must be greater than 4",
      },
    ];
  }
  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "cannot inlcude an @",
      },
    ];
  }

  if (options.password.length < 5) {
    return [
      {
        field: "password",
        message: "length must be greater than 4",
      },
    ];
  }

  return null;
};
