export class ClientRegistration {
  name: string;
  siteUrl: string;
}

export class Client {
  id: string;
  name: string;
  siteUrl: string;
  employees: EmployeeProfile[];
  customers: CustomerProfile[];
  clientTheme: ClientTheme;
}

export class ClientTheme {
  font: string;
  primaryColour: string;
  secondaryColour: string;
  warningColour: string;
  dangerColour: string;
  logoPath: string;
  logoData: string;
}

export abstract class AuthUserProfile {
  username: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  aggreedToTerms: boolean;
  validatedEmail: boolean;
}

export class EmployeeProfile extends AuthUserProfile {
  employeeData: EmployeeData;
}

export class EmployeeData {
  employeeId: string;
}

export class CustomerProfile extends AuthUserProfile {
  customerData: CustomerData;
}

export class CustomerData {
  myVehicles: CustomerVehicle[];
}

export class CustomerVehicle {
  make: string;
  model: string;
  registration: string;
  colour: string;
  fuelType: string;
  year: number;
  mOTResults: MotResult[];
}

export class MotResult {
  completedDate: string;
  testResult: string;
  expiryDate: string;
  odometerValue: string;
  odometerUnit: string;
  odometerResultType: string;
  motTestNumber: string;
  rfrAndComments: any[];
}
