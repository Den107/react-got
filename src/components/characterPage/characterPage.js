import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import ItemList from '../itemList/itemList';
import CharDetails from '../charDetails/charDetails';
import ErrorMsg from '../errorMsg/errorMsg';
import gotService from '../../services/gotService';

export default class CharacterPage extends Component {
  gotService = new gotService();

  state = {
    selectedChar: 130,
    error: false
  }

  componentDidCatch() {
    this.setState({
      error: true
    })
  }

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id
    })
  }

  render() {
    if (this.state.error) {
      return <ErrorMsg />
    }
    return (
      <Row>
        <Col md='6'>
          <ItemList
            onCharSelected={this.onCharSelected}
            getData={this.gotService.getAllCharacters}
          />
        </Col>
        <Col md='6'>
          <CharDetails charId={this.state.selectedChar} />
        </Col>
      </Row>
    );
  }
}