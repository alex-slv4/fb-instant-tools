import {test} from '@oclif/test'

describe('token', () => {
  test
  .stdout()
  .command(['token'])
  .exit(0)
  .it('runs fb-token and exits without errors')
})
