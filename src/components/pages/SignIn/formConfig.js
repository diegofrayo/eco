import { vlt } from '@diegofrayo/vlt';

export default {
  email: {
    type: 'string',
    errorMessage: 'Type a valid email',
    defaultValue: 'eco-test-user@gmail.com',
    handlers: {
      isValid: value => {
        return vlt()
          .email()
          .validate(value);
      },
    },
  },
  password: {
    type: 'string',
    errorMessage: 'Type a valid password',
    defaultValue: '12345',
    handlers: {
      isValid: value => {
        return vlt()
          .string()
          .minLength(5)
          .validate(value);
      },
    },
  },
};
