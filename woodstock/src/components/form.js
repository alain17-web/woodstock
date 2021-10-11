import React from 'react' 
import './Form.css'


class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
      this.handleChangeLastName = this.handleChangeLastName.bind(this);
      this.handleChangeEmail = this.handleChangeEmail.bind(this);
      this.handleChangeMessage = this.handleChangeMessage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeFirstName(event) {
      this.setState({value: event.target.value});
    }

    handleChangeLastName(event){
        this.setState({value: event.target.value});
    }

    handleChangeEmail(event){
        this.setState({value: event.target.value});
    }

    handleChangeMessage(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      alert('Thank you : ' + this.state.value + ' ,your message has been sent');
      event.preventDefault();
    }

    
  
    render() {
      return (
        <div className="container-fluid">
            <h4 className="mt-5 ms-5 ps-5">CONTACT US</h4>
            <form onSubmit={this.handleSubmit}>
                <div className="container-fluid">
                    <div className="row justify-content-evenly">
                        <div className="col-4 offset-1 mb-3">
                            <input type="text" value={this.state.value} onChange={this.handleChangeFirstName} class="form-control mt-5 border border-3 rounded-pill" id="firstName" placeholder="FIRST NAME"  />
                        </div> 
                        <div className="col-4 mb-3">
                            <input type="text" value={this.state.value} onChange={this.handleChangeLastName} class="form-control mt-5 border border-3 rounded-pill" id="lastName" placeholder="LAST NAME" />
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col-5 offset-2 mb-3 ">
                            <input type="email" value={this.state.value} onChange={this.handleChangeEmail} class="form-control mt-5 border border-3 rounded-pill" id="email" placeholder="EMAIL ADDRESS" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-9 offset-2 mb-3">
                            <textarea name="message" class="form-control mt-5 border border-3" id="message" rows="5" placeholder="MESSAGE" value={this.setState.value} onChange={this.handleChangeMessage}></textarea>
                        </div>
                    </div>
                </div>
                <div className="col offset-2 mt-3">
                    <button type="submit" className="btn btn-warning btn-lg border border-3">SEND</button>
                </div>
            </form>
        </div>
      );
    }
  }

  export default Form