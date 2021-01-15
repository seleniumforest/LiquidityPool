import { useSelector, useDispatch } from 'react-redux';
import { Col, Row, Button } from 'react-bootstrap';
import React from 'react';
import { format } from '../calculatedProps';

export default function History() {
    const { history } = useSelector(state => ({
        history: state.history
    }));

    let dispatch = useDispatch();

    function getColor(name) {
        if (name === 'Buy')
            return 'green';

        if (name === 'Sell')
            return 'red';

        return 'black';
    };

    return (
        <>
            <Row>
                <Col>
                    <h4>Pool History</h4>
                </Col>
                <Col>
                    <Button onClick={() => dispatch({ type: 'clear', payload: {} })}>
                        Clear history
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <b>Action</b>
                </Col>
                <Col>
                    <b>ETH Price</b>
                </Col>
            </Row>
            {history.map((x, i) => (
                <Row key={i} style={{ color: getColor(x.name) }}>
                    <Col>
                        {x.name}
                    </Col>
                    <Col>
                        {format(x.currentEthPrice)}
                    </Col>
                </Row>
            ))}
        </>
    );
}