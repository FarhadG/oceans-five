import React from 'react';
import {Link} from 'react-router';
import {
    Card, CardBlock, CardGroup,
    ListGroup, ListGroupItem
} from 'reactstrap';

import '../style.scss';

export default () => (
    <div className="view">
        <div className="view-content view-pages view-invoice view d-flex justify-content-center align-items-center flex-column">
            <Card className="mb-3 invoice-card">
                <CardBlock>
                    <div className="d-flex justify-content-between flex-wrap">
                        <Link to="/">
                            <strong className="h4 text-uppercase font-weight-bold" style={{color: '#fafafa'}}>Ocean's Five</strong>
                        </Link>
                        <div>
                            <h4 className="text-uppercase">Invoice</h4>
                            <h6>Invoice No - #4032</h6>
                            <small>Date: 24-02-2017</small>
                        </div>
                    </div>
                    <hr/>
                    <CardGroup>
                        <Card>
                            <CardBlock>
                                <em className="text-muted">Received From:</em>
                                <h5>Eract Web Studio</h5>
                                <address>
                                    22/B, Park Street Road,<br/>
                                    New Delhi 110021, <br/>India.
                                    <br/>Ph: (011)-2343444
                                </address>
                            </CardBlock>
                        </Card>
                        <Card>
                            <CardBlock>
                                <em className="text-muted">Sent To:</em>
                                <h5>John Doe</h5>
                                <address>
                                    C-322, 5th Avenue Suite 600<br/>
                                    San Francisco, CA 93821, <br/>U.S.
                                    <br/>Ph: (123)-438335
                                </address>
                            </CardBlock>
                        </Card>
                    </CardGroup>
                    <div className=" table-responsive">
                        <table className="table-bordered table mt-4">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Unit Price</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>2400</td>
                                    <td>Moto G2 32GB<div className="text-muted small">Lorem ipsum dolar dummy text</div></td>
                                    <td>1</td>
                                    <td>$449.00</td>
                                    <td>$449.00</td>
                                </tr>
                                <tr>
                                    <td>2401</td>
                                    <td>IPad Mini 32GB Wifi+Cellular<div className="text-muted small">Pellentesque maximus feugiat lorem at cursus.</div></td>
                                    <td>2</td>
                                    <td>$349.00</td>
                                    <td>$698.00</td>
                                </tr>
                                <tr>
                                    <td>2402</td>
                                    <td>MacPro Retina 13"<div className="text-muted small">Nor again is there anyone who loves or pursues or desires.</div></td>
                                    <td>1</td>
                                    <td>$999.00</td>
                                    <td>$999.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="text-right">
                        <h5 className="mb-4 mt-4">Balance Due</h5>
                        <ListGroup className="d-inline-block w-50">
                            <ListGroupItem className="justify-content-between"><strong>Sub Total:&nbsp;</strong>$1797</ListGroupItem>
                            <ListGroupItem className="text-primary justify-content-between"><strong>Taxes(12.5%):&nbsp;</strong> $215.64</ListGroupItem>
                            <ListGroupItem className="justify-content-between"><strong>Total:&nbsp;</strong>$2013.64</ListGroupItem>
                        </ListGroup>
                    </div>
                    <hr/>
                    <p className="text-warning small text-center"><strong>Note:</strong>This is a computer generated invoice. No Signature Required</p>
                </CardBlock>
            </Card>

        </div>
    </div>
)
