export enum Role {
  STAFF = 'staff',
  STUDENT = 'student',
  MANAGER = 'manager',
  ADMIN = 'admin',
}
export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export interface Address {
  city: string;
  street: string;
  postalCode: string;
}

export interface ObjInt {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: Address;
  role: string;
  username: string;
  profilePhotoUrl: string;
  gender: string;
}
