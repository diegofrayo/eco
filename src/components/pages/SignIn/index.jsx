import React, { Fragment } from 'react';
import Form from '@diegofrayo/form';
import { styled } from '@diegofrayo/styles';

import { Box, Input, Button, Separator } from 'components/lib';

import formConfig from './formConfig';

const SignIn = function SignIn() {
  const handleSubmitClick = () => {
    alert('Submitted'); // eslint-disable-line
  };

  return (
    <Container align="center">
      <Logo src="/images/logo.png" alt="Logo" />
      <Content align="center">
        <Title>Log in into your account</Title>
        <Form onSubmit={handleSubmitClick} config={formConfig} enableLogging>
          {({ values, status, onSubmit, onInputChange, errors }) => {
            return (
              <Fragment>
                <Input
                  label="Email"
                  htmlAttrs={{
                    name: 'email',
                    type: 'email',
                    value: values.email,
                    required: '',
                  }}
                  onChange={onInputChange}
                  icon="email"
                  error={errors.email}
                />
                <Separator />
                <Input
                  label="Password"
                  htmlAttrs={{
                    name: 'password',
                    type: 'password',
                    value: values.password,
                    required: '',
                    autoComplete: 'username email',
                  }}
                  onChange={onInputChange}
                  icon="password"
                  error={errors.password}
                />
                <Separator />
                <Button
                  theme={Button.theme.primary}
                  disabled={status !== Form.STATUS.VALID}
                  onClick={onSubmit}
                >
                  Log in
                </Button>
              </Fragment>
            );
          }}
        </Form>
      </Content>
    </Container>
  );
};

// ----- Components -----

const Container = styled(Box)(
  () => `
    background: linear-gradient(0deg, rgba(193,255,224,1) 0%, rgba(238,255,239,0.45281862745098034) 100%);
    background: rgb(193,255,224);
    height: 100%;
    overflow: auto;
    width: 100%;
  `,
);

const Logo = styled.img(
  ({ theme }) => `
    margin-bottom: ${theme.space[4]}px;
    width: 100px;
    height: 100px;
  `,
);

const Content = styled(Box)(
  ({ theme }) => `
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 0px rgba(165, 165, 165, 0.5);
    height: 400px;
    max-width: 400px;
    padding: ${theme.space[4]}px;
    width: 100%;
  `,
);

const Title = styled.h1(
  ({ theme }) => `
    color: ${theme.color.primary};
    font-size: ${theme.fontSizes[5]}px;
    font-weight: 400;
    margin-bottom: ${theme.space[4]}px;
  `,
);

export default SignIn;
