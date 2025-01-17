import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { searchVideo } from '../../store/action/searchAction';
import {
  Container, Column, Row, Nav, LinkText, SearchInput, SearchButton,
} from './Styles';
import Headerlogo from '../../Images/Headerlogo.png';

function Header() {
  const [search, setSearch] = useState('');
  const Change = ({ target }) => {
    setSearch(target.value);
  };

  const Submit = () => {
    console.log(search);
    searchVideo(search);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      Submit();
    }
  };

  return (
    <Container>
      <Column>
        <img src={Headerlogo} alt="" />
        <p>Broadcast Yourself</p>
      </Column>
      <Column>
        <Row>
          <SearchInput
            type="text"
            onChange={Change}
          />
          <SearchButton type="button" onClick={Submit} onKeyDown={handleKeyDown}>Search</SearchButton>
        </Row>
        <Row>
          <Nav>
            <Link to="/">Home</Link>
            <Link to="Videos">Videos</Link>
            <Link to="Channels">Channels</Link>
          </Nav>
        </Row>
      </Column>
      <Column>
        <Row>
          <Nav>
            <Row>
              <Link to="SignUp">Create Account</Link>
              <LinkText>or</LinkText>
              <Link to="SignIn">Sign-in</Link>
            </Row>
          </Nav>
        </Row>
        <Row>
          <Nav>
            <Link to="Subscriptions">Subscriptions</Link>
            <Link to="History">History</Link>
            <Link to="Upload">Upload</Link>
          </Nav>
        </Row>
      </Column>
    </Container>
  );
}

// eslint-disable-next-line
const mapDispatchToProps = (dispatch) => ({
  searchVideo: (params) => {
    searchVideo(params);
  },
});

export default connect(null, mapDispatchToProps)(Header);
