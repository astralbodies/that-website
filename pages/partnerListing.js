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

const GET_PARTNERS = gql`
  query getPartners {
    partners {
      id
      year
      partnershipLevel
      companyName
      companyLogo
      heroImage
      website
    }
  }
`;

// const PartnerImageContainer = styled.img`
//   background-color: #fafafa;
// `;

const PioneerImageContainer = styled.div`
  //height: 609px;
  width: 387px;
  background-color: #fafafa;
`;

const PartnerLevelTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0;
`;

const renderPioneerPartner = partner => {
  return (
    <PioneerImageContainer key={partner.id}>
      <img src={partner.companyLogo} alt={partner.companyName} />
    </PioneerImageContainer>
  );
};

const renderExplorerPartner = partner => {
  return (
    <div width={4} key={partner.id}>
      <img src={partner.companyLogo} alt={partner.companyName} />
    </div>
  );
};

const partnerListing = props => {
  const { loading, error, data } = useQuery(GET_PARTNERS);

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
        <Grid columns={12}>
          <Cell width={12} className="centered-text">
            <PartnerLevelTitle>PIONEER PARTNERS</PartnerLevelTitle>
          </Cell>
          <Cell width={12} style={{ display: 'flex' }}>
            {data.partners.map(value => {
              if (value.partnershipLevel === 'PIONEER') {
                return renderPioneerPartner(value);
              }
            })}
          </Cell>
        </Grid>
      </ContentSection>
      <ContentSection>
        <Grid columns={12}>
          <Cell width={12} className="centered-text">
            <PartnerLevelTitle>EXPLORER PARTNERS</PartnerLevelTitle>
          </Cell>
          <Cell width={12} style={{ display: 'flex' }}>
            {data.partners.map(value => {
              if (value.partnershipLevel === 'EXPLORER') {
                return renderExplorerPartner(value);
              }
            })}
          </Cell>
        </Grid>
      </ContentSection>
    </div>
  );
};

export default partnerListing;
