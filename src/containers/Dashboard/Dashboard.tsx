import { Card, CardType } from 'components';
import * as React from 'react';
import { Component } from "react";
import * as classes from './Dashboard.scss';
/**
 * I just started to design it not valid code
 */
class Dashboard extends Component {
    public render() {
        return (

            <div className={classes.Container}>
                <div className={classes.Period}>
                    Period:
                        <span className={classes.Date}>27-09-2018</span>
                    <span> to </span>
                    <span className={classes.Date}>27-10-2018</span>
                </div>

                <Card title="Balance" body={
                    <React.Fragment>
                        <div className={classes.SpendingCircle}>
                            <span className={classes.Balance}>100£</span>
                        </div>
                        <div className={classes.Details}>
                            <div><b>Income:</b> 1000 £</div>
                            <div><b>Expenses:</b> 900 £</div>
                        </div>
                    </React.Fragment>
                } footer={
                    <div className={classes.FooterLabel}>
                        Details<i className={['fa', 'fa-angle-right'].join(' ')} />
                    </div>
                } />

                <div className={classes.CardInfoContainer}>
                    <Card mini={true} type={CardType.Primary} body={
                        <React.Fragment>
                            <i className={['fa', 'fa-plus-circle', classes.Fa].join(' ')} />
                            <div>Add Expenses</div>
                        </React.Fragment>
                    } />

                    <Card mini={true} type={CardType.Accent} body={
                        <React.Fragment>
                            <i className={['fa', 'fa-plus-circle', classes.Fa].join(' ')} />
                            <div>Add New Category</div>
                        </React.Fragment>
                    } />

                    <Card mini={true} type={CardType.Info} body={
                        <React.Fragment>
                            <i className={['fa', 'fa-balance-scale', classes.Fa].join(' ')} />
                            <div>Statements</div>
                        </React.Fragment>
                    } />
                </div>


            </div>


        );
    }
}

export default Dashboard;