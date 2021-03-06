import React, {Component,View} from 'react';
import {Navbar, NavItem, Nav, NavDropdown, Glyphicon, Button, MenuItem} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as organizationActionCreators from '../../actions/organization';
import { push } from 'redux-router';
import OrganizationDetailItem from './OrganizationDetailItem';
import SubscriptionList from '../subscription/SubscriptionList';

class OrganizationDetails extends React.Component {


    getSubscriptionsTab(e) {

        e.preventDefault();
        this.props.organizationActions.showSubscriptionDetail('subscription', 2);

    }

    getOrganizationDetailsTab(e) {

        e.preventDefault();
        this.props.organizationActions.showOrganizationDetails('organization', 1);

    }

    render() {

        let DetailScreen = null;

        let {subscriptionDetailsTab, organizationDetailsTab, selectedOption, activeKey} = this.props;

        if(organizationDetailsTab){
            DetailScreen = <OrganizationDetailItem />;
        }

        if (subscriptionDetailsTab){
            DetailScreen = <SubscriptionList />;
        }

        return (
            <div>

                <Nav bsStyle="tabs" activeKey={activeKey}>
                    <NavItem eventKey={1}   title="Organization Details"
                                            onClick={this.getOrganizationDetailsTab.bind(this)}>
                        Organization
                    </NavItem>
                    <NavItem eventKey={2}   title="Subscriptions"
                                            onClick={this.getSubscriptionsTab.bind(this)}>
                        Subscriptions
                    </NavItem>
                </Nav>

                {DetailScreen}

            </div>

        );

    }

}

const mapStateToProps = (state) => ({
    subscriptionDetailsTab: state.organization.subscriptionDetailsTab,
    organizationDetailsTab: state.organization.organizationDetailsTab,
    selectedOption: state.organization.selectedOption,
    activeKey: state.organization.activeKey
});

const mapDispatchToProps = (dispatch) => ({
    organizationActions: bindActionCreators(organizationActionCreators, dispatch),
    routeDispatch:dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationDetails);
