import NatureImage from './assets/nature.jpg'

function App(){
  let str = "Welcome Back Nagarajan!"
  return <>
    <div className="container-fluid ps-md-0">
  <div className="row g-0">
    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image">
      <img src={NatureImage} style={{height:"680px",width:"720px"}}/>
    </div>
    <div className="col-md-8 col-lg-6">
      <div className="login d-flex align-items-center py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-lg-8 mx-auto">
              <h3 className="login-heading mb-4">{str}</h3>

              {/* <!-- Sign In Form --> */}
              <form>
                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                  <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                  <label className="form-check-label" htmlFor="rememberPasswordCheck">
                    Remember password
                  </label>
                </div>

                <div className="d-grid">
                  <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Sign in</button>
                  <div className="text-center">
                    <a className="small" href="#">Forgot password?</a>
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
  </>
}

export default App