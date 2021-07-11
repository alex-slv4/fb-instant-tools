import {test} from '@oclif/test'

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
  ]).exit(2)
  .it(
    'runs fb-upload and fails unable to find file'
  )
})
