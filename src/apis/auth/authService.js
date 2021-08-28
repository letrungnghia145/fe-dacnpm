import { TOKEN_KEY } from "../../constants";
import { AxiosClient } from "../AxiosClient";

const client = new AxiosClient({ endpoint: "/auth" });

const authenticate = (email, password) => {
  return client.post("/authenticate", { email: email, password: password});
};

const authorize = () => {
  return client.get("/authorize", {}, {
    headers: { 'Authorization': `Bearer ${localStorage.getItem(TOKEN_KEY)}`}
  });
};

const register = (user) => {
  return client.post("/register", user);
}

const confirmRegister = (token, code) => {
  return client.post("/register/confirm", { token, code })
}

export const authService = {
  authenticate: (email, password) => authenticate(email, password),
  authorize: () => authorize(),
  register: (user) => register(user),
  confirmRegister: (token, code) => confirmRegister(token, code),
};
