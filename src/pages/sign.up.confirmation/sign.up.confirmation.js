import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import UiSignUpConfirmation from '../../common/ui.components/ui.sign.up.confirmation/ui.sign.up.confirmation';

import './_sign.up.confirmation.scss';

function SignUpConfirmation() {

    return (
        <Container className="mt-5 sign-up-confirmation">
            <Row>
                <Col xs={12} sm={10} md={8} lg={6}>
                    <UiSignUpConfirmation/>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUpConfirmation;
