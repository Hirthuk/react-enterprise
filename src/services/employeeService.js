import api from "./api";

const getEmployees = async () => {
    const response = await api.get("/employees");
    return response.data;
};

export default getEmployees;