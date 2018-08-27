import { AuthServiceConfig, GoogleLoginProvider } from "angularx-social-login";

export const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(
      "562400802513-l81m74td45m43m3r8mj9qq3ipdg9o071.apps.googleusercontent.com"
    )
  }
]);

export function provideConfig() {
  return config;
}
