import { Injectable } from '@angular/core';
import { AuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CustomerService, ClientService, EmployeeService } from '../../../app/api/services';
import { Router } from '@angular/router';

export class LoginRequest {
    provider?: string;
    email?: string;
    password?: string;
    providerIdToken?: string;
}

@Injectable()
export class TechDevsAuthService {

    constructor(
        private socialAuth: AuthService,
        private employeeService: EmployeeService,
        private router: Router
    ) { }

    async loginWithEmail(email: string, password: string): Promise<string> {
        this.logout();
        const loginRequest: LoginRequest = { provider: "TechDevs", email: email, password: password };
        try {
            const token = await this.employeeService.Login({ request: loginRequest }).toPromise();
            this.onSuccessfulLogin(token);
            return "Success";
        } catch (error) {
            if (error.status == 401) {
                return "Invalid credentials";
            }
            return "Could not log in. Please try again";
        }
    }

    async loginWithGoogle(): Promise<string> {
        this.logout();
        console.log('Logging in with Google');
        const provider = 'Google';
        let user: SocialUser;
        try {
            user = await this.socialAuth.signIn(GoogleLoginProvider.PROVIDER_ID);
        } catch (error) {
            console.log('Error signing in with Goolge');
            return "Error signing in with Google";
        }
        const idToken = user.idToken;
        const loginRequest: LoginRequest = { provider: provider, providerIdToken: idToken };
        const token = await this.employeeService.Login({request: loginRequest}).toPromise();
        this.onSuccessfulLogin(token);
        return "Success";
    }

    loginWithFacebook() {
        const provider = 'Facebook';
    }

    authState() {
        return this.socialAuth.authState;
    }

    logout() {
        this.clearLocalToken();
        this.redirectToLogin();
    }

    redirectToLogin() {
        this.router.navigate(['signout']);
    }

    redirectToAccount() {
        this.router.navigate(['account']);
    }

    get isLoggedIn(): boolean {
        const jwt = new JwtHelperService;
        if (!this.token) return false;
        const expired = jwt.isTokenExpired(this.token);
        if (expired) {
            this.clearLocalToken();
        }
        return !expired;
    }

    get token(): string {
        return window.localStorage.getItem(this.getTokenKey());
    }

    private async onSuccessfulLogin(token: string) {
        this.setLocalToken(token);
        this.redirectToAccount();
    }

    private setLocalToken(token: string) {
        window.localStorage.setItem(this.getTokenKey(), token);
    }

    private clearLocalToken() {
        window.localStorage.removeItem(this.getTokenKey());
    }

    private getTokenKey(): string {
        return `techdevs-auth-token:techdevs`;
    }

}
