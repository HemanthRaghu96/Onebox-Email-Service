import axios from "axios";

let token = localStorage.getItem("reachinbox-auth");
token = token ? JSON.parse(token) : "";

export const resetMail = async (token: string | null) => {
  try {
    const res = await axios.get(
      `https://hiring.reachinbox.xyz/api/v1/onebox/reset`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res);
    return res;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getMailMessages = async (id: number) => {
  try {
    const res = await axios.get(
      `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getMailList = async (token: string) => {
  try {
    const res = await axios.get(
      "https://hiring.reachinbox.xyz/api/v1/onebox/list",
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const deleteMailResponse = async (id: number) => {
  try {
    const res = await axios.delete(
      `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(res);
    return res;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const postMailMessages = async (id: number, messages: any) => {
  try {
    const res = await axios.post(
      `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${id}`,
      messages,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Posted:", res.data);
    return res.data;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
};
