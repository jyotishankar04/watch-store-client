import axios from "axios";
export const axiosApi = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  headers: {
    "Content-Type": "application/json",
    withCredentials: "true",
  },
});

export const authUserBySocial = async ({
  email,
  providerId,
  providerName,
  name,
  image,
}: {
  email: string;
  name: string;
  image: string;
  providerId: string;
  providerName: string;
}) => {
  try {
    const res = await axiosApi.post("/auth", {
      email,
      provider: providerName,
      providerId: providerId,
      name,
      image,
    });
    return {
      success: true,
      data: res.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};

// export const authUserByGithub = async ({
//   email,
//   provider,
//   provi,
//   name,
//   image,
// }: {
//   email: string;
//   name: string;
//   image: string;
// }) => {
//   try {
//     const res = await axiosApi.post("/user/auth", {
//       email,
//       githubId,
//       name,
//       image,
//     });
//     if (!res.data.success) {
//       return {
//         success: false,
//         error: res.data,
//       };
//     }

//     return {
//       success: true,
//       data: res.data,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       error: error,
//     };
//   }
// };

export const authenticate = async () => {
  try {
    const res = await axiosApi.get("/user/me", {
      withCredentials: true,
    });
    if (!res.data.success) {
      return {
        success: false,
        error: res.data,
      };
    }

    return {
      success: true,
      data: res.data.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};
