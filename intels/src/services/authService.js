// Mock authentication service for demonstration purposes
export const signUp = async (email, password) => {
    // Mock API call to sign up user
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate successful sign-up
        console.log('Signed up:', email);
        resolve();
      }, 1000);
    });
  };
  
  export const signIn = async (email, password) => {
    // Mock API call to sign in user
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate successful sign-in
        console.log('Signed in:', email);
        resolve();
      }, 1000);
    });
  };
  