import React from 'react';
import { styled } from '@diegofrayo/styles';
import { Box } from 'components/lib';

const data = [
  {
    name: 'Reciclando S.A',
    address: 'Cra 12 #22-90 Barrio Profesionales',
    elements: ['PET', 'Aluminio', 'Aceite'],
  },
  {
    name: 'Edeq',
    address: 'Cra 8 #22-90 Esquina Centro',
    elements: ['PET', 'Plastico', 'Elementos electronicos'],
  },
  {
    name: 'Fundacion Reciclar',
    address: 'Cra 16 #10-80 Barrio Granada',
    elements: ['Carton', 'Tapas de plastico'],
  },
];

const LocationEcoAliados = () => {
  return (
    <Box>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Header.Cell>Eco-Aliado</Table.Header.Cell>
            <Table.Header.Cell>Sede</Table.Header.Cell>
            <Table.Header.Cell>Elementos que reciben</Table.Header.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map(item => {
            return (
              <Table.Row key={item.name}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.address}</Table.Cell>
                <Table.Cell>
                  <Box dir="row" wrap grow>
                    {item.elements.map(element => {
                      return <ElementBadge key={element}>{element}</ElementBadge>;
                    })}
                  </Box>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </Box>
  );
};

// ----- Components -----

const Table = styled.table(
  ({ utils }) => `
    border-radius: 10px;
    border-spacing: 0px;
    border: 1px solid ${utils.darken('white', 0.05)};
    cursor: default;
    overflow: hidden;
    padding: 0;
    width: 600px;
  `,
);

Table.Header = styled.thead(
  ({ utils }) => `
    background-color: ${utils.darken('white', 0.05)};
  `,
);

Table.Header.Cell = styled.th(
  ({ theme }) => `
    padding: ${theme.space[2]}px ${theme.space[1]}px;
    text-align: left;
  `,
);

Table.Cell = styled.td(
  ({ theme }) => `
    padding: ${theme.space[2]}px ${theme.space[1]}px;
  `,
);

Table.Body = styled.tbody();

Table.Row = styled.tr();

const ElementBadge = styled.span(
  ({ theme }) => `
    background-color: ${theme.colors.green};
    border-radius: 10px;
    color: white;
    cursor: pointer;
    font-size: ${theme.fontSizes[1]};
    margin: ${theme.space[0]}px ${theme.space[1]}px ${theme.space[0]}px 0;
    padding: ${theme.space[0]}px ${theme.space[2]}px;
    text-align: center;
  `,
);

export default LocationEcoAliados;
