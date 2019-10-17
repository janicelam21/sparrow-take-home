import React from 'react';
import { PropTypes } from 'prop-types';
import styles from './Main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: [],
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      job_title: '',
      date_of_birth: '',
      parental_consent: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      fields: this.props.fakeData,
    });
  }

  onChange(e, key) {
    this.setState({ [key]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const now = new Date();
    if (new Date(this.state.date_of_birth) >= new Date(now.getFullYear() - 13, now.getMonth(), now.getDate()) && !this.state.parental_consent) {
      alert('Parental Consent Needed For Ages Under 13')
    }

    if (this.state.first_name && this.state.last_name && this.state.email && this.state.phone_number && this.state.job_title && this.state.date_of_birth) {
      console.log(JSON.stringify({
        "first_name": this.state.first_name,
        "last_name": this.state.last_name,
        "email": this.state.email,
        "phone_number": this.state.phone_number,
        "job_title": this.state.job_title,
        "date_of_birth": this.state.date_of_birth,
        "parental_consent": this.state.parental_consent,
      }));
    } else {
      let message = '';
      if (!this.state.first_name) {
        message += `Please enter first name \n`;
      }
      if (!this.state.last_name) {
        message += `Please enter last name \n`;
      }
      if (!this.state.email) {
        message += `Please enter email \n`;
      }
      if (!this.state.phone_number) {
        message += `Please enter phone number \n`;
      }
      if (!this.state.job_title) {
        message += `Please enter job title \n`;
      }
      if (!this.state.date_of_birth) {
        message += `Please enter date of birth \n`;
      }
      alert(message);
    }
  }

  render() {
    return (
      <div className={styles.main}>
        <form>
          {this.state.fields.map((each, index) => {
            const Tagtype = each.tag;
            return (
              <div key={index} className={styles.eachForm}>
                {each.human_label === 'Parental Consent' && each.conditional.show_if(this.state.date_of_birth)
                  ? (
                    <div>
                      <label>{each.human_label}</label>
                      <Tagtype type={each.type} name={each.name} className={styles.inputBox} onChange={(e) => { this.onChange(e, each.name); }} />
                    </div>
                  )
                  : null}
                {each.human_label !== 'Parental Consent'
                  ? (
                    <div>
                      <label>{each.human_label}</label>
                      <Tagtype type={each.type} name={each.name} className={styles.inputBox} onChange={(e) => { this.onChange(e, each.name); }} />
                    </div>
                  )
                  : null}
              </div>
            );
          })}
          <button type="submit" onClick={this.onSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

Main.propTypes = {
  fakeData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Main;
