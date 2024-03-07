declare const usersAPI: {
    fetchUserData: () => Promise<import("axios").AxiosResponse<any, any>>;
};
export default usersAPI;
