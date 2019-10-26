import React, { Component } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Grid, Cell } from 'styled-css-grid';
import ContentSection from '../components/shared/ContentSection';
import LinkButton from '../components/shared/LinkButton';

const RobotImage = styled.img`
  height: 500px;
  float: right;
  margin-top: -200px;
  margin-right: 35px;
`;

const GET_SPONSORS = gql`
  query getPartners {
    partners {
      id
      year
      companyName
      heroImage
      website
    }
  }
`;

const becomeAPartner = props => {
  const { loading, error, data } = useQuery(GET_SPONSORS);

  if (loading) return null;
  if (error) return null;

  console.log(data);

  return (
    <div>
      <ContentSection>
        <Grid columns={12}>
          <Cell width={6}>
            <h1
              style={{
                marginTop: 0,
                marginBottom: 0,
                marginRight: '50px',
              }}
            >
              2019 Sponsors & Partners
            </h1>
            <div style={{ display: 'flex', textAlign: 'left' }}>
              <LinkButton
                href="/BecomeAPartner"
                label="Become a Partner"
                color="thatBlue"
                borderColor="thatBlue"
                style={{ float: 'left', margin: 'unset' }}
              />
            </div>
            <RobotImage src="/images/robot.png" />
          </Cell>
          <Cell width={6}>
            <p className="large-body-copy">
              THAT Conference wouldn’t be possible without the support of our
              sponsors and partners. A large portion of the conference costs are
              paid from sponsorships so that we can keep ticket costs
              affordable. Please take a few minutes to learn about our sponsors
              and let them know you appreciate their support of our community!
            </p>
          </Cell>
        </Grid>
      </ContentSection>
      <ContentSection>
        <ul>
          {data.partners.map(value => {
            return <li key={value.id}>{value.companyName}</li>;
          })}
        </ul>
      </ContentSection>
    </div>
  );
};

export default becomeAPartner;
