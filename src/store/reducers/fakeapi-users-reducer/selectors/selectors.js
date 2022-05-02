export const getUserStatus = (state) => state?.fakeapi?.status || false;
export const getUserError = (state) => state?.fakeapi?.error || false;
export const getUsersData = (state) => state?.fakeapi?.users || [];
export const getCartData = (state) => state?.fakeapi?.cartUsers || [];
