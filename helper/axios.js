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
const eventForm = axios.create({
  baseURL: `${url}/eventForm`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const jobForm = axios.create({
  baseURL: `${url}/jobForm`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const rentalForm = axios.create({
  baseURL: `${url}/rentalForm`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const buySellForm = axios.create({
  baseURL: `${url}/buySellForm`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const deshiOneForm = axios.create({
  baseURL: `${url}/deshiOneForm`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const jobCategory = axios.create({
  baseURL: `${url}/jobCategory`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const jobSubCategory = axios.create({
  baseURL: `${url}/JobSubCategory`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const eventCategory = axios.create({
  baseURL: `${url}/eventCategory`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const eventSubCategory = axios.create({
  baseURL: `${url}/eventSubCategory`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const deshiCategory = axios.create({
  baseURL: `${url}/deshiCategory`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const deshiSubCategory = axios.create({
  baseURL: `${url}/deshiSubCategory`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const buyCategory = axios.create({
  baseURL: `${url}/buyCategory`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const buySubCategory = axios.create({
  baseURL: `${url}/buySubCategory`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const rentalCategory = axios.create({
  baseURL: `${url}/rentalCategory`,
});
users.interceptors.request.use(
  (req) => {
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);
const rentalSubCategory = axios.create({
  baseURL: `${url}/rentalSubCategory`,
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
  eventForm,
  jobForm,
  rentalForm,
  buySellForm,
  deshiOneForm,
  jobCategory,
  jobSubCategory,
  eventCategory,
  eventSubCategory,
  deshiCategory,
  deshiSubCategory,
  buyCategory,
  buySubCategory,
  rentalCategory,
  rentalSubCategory,
};
