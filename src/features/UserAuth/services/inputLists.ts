import iconPerson from '../images/icon-person.svg';
import iconEmail from '../images/icon-mail.svg';
import iconLock from '../images/icon-lock.svg';
import iconAccept from '../images/icon-accept.svg';

export interface IInput<I> {
  icon: string,
  placeholder: string,
  name: I,
  type?: 'email' | 'text' | 'password',
  testData?: string,
}

export interface IRestoreFormValues {
  userName: string
}
export interface ISignInFormValues {
  userName: string,
  password: string,
}

export interface ISignUpFormValues extends ISignInFormValues {
  firstName: string,
  lastName: string,
  passwordConfirm: string
}

export const signUpInputsInitialValues : ISignUpFormValues = {
  firstName: '',
  lastName: '',
  userName: '',
  password: '',
  passwordConfirm: '',
};
export const signInpInputsInitialValues : ISignInFormValues = {
  userName: '',
  password: '',
};
export const restorePasswordInitialValues : IRestoreFormValues = {
  userName: '',
};

export const signUpInputList : IInput<keyof ISignUpFormValues>[] = [
  {
    icon: iconPerson,
    placeholder: 'First Name',
    name: 'firstName',
    testData: 'Greg',
  },
  {
    icon: iconPerson,
    placeholder: 'Second Name',
    name: 'lastName',
    testData: 'NotHouse',
  },
  {
    icon: iconEmail,
    type: 'email',
    placeholder: 'Email',
    name: 'userName',
    testData: 'greg@email.com',
  },
  {
    icon: iconLock,
    type: 'password',
    placeholder: 'Password',
    name: 'password',
    testData: '123456',
  },
  {
    icon: iconAccept,
    type: 'password',
    placeholder: 'Confirm password',
    name: 'passwordConfirm',
    testData: '123456',
  },
];

export const signInInputList : IInput<keyof ISignInFormValues>[] = [
  {
    icon: iconEmail,
    placeholder: 'Email',
    type: 'email',
    name: 'userName',
    testData: 'greg@email.com',
  },
  {
    icon: iconLock,
    placeholder: 'Password',
    type: 'password',
    name: 'password',
    testData: '123456',
  },
];

export const restorePasswordInputList: IInput<keyof IRestoreFormValues>[] = [
  {
    icon: iconEmail,
    placeholder: 'Email',
    name: 'userName',
  },
];
