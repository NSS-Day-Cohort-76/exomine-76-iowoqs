``` mermaid
sequenceDiagram
participant facilities.js
participant API

note over facilities.js: Create displayFacilities()
facilities.js ->> API: Fetch facilities data
API->>facilities.js: Return facilities data
note over facilities.js: Create HTML dropdown to display facility names whose status is active.
note over facilities.js: If governor value is not selected, alert to select a governor.
note over facilities.js: Include id="facility" on select element
note over facilities.js: Include value="" as facility id
note over facilities.js: Include class="dropdown" for CSS

```