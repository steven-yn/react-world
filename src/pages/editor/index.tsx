const EditorPage = () => {
  return (
    <>
      <nav class="navbar navbar-light">
        <div class="container">
          <a class="navbar-brand" href="/">
            conduit
          </a>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              <a class="nav-link active" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Sign in
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/register">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="editor-page">
        <div class="container page">
          <div class="row">
            <div class="col-md-10 offset-md-1 col-xs-12">
              <ul class="error-messages">
                <li>That title is required</li>
              </ul>

              <form>
                <fieldset>
                  <fieldset class="form-group">
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Article Title"
                    />
                  </fieldset>
                  <fieldset class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="What's this article about?"
                    />
                  </fieldset>
                  <fieldset class="form-group">
                    <textarea
                      class="form-control"
                      rows="8"
                      placeholder="Write your article (in markdown)"
                    />
                  </fieldset>
                  <fieldset class="form-group">
                    <input type="text" class="form-control" placeholder="Enter tags" />
                    <div class="tag-list">
                      <span class="tag-default tag-pill">
                        {' '}
                        <i class="ion-close-round" /> tag{' '}
                      </span>
                    </div>
                  </fieldset>
                  <button class="btn btn-lg pull-xs-right btn-primary" type="button">
                    Publish Article
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div class="container">
          <a href="/" class="logo-font">
            conduit
          </a>
          <span class="attribution">
            An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code
            &amp; design licensed under MIT.
          </span>
        </div>
      </footer>
    </>
  );
};

export default EditorPage;
