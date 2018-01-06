import React, {Component} from 'react';

class Login extends Component {
  render() {
    return (
      <div className="col-4 col-mx-auto">
        <form>
          <div className="empty">
            <div className="empty-icon">
              <i className="icon icon-people"></i>
            </div>
            <p className="empty-title h5">Please login</p>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input className="form-input" type="text" id="email" placeholder="ex: donna&admin.com"/>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="password">Password</label>
              <input className="form-input" type="password" id="password" placeholder="ex: secret"/>
            </div>

            <div className="empty-action">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
