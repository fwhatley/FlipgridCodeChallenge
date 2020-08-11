import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import UiSignUp from '../../common/ui.components/ui.sign.up/ui.sign.up';

import './_sign.up.scss';

function SignUp() {

    return (
        <Container className="mt-5 sign-up">
            <Row>
                <Col xs={12} sm={10} md={8} lg={6}>
                    <UiSignUp/>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUp;
