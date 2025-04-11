```mermaid
sequenceDiagram
participant facilityMinerals.js
participant API

note over facilityMinerals.js: Create displayFacilityMinerals()
facilityMinerals.js ->> API: Fetch data
API->>facilityMinerals.js: Return data

note over facilityMinerals.js: Update Title with selected facility's name
note over facilityMinerals.js: Display current inventory for selected facility

```