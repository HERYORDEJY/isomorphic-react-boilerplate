import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/button';
import Logo from '../../assets/images/logo.png';
import LogoIcon from '../../assets/images/logo.svg';
import CheckIcon from '../../assets/icons/check.svg';
import { setVersion } from '../../state/app-data/actions';
import { setName } from '../../state/user-data/actions';

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Test page!!!'
    };

    this.onButtonClick = this.onButtonClick.bind(this);
    this.onButton2Click = this.onButton2Click.bind(this);
    this.onButton3Click = this.onButton3Click.bind(this);
  }

  onButtonClick(e)
  {
    e.preventDefault();
    this.setState({
      title: 'Updated page!!!'
    })
  }

  onButton2Click(e)
  {
    e.preventDefault();
    this.props.setName('New name');
  }

  onButton3Click(e)
  {
    e.preventDefault();
    this.props.setVersion('1.2.3');
  }

  render() {
    return (
      <section className="main">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h1>{this.state.title}</h1>
              <h2>{this.props.userData.name}</h2>
              <h2>{this.props.appData.version}</h2>
              <CheckIcon width={50} height={50} />
              <div><Button label="Change title" onClick={this.onButtonClick} /></div>
              <div><Button label="Change name" onClick={this.onButton2Click} /></div>
              <div><Button label="Change version" onClick={this.onButton3Click} /></div>
              <div>
                <LogoIcon width={500} height={100} />
              </div>
              <div>
                <img src={Logo} alt="logo" width="500" height="100" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  setVersion: (data) => dispatch(setVersion(data)),
  setName: (data) => dispatch(setName(data))
});

const mapStateToProps = state => ({
  appData: state.appData,
  userData: state.userData
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
