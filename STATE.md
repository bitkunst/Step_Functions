## States

### Parallel State
- "Type": "Parallel" - creates parallel branches of execution in state machine
- Has additional fields:
  - Branches (required)
  - ResultPath (optional)
  - ResultSelector (optional)
  - Retry (optional)
  - Catch (optional)
- Output:
  - The result comes in an array
- Input and Output processing
```json
{
    ...
    "InputPath": "$.[0]" // first element
    ...
}
```

### Map State
- "Type": "Map" - iterates through a list of steps in the state input
- Has additional fields
  - Iterator (required)
  - ItemsPath (optional)
  - MaxConcurrency (optional)
  - ResultPath (optional)
  - ResultSelector (optional)
  - Retry (optional)
  - Catch (optional)