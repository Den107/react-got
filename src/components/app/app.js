import React, { Component } from 'react';
import { Col, Row, Container, Button } from 'reactstrap';
import Header from '../header/header';
import RandomChar from '../randomChar/randomChar';
import ErrorMsg from '../errorMsg/errorMsg';
import CharacterPage from '../characterPage/characterPage';
import './app.css';


export default class App extends Component {
    state = {
        showRandomChar: true,
        error: false,
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }



    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMsg />
        }
        const char = this.state.showRandomChar ? <RandomChar /> : null;
        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {char}
                            <Button className="toggle-btn" onClick={this.toggleRandomChar}>Toggle visible random character</Button>
                        </Col>
                    </Row>
                    <CharacterPage />
                </Container>
            </>
        );
    }

};

