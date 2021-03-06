import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Button } from 'semantic-ui-react';
import Speechly from './Speechly';


class Navigation extends React.Component {
  handleKindChange = (_, { value }) => {
    // console.log('sana: ' + value);
    this.props.changeReportKind(value);
  };

  handleTimespanChange = (_, { value }) => {
    console.log('sana: ' + value);
    this.props.changeReportTimespan(value);
  };

  callbackFunction1 = childData => {    
    if (childData === 'Expense and income') {
      this.props.changeReportKind('expense_income');
    } else if (childData === 'Expense by tag') {
      this.props.changeReportKind('expense_tags');
    } else if (childData === 'Net income') {
      this.props.changeReportKind('net_income');
    } else if (childData === 'Net worth') {
      this.props.changeReportKind('net_worth');
    } else {
      return null;
    }
  };

  callbackFunction2 = childData => {    
    console.log('Navigation: ' + childData);
    this.props.changeReportTimespan(childData);
    if (childData === 'Yearly') {
      this.props.changeReportTimespan('yearly');
    } else if (childData === 'Monthly') {
      this.props.changeReportTimespan('monthly')
    } else {
      return null;
    }
  };

  render() {
    return (
      <div className="container-header">

        <div style={{ border: '1px solid blue', padding: '10px', marginBottom: '15px'}}>
          <p style={{ marginTop: '0.4em', fontWeight: 'bold', textAlign: 'center', textDecoration: 'underline'}}>Voice Command Guideline</p>
          <ul>
            <li>To filter by report type, say: [Display report for 'report type' 'monthly/yearly']</li>
            <p style={{fontStyle: 'italic' }}>Example: Display report for Expense and Income monthly</p>

            <li>To filter by account, say: [Set account as 'account name']</li>
            <p style={{fontStyle: 'italic' }}>Example: Set account as Adam</p>

            <li>To filter by excluding tag, say: [Exclude 'tag name' tag]</li>
            <p style={{fontStyle: 'italic' }}>Example: Exclude salary tag</p>
          </ul>
          
        </div>

        <Speechly
          parentCallback1={this.callbackFunction1}
          parentCallback2={this.callbackFunction2}
        />
        <Button.Group basic>
          <Dropdown
            button
            value={this.props.kind}
            options={this.props.kindOptions}
            onChange={this.handleKindChange}
          />
          <Button
            icon="chevron left"
            onClick={this.props.moveReportDateBackwards}
          />
          <Dropdown
            basic
            button
            icon={false}
            text={this.props.timespanLabel}
            value={this.props.timespan}
            options={this.props.timespanOptions}
            onChange={this.handleTimespanChange}
          />
          <Button
            icon="chevron right"
            onClick={this.props.moveReportDateForwards}
          />
        </Button.Group>
      </div>

    );
  }
}

Navigation.propTypes = {
  kind: PropTypes.string,
  kindOptions: PropTypes.array,
  timespan: PropTypes.string,
  timespanLabel: PropTypes.string,
  timespanOptions: PropTypes.array,
  changeReportKind: PropTypes.func,
  changeReportTimespan: PropTypes.func,
  moveReportDateBackwards: PropTypes.func,
  moveReportDateForwards: PropTypes.func
};

export default Navigation;
