import { useSelector } from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import { format } from '../calculatedProps';
import React from 'react';

export default function PoolInfo() {
    const { assets } = useSelector(state => ({
        assets: state.assets
    }));
    const asset1 = assets[0];
    const asset2 = assets[1];

    return (
        <div className="poolInfo">
            <Row>
                <Col >
                    <h4>{asset1.ticker}</h4>
                </Col >
                <Col >
                    <h4>{asset2.ticker}</h4>
                </Col >
            </Row>
            <Row>
                <Col >
                    {`1 ${asset1.ticker} = $${format(asset2.count / asset1.count)}`}
                </Col >
                <Col >
                    {`1 ${asset2.ticker} = $${asset2.price}`}
                </Col >
            </Row>
            <Row>
                <Col >
                    {`${asset1.ticker} pool size: ${format(asset1.count)} ${asset1.ticker}`}
                </Col >
                <Col >
                    {`${asset2.ticker} pool size: ${format(asset2.count)} ${asset2.ticker}`}
                </Col >
            </Row>
            <Row>
                <Col lg={2}></Col>
                <Col>
                    <b>{`Constant product: ${format(asset1.count)} * ${format(asset2.count)} = ${format(asset1.count * asset2.count)}`}</b>
                </Col >
                <Col lg={2}></Col>
            </Row>
        </div>
    );
}