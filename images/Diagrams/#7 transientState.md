```mermaid
sequenceDiagram
participant transientState.js
participant API

note over transientState.js: Create updateColonyMinerals object 
note over transientState.js: Create updateFacilityMinerals object 

note over transientState.js: Create postColonyMineralUpdate()
note over transientState.js: Create postFacilityMineralUpdate()

note over transientState.js: Create setColonyMineralsQuantity(), setFacilityMineralsQuantity()


transientState.js ->> API: Put data
API->>transientState.js: Return data