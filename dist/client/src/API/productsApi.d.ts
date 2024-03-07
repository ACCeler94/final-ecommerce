declare const productsAPI: {
    fetchAll: () => Promise<import("axios").AxiosResponse<any, any>>;
    fetchById: (id: string) => Promise<import("axios").AxiosResponse<any, any>>;
};
export default productsAPI;
