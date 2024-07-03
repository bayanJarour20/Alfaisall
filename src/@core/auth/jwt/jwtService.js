import jwtDefaultConfig from "./jwtDefaultConfig"
import { BToast } from "bootstrap-vue"
import useJwt from '@/auth/jwt/useJwt'
import router from '@/router'

export default class JwtService {
    // Will be used by this service for making API calls
    axiosIns = null;

    // jwtConfig <= Will be used by this service
    jwtConfig = { ...jwtDefaultConfig };

    // For Refreshing Token
    isAlreadyFetchingAccessToken = false;

    // For Refreshing Token
    subscribers = [];

    constructor(axiosIns, jwtOverrideConfig) {
        this.axiosIns = axiosIns;
        this.jwtConfig = { ...this.jwtConfig, ...jwtOverrideConfig };

        // Request Interceptor
        this.axiosIns.interceptors.request.use(
            config => {
                // store.dispatch("app/setLoading", true);

                // Get token from localStorage
                const accessToken = this.getToken();

                // If token is present add it to request's Authorization Header
                if (accessToken) {
                    // eslint-disable-next-line no-param-reassign
                    config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
                }
                return config;
            },
            error => Promise.reject(error)
        );

        // Add request/response interceptor
        this.axiosIns.interceptors.response.use(
            response => {
                // store.dispatch("app/setLoading", false);
                return response;
            },
            error => {
                // const { config, response: { status } } = error
                const {  response } = error; // config,
                // const originalRequest = config;

                // if (status === 401) {
                if (response && response.status === 401) {
                    localStorage.removeItem(useJwt.jwtConfig.storageTokenKeyName)

                    // Remove userData from localStorage
                    localStorage.removeItem('userData')

                    // Redirect to login page
                    router.push('/login')

                    // this.refreshToken().then(r => {
                    //     this.isAlreadyFetchingAccessToken = false;
                    //     // Update accessToken in localStorage
                    //     this.setToken(r.data.accessToken);
                    //     this.setRefreshToken(r.data.refreshToken);
                    //     this.onAccessTokenFetched(r.data.accessToken);
                    // });
                    // const retryOriginalRequest = new Promise(resolve => {
                    //     this.addSubscriber(accessToken => {
                    //         // Make sure to assign accessToken according to your response.
                    //         // Check: https://pixinvent.ticksy.com/ticket/2413870
                    //         // Change Authorization header
                    //         originalRequest.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`;
                    //         resolve(this.axiosIns(originalRequest));
                    //     });
                    // });
                    // return retryOriginalRequest;
                } else if (response && response.status === 403 && (response.config.url.toLowerCase() == this.jwtConfig.loginEndpoint.toLowerCase() || response.config.url.toLowerCase() == "User/Login".toLowerCase())) {
                    const bToast = new BToast()
                    bToast.$bvToast.toast(`اسم المستخدم او كلمة المرور خطأ!`, {
                        title: "خطأ تسجيل الدخول",
                        variant: "danger",
                        toaster: "b-toaster-top-right",
                        solid: true,
                        autoHideDelay: 2000,
                        appendToast: true,
                    });
                }
                return Promise.reject(error);
            }
        );
    }

    onAccessTokenFetched(accessToken) {
        this.subscribers = this.subscribers.filter(callback =>
            callback(accessToken)
        );
    }

    addSubscriber(callback) {
        this.subscribers.push(callback);
    }

    getToken() {
        return localStorage.getItem(this.jwtConfig.storageTokenKeyName);
    }

    getRefreshToken() {
        return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName);
    }

    setToken(value) {
        localStorage.setItem(this.jwtConfig.storageTokenKeyName, value);
    }

    setRefreshToken(value) {
        localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName, value);
    }

    login(...args) {
        return this.axiosIns.post(this.jwtConfig.loginEndpoint, ...args);
    }

    register(...args) {
        return this.axiosIns.post(this.jwtConfig.registerEndpoint, ...args);
    }

    refreshToken() {
        return this.axiosIns.post(this.jwtConfig.refreshEndpoint, {
            refreshToken: this.getRefreshToken()
        });
    }
}
