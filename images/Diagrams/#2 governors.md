``` mermaid
sequenceDiagram
participant governors.js
participant API

note over governors.js: Create displayGovernors()
governors.js ->> API: Fetch governor data
API->>governors.js: Return governor data
note over governors.js: Create HTML dropdown to display governor names.
note over governors.js: Include id="governor" on select element
note over governors.js: Include value="" as governor id
note over governors.js: Include class="dropdown" for CSS



```