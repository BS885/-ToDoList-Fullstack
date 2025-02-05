import axios from 'axios';

axios.defaults.baseURL  = process.env.REACT_APP_API_URL;
axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.status >= 400) {
      console.error(`Error: ${error.response.status}`, error.response.data);
    }
    return Promise.reject(error);
  }
);
export default {
  getTasks: async () => {
    console.log('getTasks')
    const result = await axios.get('');    
    return result.data;
  },

  addTask: async(name)=>{
    try {
   console.log('addTask', {name})
      const result = await axios.post('',{name});
    //  console.log('result', result);
      return result.data;
    } catch (error) {
      console.log(error)
    };
  },

  setCompleted: async(id, isComplete)=>{
   // console.log('setCompleted', {id, isComplete})
    try {
      const result = await axios.put(`${id}`, isComplete, {
        headers: { "Content-Type": "application/json" }
    });
      return result.data;
    } catch (error) {
      console.log(error)
    }
  },

  deleteTask:async(id)=>{
   // console.log('deleteTask')
    try {
      const result = await axios.delete(`${id}`)
      return result.data;
    } catch (error) {
      console.log(error)
    }
  }
};
