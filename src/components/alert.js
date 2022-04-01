class Alert {
    static success(msg) {
        return `       
      <div class="alert alert-success alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" ></button>
      ${msg}
      </div>
           
`
    }

    static warning(msg) {
        return `       
      <div class="alert alert-warning alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" ></button>
      ${msg}
      </div>
           
      `
    }

    static danger(msg) {
        return `       
      <div class="alert alert-danger alert-dismissible fade show">
    <button type="button" class="btn-close" data-bs-dismiss="alert" ></button>
      ${msg}
      </div>           
      `
    }
}

export default Alert;