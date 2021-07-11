import {expect, test} from '@oclif/test'

describe('token', () => {
  test
  .stdout()
  .command(['upload'])
  .exit(2)
  .it('runs fb-upload and exits with missing args status')

  test
  .stdout()
  .command([
    'upload',
    '1340675366328179',
    '1340675366328179|J1ir5Gp1q5xSEpuXHBvk_N3O2SA',
  ])
  .it(
    'runs fb-upload 123 1340675366328179|J1ir5Gp1q5xSEpuXHBvk_N3O2SA',
    ctx => {
      expect(ctx.stdout).not.empty
    }
  )
})
