## RESTTEST
RESTTEST is a testing suite that satisfies popular needs for testing a rest API server.
### Configure Testing parameters
You have to specify all testing parameters in `resttest/test_config.json`. In `test_num` specify how many testing units do you want to have, and in below please name your test like `testx` (`x` is a number). Each testing unit needs to specify url and port number. Specify testing steps in the array `testing_procedure`. In each testing step, specify expected status code and expected messages. If you don't care about expected messages, just say `"Any"` (expected code is a must).
### Run Testing
After starting the API server to be tested, in `resttest` directory run `npm install` and `npm test` to start testing.
