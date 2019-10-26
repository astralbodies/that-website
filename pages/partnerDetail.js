import React, { Component } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Grid, Cell } from 'styled-css-grid';
import Link from 'next/link';
import ContentSection from '../components/shared/ContentSection';
import LinkButton from '../components/shared/LinkButton';

const RobotImage = styled.img`
  height: 500px;
  float: right;
  margin-top: -200px;
  margin-right: 35px;
`;

const GET_PARTNER = gql`
  query getPartner($partnerId: ID) {
    partner(id: $partnerId) {
      id
      year
      companyName
      heroImage
      website
    }
  }
`;

export default class extends Component {
  static getInitialProps({ query: { id } }) {
    return { partnerId: id };
  }

  render() {
    return (
      <div>
        <h1>About #{this.props.partnerId}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    );
  }
}
