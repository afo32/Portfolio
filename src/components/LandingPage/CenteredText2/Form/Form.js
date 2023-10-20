import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import './Form.css';
import { Link } from 'react-router-dom';

export function Form() {
    return (
        <div className="App">
        <Box sx={{ flexGrow: 1, marginBottom: "100px" }}>
          <AppBar position="static" color="transparent">
            <Toolbar>
                <Typography
                  color="#000000"
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  Juan C. Afonso Programador Full Stack
                </Typography>
              <Link to="/details">
                <Button color="inherit">Acerca de mi</Button>
              </Link>
              <Link to="/works">
                <Button color="inherit">Trabajos</Button>
              </Link>
              <Link to="/contact">
                <Button color="inherit">Contáctame</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
        <div className="is-form-page">
        <section className="is-white has-text-centered">
          <div className="container-form">
            <div className="columns is-centered">
              <div className="column is-8">
                <Typography variant="h1" sx={{ fontSize: "48px" }}>
                  Im excited to learn about your project. Ready to get started?
                </Typography>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container-form">
            <form
              id="form"
              acceptCharset="UTF-8"
              action="https://usebasin.com/f/54681ec482df"
              method="POST"
            >
              <div className="columns-form is-centered">
                <div className="column is-half">
                  <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                      <input
                        className="input"
                        name="name"
                        type="text"
                        required
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="column is-half">
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        className="input"
                        name="email"
                        type="email"
                        required
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns-form">
                <div className="column">
                  <div className="field">
                    <label className="label">Project name</label>
                    <div className="control is-expanded">
                      <div className="select is-fullwidth">
                        <select className="is-large" name="project" required>
                          <option value="0" disabled selected hidden></option>
                          <option>Responsive design</option>
                          <option>Web app</option>
                          <option>Mobile app</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column is-half">
                  <div className="field">
                    <label className="label">Budget</label>
                    <div className="control is-expanded">
                      <div className="select is-fullwidth">
                        <select className="is-large" name="role" required>
                          <option value={0} disabled selected hidden></option>
                          <option>$500 - $1,000</option>
                          <option>$1,000 - $1,500</option>
                          <option>$1,500 - $2,000</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns-form is-centered">
                <div className="column">
                  <div className="field">
                    <label className="label">Additional details</label>
                    <div className="control is-expanded">
                      <textarea className="textarea is-large" name="message" rows='5' required></textarea>
                    </div>
                  </div>
                  <div className="columns-form-btn is-centered">
                  <div className="column">
                    <div className="field">
                      <div className="control">
                        <button className="btn-form is-primary is-outlined is-medium is-fullwidth is-rounded">Submit</button>
                      </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
      </div>
    )
}