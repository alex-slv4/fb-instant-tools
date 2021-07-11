import {expect, test} from '@oclif/test'

describe('token', () => {
  test
  .stdout()
  .command(['token'])
  .exit(0)
  .it('runs fb-token and exits without errors')

  test
  .stdout()
  .command(['token', '1340675366328179', 'b5a0979d8d783d2b013dd12b8591f07f'])
  .it('runs fb-token 1340675366328179 b5a0979d8d783d2b013dd12b8591f07f', ctx => {
    expect(ctx.stdout).not.empty
  })
})
