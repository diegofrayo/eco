import { vlt } from '@diegofrayo/vlt';

export default {
  email: {
    type: 'string',
    handlers: {
      isValid: value => {
        const isValid = vlt()
          .email()
          .validate(value);

        if (isValid) {
          return { email: '', password: '' };
        }

        return { email: 'wrong email', password: 'wrong password' };
      },
    },
  },
  password: {
    type: 'string',
    handlers: {
      isValid: value => {
        const isValid = vlt()
          .string()
          .minLength(5)
          .validate(value);

        if (isValid) {
          return isValid;
        }

        return 'wrong password';
      },
    },
  },
};
