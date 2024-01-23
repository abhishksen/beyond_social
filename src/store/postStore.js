import { create } from "zustand";

const usePostStore = create((set) => ({
    posts: [],
    createPost: (post) => set(state => ({ posts: [post, ...state.posts] })),
    // deletePost: (id) => set(state => ({ posts: state.posts.filter(post => post.id !== id) })),
    // addComment: (id, comment) => set(state => ({ posts: state.posts.map(p => p.id === id ? { ...p, comments: [...p.comments, comment] } : p) })),
    // setPost: (id, post) => set(state => ({ posts: state.posts.map(p => p.id === id ? post : p) })),
}));

export default usePostStore;