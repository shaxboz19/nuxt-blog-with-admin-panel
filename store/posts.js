const posts = [
  {
    title: "Post 1 ",
    date: new Date(),
    views: 22,
    comments: [1, 2],
    _id: 'id1',
  },
  {
    title: "Post 2 ",
    date: new Date(),
    views: 22,
    comments: [1, 2],
    _id: 'id2',
  },
  {
    title: "Post 3 ",
    date: new Date(),
    views: 22,
    comments: [1, 2],
    _id: 'id3',
  },
  {
    title: "Post 4 ",
    date: new Date(),
    views: 22,
    comments: [1, 2],
    _id: 'id4',
  },
];
export const state = () => {};
export const actions = {
  async fetchAdmin({}) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts);
      }, 1000);
    });
  },

  async removePost({}, i) {
    console.log(i);
  },
 async updatePost({}, {text, id}) {
        console.log(text);
  },

  async fetchAdminById({}, id) {
      
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find((p) => p._id == id));
      }, 1000);
    });
  },
  async createPost({commit}, {text, title, image}) {
    try{
      const fd = new FormData();
      fd.append('title', title);
      fd.append('text', text);
      fd.append('image', image, image.name);

      await new Promise(resolve =>{
        setTimeout(()=>{
          resolve({text, title})
        }, 1000)
      })

    }catch(e) {
      commit('setError', e , {root: true})
      throw e
    }
  }

  
};
