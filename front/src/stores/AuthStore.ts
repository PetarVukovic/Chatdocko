// src/stores/AuthStore.ts
import { makeAutoObservable } from 'mobx';
import axios from 'axios';
import { makePersistable, clearPersistedStore } from 'mobx-persist-store';

interface User {
    id: string;
    email: string;
    // Add other user properties as needed
}

class AuthStore {
    user: User | null = null;
    token: string = '';
    loading: boolean = false;
    error: string = '';

    constructor() {
        makeAutoObservable(this);
        makePersistable(this, {
            name: 'AuthStore',
            properties: ['user', 'token'],
            storage: window.localStorage, // Using localStorage for persistence
        });
    }

    setUser(user: User | null) {
        this.user = user;
    }

    setToken(token: string) {
        this.token = token;
    }

    setLoading(loading: boolean) {
        this.loading = loading;
    }

    setError(error: string) {
        this.error = error;
    }

    async login(email: string, password: string) {
        this.setLoading(true);
        try {
            const response = await axios.post('/api/auth/login', { email, password });
            this.setToken(response.data.token);
            this.setUser(response.data.user);
            this.setError('');
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                // Check if the error is an Axios error with a response
                this.setError(error.response.data.message || 'Login failed');
            } else {
                // Handle unexpected errors
                this.setError('An unexpected error occurred');
            }
        } finally {
            this.setLoading(false);
        }
    }

    async register(email: string, password: string) {
        this.setLoading(true);
        try {
            const response = await axios.post('/api/auth/register', { email, password });
            this.setToken(response.data.token);
            this.setUser(response.data.user);
            this.setError('');
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                // Check if the error is an Axios error with a response
                this.setError(error.response.data.message || 'Registration failed');
            } else {
                // Handle unexpected errors
                this.setError('An unexpected error occurred');
            }
        } finally {
            this.setLoading(false);
        }
    }

    async logout() {
        this.setToken('');
        this.setUser(null);
        await clearPersistedStore(this);
    }
}

const authStore = new AuthStore();
export default authStore;
