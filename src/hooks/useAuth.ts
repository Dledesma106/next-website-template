import { useMutation } from '@tanstack/react-query';
import { LoginDocument, LoginMutation, LoginMutationVariables } from '@/api/graphql';
import { fetchClient } from '@/api/fetch-client';

// Hook for login mutation
export const useLogin = () => {
    return useMutation<LoginMutation, Error, LoginMutationVariables>({
        mutationFn: (variables) => fetchClient(LoginDocument, variables),
        onSuccess: (data) => {
            // Store token in localStorage
            if (data.login?.token) {
                localStorage.setItem('authToken', data.login.token);
                localStorage.setItem('user', JSON.stringify(data.login.user));
                console.log('User data stored in localStorage');
            }
        },
        onError: (error) => {
            console.error('Login error:', error);
        },
    });
};

// Hook to check if user is authenticated
export const useAuth = () => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('authToken') : null;
    const user = typeof window !== 'undefined' ? localStorage.getItem('user') : null;

    return {
        isAuthenticated: !!token,
        user: user ? JSON.parse(user) : null,
        token,
    };
};

// Hook to logout
export const useLogout = () => {
    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        // Optionally redirect to login page
        window.location.href = '/admin/login';
    };

    return { logout };
};
