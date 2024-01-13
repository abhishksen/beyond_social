import { create } from 'zustand'

const useUserProfileStore = create((set) => ({
    userProfile: null,
    setUserProfile: (userProfile) => set({ userProfile }),
    // setPost: (post) => set({ post }),
}));

export default useUserProfileStore;