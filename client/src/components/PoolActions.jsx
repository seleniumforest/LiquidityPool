import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Row } from 'react-bootstrap';
import React from 'react';

export default function PoolActions() {
    const { assets } = useSelector(state => ({
        assets: state.assets
    }))

    const dispatch = useDispatch();

    const asset1 = assets[0];
    const asset2 = assets[1];

    let ActionButton = (type, label, count) => (
        <Button onClick={() => dispatch({ type: type, payload: { count: count } })}>
            {label}
        </Button>
    );

    return (
        <div className="poolActions">
            <Row>
                <Col>
                    {ActionButton('buy', `Buy 1 ${asset1.ticker}`, 1)}
                </Col>
                <Col>
                    {ActionButton('sell', `Sell 1 ${asset1.ticker}`, 1)}
                </Col>
            </Row>
            <Row>
                <Col>
                    {ActionButton('buy', `Buy 10 ${asset1.ticker}`, 10)}
                </Col>
                <Col>
                    {ActionButton('sell', `Sell 10 ${asset1.ticker}`, 10)}
                </Col>
            </Row>
        </div>
    );
}