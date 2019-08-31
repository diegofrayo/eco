import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Form from '@diegofrayo/form';
import { styled } from '@diegofrayo/styles';

import { Box, Input, Button, Separator } from 'components/lib';
import { Routes, redirect } from 'routing';

import formConfig from './formConfig';

const SignIn = function SignIn({ history }) {
  const handleSubmitClick = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
        redirect(Routes.HOME, history);
      }, 2000);
    });
  };

  return (
    <Container align="center" p={3} grow>
      <Logo src="/images/logo.png" alt="Logo" />
      <Content align="center" p={3}>
        <Title>Inicia sesión con tu cuenta Eco</Title>
        <Form onSubmit={handleSubmitClick} config={formConfig}>
          {({ values, status, errors, onInputChange, onSubmit }) => {
            return (
              <Fragment>
                <Input
                  label="Correo electrónico"
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
                <Separator size={1} />
                <Input
                  label="Contraseña"
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
                <Separator size={1} />
                <Button
                  theme={Button.theme.primary}
                  disabled={status !== Form.STATUS.VALID}
                  loading={status === Form.STATUS.LOADING}
                  onClick={onSubmit}
                >
                  Entrar
                </Button>
              </Fragment>
            );
          }}
        </Form>
      </Content>
    </Container>
  );
};

SignIn.propTypes = {
  history: PropTypes.object.isRequired,
};

// ----- Components -----

const Container = styled(Box)(
  ({ theme }) => `
    background: rgb(193,255,224);
    background: linear-gradient(0deg, rgba(193,255,224,1) 0%, rgba(238,255,239,0.45281862745098034) 100%);
    overflow: auto;
    height: 100vh;

    ${theme.mediaQueries.landscape} {
      height: auto;
    }
  `,
);

const Logo = styled.img(
  ({ theme }) => `
    height: 100px;
    margin-bottom: ${theme.space[3]}px;
    width: 100px;
  `,
);

const Content = styled(Box)(
  () => `
    background-color: white;
    border-radius: 10px;
    box-shadow: 1px 1px 5px 0px rgba(165, 165, 165, 0.5);
    height: 400px;
    max-width: 400px;
    width: 100%;
  `,
);

const Title = styled.h1(
  ({ theme }) => `
    color: ${theme.colors.green};
    font-size: ${theme.fontSizes[6]};
    font-weight: 400;
    margin-bottom: ${theme.space[3]}px;
    text-align: center;
  `,
);

export default SignIn;
