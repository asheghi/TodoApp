import { ax } from "../plugins/axios";
const project = import.meta.env.VITE_NB_PROJECT

export const Api = {
  async login(payload) {
    const { data, status } = await ax.post(`auth/${project}/login`, payload);
    return { data, status };
  },
  async register(payload) {
    const { data, status } = await ax.post(`auth/${project}/register`, payload);
    return { data, status };
  },
  async me() {
    const { data, status } = await ax.get(`auth/${project}/me`);
    return { data, status };
  },
  Documents(collection) {
    return {
      async create(payload) {
        const { data, status } = await ax.post(
          `documents/${project}/${collection}/create`,
          payload
        );
        return { data, status };
      },
      async updateOne(filter, payload) {
        const { data, status } = await ax.put(
          `documents/${project}/${collection}/updateOne`,
          payload,
          {
            params: filter,
          }
        );
        return { data, status };
      },
      async find({ params } = {}) {
        const { data, status } = await ax.get(
          `documents/${project}/${collection}/find`,
          { params }
        );
        return { data, status };
      },
      async findOne({ params } = {}) {
        log.debug("find one doc called with", params);
        const { data, status } = await ax.get(
          `documents/${project}/${collection}/findOne`,
          { params }
        );
        return { data, status };
      },
      async count() {
        const { data, status } = await ax.get(
          `documents/${project}/${collection}/count`
        );
        return { data, status };
      },
      async deleteOne(payload) {
        const { data, status } = await ax.post(
          `documents/${project}/${collection}/deleteOne`,
          payload
        );
        return { data, status };
      },
    };
  },
};
