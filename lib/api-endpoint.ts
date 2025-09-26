export const API_ENDPOINTS = {
    register: "/auth/register",
    login: '/auth/login',
    getallproducts: '/products',
    createproduct: '/products',
    getproductbyid: (id: string) => `/products/${id}`,

    editproduct: (id: string) => `/products/${id}`,
    deleteproduct: (id: string) => `/products/${id}`,
}