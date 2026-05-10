export const mockAuthService = {
  register: (userData: any) => {
    // Simulate a network delay
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.setItem("solarlink_user", JSON.stringify(userData));
        resolve({ success: true, user: userData });
      }, 800);
    });
  },
  
  getUser: () => {
    const data = localStorage.getItem("solarlink_user");
    return data ? JSON.parse(data) : null;
  },

  logout: () => {
    localStorage.removeItem("solarlink_user");
  }
};