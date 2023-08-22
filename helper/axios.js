import axios from "axios";

const url = process.env.NEXT_PUBLIC_URL;
console.log(url);

const login = axios.create({
  baseURL: `${url}/auth/login`,
});
login.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const logout = axios.create({
  baseURL: `${url}/auth/register`,
});
logout.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const users = axios.create({
  baseURL: `${url}/users`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const basicInfo = axios.create({
  baseURL: `${url}/basicInfo`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const businessInfo = axios.create({
  baseURL: `${url}/businessInfo`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const socialNetwork = axios.create({
  baseURL: `${url}/socialNetwork`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const busiBusinessInfo = axios.create({
  baseURL: `${url}/busiBusinessInfo`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const blogForm = axios.create({
  baseURL: `${url}/blogForm`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export {
  login,
  users,
  basicInfo,
  businessInfo,
  socialNetwork,
  busiBusinessInfo,
  blogForm,
};
