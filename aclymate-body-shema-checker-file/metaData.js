const body = {
    name: "William Loopesko",
    age: 33,
    founder: true,
    company: "Aclymate",
    address: {
      description: "2432 S. Downing St, Denver, CO 80210",
      county: "Denver",
      country: "USA"
    }
  }

const schema = {
    name: {type: "string", required: true},
    age: {type: "number", required: true},
    founder: {type: "boolean", required: false},
    company: {type: "string", required: true},
    address: {
      type: "object", 
      required: true,
      description: {type: "string", required: true},
      county: {type: "string", required: false},
      country: {type: "string", required: false}
    }
  }


module.exports = { body, schema }