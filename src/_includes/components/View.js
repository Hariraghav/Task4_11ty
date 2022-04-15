const { html } = require("common-tags");

function View() {
  const handle = () => {
    alert("hello");
  };
  return html`
    <div>
      <input
        placeholder="Enter your organization name"
        id="lname"
        name="lname"
      />
      <button onclick="handle()">OK</button>
    </div>
  `;
}

module.exports = View;
