## What is AWS Step Functions

- A service that allows us build visual workflows for business processes:
  - Let’s us add workflow automation, easily and quickly - **with minimal code**
  - Allows us to create automated workflows with:
    - Error handling built-in
    - Parameters passing
    - Security settings (recommended)
    - State management
    - Most of all - very little coding involved - if any
- Based on `state machines` and `tasks`
- In essence:
  - Automate stuff while integrating other AWS resources

### Building Blocks
- Step Functions is based on
  - **State machines**
    - State machine == workflow
  - **Tasks** (takes input and produces output)

### Design Workflow
- Actions
  - we can integrate with different actions
  - other services that we can integrate with our step functions
- Flow
  - the actual business logic, the actual state machine

### Pricing
- Pricing check out:
  - https://aws.amazon.com/step-functions/pricing/
- Charged based on the number of state transitions required to execute your application
  - 4000 state transitions per month are free (Free Tier)
  - $0.000025 per state transition thereafter
    - == $0.025 per 1000 state transitions

<br>

## State Types

** States aren't the same thing as Tasks **

### Pass
- Transforms data or acts as placeholder
- Pushes input to output

### Task
- Takes input and produces output

### Choice
- Adds if-then-else logic
- Allows the user to use Branching Logic based on the input

### Wait
- Delays for a specified time
- It adds delays to State Machine Execution

### Success
- Stops and marks as success
- Has an expected finish-line: dead-end that stops execution successfully

### Fail
- Stops and marks as failure
- Has an expected finish-line - stops execution with a failure

### Parallel
- Adds separate branches
- Implements parallel branches in execution - user can start multiple states at once
  - We can run multiple states at the same time - three or four Lambda functions running all at the same time

### Map
- Runs parallel workflows for each item in a dataset
- (Dynamic) Runs a set of steps for every input item
