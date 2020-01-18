import React, { Component } from "react";
import "./log.css";
import axios from 'axios';
import urlFor from './../../helpers/urlFor';
import Flash from './../../lib/Flash';
import './../home/index.css'
import auth from "./../../authguard/auth";

class login extends Component {
	constructor(props) {
		super(props);
		if(auth.isAuthenticated()){
			this.props.history.push("/home")
		}

		this.state = {
						usernameLogin:'',
						passwordLogin:'',
						error:''
					};
		this.handleChange = this.handleChange.bind(this);
		this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
	}

	handleChange(event) {
		let obj={}
		obj[event.currentTarget.name]=event.currentTarget.value;
		this.setState(obj);
	}


	handleLoginSubmit(e) {
		e.preventDefault();
		axios
        .post(
          urlFor("login/"),
           {"Name":this.state.usernameLogin,"Password":this.state.passwordLogin},
        )
        .then(res => {
			console.log(res)
			auth.login(() => {
				this.props.history.push("/home");
			  },res.data.token);
		})
		.catch(res=>{
			this.setState({ error:res.response.data.message });
		});
	}

	resetError = () => {
		this.setState({ error: '' });
	  }


	render() {
		const { error } = this.state;

	return (
      <div style={{marginTop:100}}>
	   {error && <Flash error={error} resetError={this.resetError} />}
      <div className="container">
    	<div className="row">
			<div className="col-md-6 col-md-offset-3">
				<div className="panel panel-login">
					<div className="panel-heading">
						<div className="row">
							<div className="col-xs-12">
								<a href="#" className="active" id="login-form-link">Login</a>
							</div>
						</div>
						<hr />
					</div>
					<div className="panel-body">
						<div className="row">
							<div className="col-lg-12">
								<form id="login-form" role="form" style={{"display": "block"}}>
									<div className="form-group">
										<input type="text" name="usernameLogin" id="usernameLogin" value={this.state.usernameLogin} placeholder="Mobile Number" className="form-control" ref="first" onChange={this.handleChange} />
									</div>
									<div className="form-group">
									<input type="password" name="passwordLogin" id="passwordLogin" value={this.state.passwordLogin} className="form-control" placeholder="Password" onChange={this.handleChange}/>
									</div>
									<div className="form-group">
										<div className="row">
											<div className="col-sm-6 col-sm-offset-3">
												<input type="submit" name="login-submit" id="login-submit" className="form-control btn btn-login" onChange={this.handleChange} value="Log In" onClick={this.handleLoginSubmit}/>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

    </div>
    );
  }
}

export default login;
