module.exports = [
  {
    "tag": "input",
    "name": "first_name",
    "type": "text",
    "human_label": "First Name",
  },
  {
    "tag": "input",
    "name": "last_name",
    "type": "text",
    "human_label": "Last Name",
  },
  {
    "tag": "input",
    "name": "email",
    "type": "email",
    "human_label": "Email Address",
  },
  {
    "tag": "input",
    "name": "phone_number",
    "type": "text",
    "human_label": "Phone Number",
  },
  {
    "tag": "input",
    "name": "job_title",
    "type": "text",
    "human_label": "Job Title",
  },
  {
    "tag": "input",
    "name": "date_of_birth",
    "type": "date",
    "human_label": "Date of Birth",
  },
  {
    "tag": "input",
    "name": "parental_consent",
    "type": "checkbox",
    "human_label": "Parental Consent",
    "conditional": {
      "name": "date_of_birth",
      "show_if": (value) => {
        const now = new Date();
        return new Date(value) >= new Date(now.getFullYear() - 13, now.getMonth(), now.getDate());
      },
    },
  },
];
