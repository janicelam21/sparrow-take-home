# Sparrow-take-home


## Sparrow Take Home Specs
* The goal is to dynamically build a form from a given JSON Array. We've attached a dynamic form JSON template at the the bottom of this doc in the "Data" section. Once the form is built, a user should then be able to click "submit", and return an object containing the data from the form (the name attribute should be the key for each field).

The following object from the JSON array:

    {
        "name": "email",
        "type": "email"
        "human_label": "Email Address",
        "tag": "input",
    }

Would turn into a form field like this:

    <label>Email Address</label>
    <input type="email" name="email">


On form submit, this field would be represented like so:

    {
    	"email": "jsmith@gmail.com",
      // ...along with any other fields in the form
    }


## Data

    [{
      "tag": "input",
    	"name": "first_name",
      "type": "text",
    	"human_label": "First Name"
    }, {
      "tag": "input",
      "name": "last_name",
      "type": "email",
    	"human_label": "Last Name"
    }, {
      "tag": "input",
      "name": "email",
      "type": "email",
      "human_label": "Email Address"
    }, {
      "tag": "input",
      "name": "phone_number",
      "type": "text",
      "human_label": "Phone Number"
    }, {
      "tag": "input",
      "name": "job_title",
      "type": "text",
      "human_label": "Job Title"
    }, {
      "tag": "input",
      "name": "date_of_birth",
      "type": "date",
      "human_label": "Date of Birth"
    }, {
      "tag": "input",
      "name": "parental_consent",
      "type": "checkbox",
      "human_label": "Parental Consent",
    	"conditional": {
    		"name": "date_of_birth",
    		"show_if": (value) => {
    			const now = new Date();
    			return value >= new Date(now.getFullYear() - 13, now.getMonth(), now.getDate());
    		}
    }]

    
## Tech Stack
* Frontend: Javascript, React, CSS Modules, Webpack
* Backend: --


## Usage
* clone this repository  
git clone https://github.com/janicelam21/sparrow-take-home.git

* install dependencies  
npm install 

* build webpack bundle  
npm run react-dev

* run app  
npm start