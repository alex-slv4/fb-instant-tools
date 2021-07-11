import {Command, flags} from '@oclif/command'
import * as child_process from 'child_process'
import * as fs from 'fs'

export default class Upload extends Command {
  static description = 'Uploads asset to the facebook hosting';

  static flags = {
    comment: flags.string({char: 'C', description: 'Comment to be added'}),
    file: flags.string({char: 'f', description: 'Path to zip file'}),
    help: flags.help({char: 'h'}),
  };

  static args = [
    {name: 'app_id', description: 'App id', required: true},
    {name: 'access_token', description: 'App access token', required: true},
  ];

  async run() {
    const {args, flags} = this.parse(Upload)

    const {app_id, access_token} = args
    let {comment, file} = flags
    file = file || './bundle.zip'
    comment = comment || 'No comment'

    if (!fs.existsSync(file)) {
      return this.error(`${file} not found`)
    }

    const child = child_process.exec(
      `curl --progress-bar -X POST -F "asset=@${file}" -F "type=BUNDLE" -F "comment=${comment}" -F "access_token=${access_token}" https://graph-video.facebook.com/${app_id}/assets | tee /dev/null`
    )
    child.stdout.pipe(process.stdout)
    child.stderr.pipe(process.stderr)
    /* eslint @typescript-eslint/no-unused-vars: "off" */
    for await (const data of child.stdout) {
      //
    }
    this.log(
      `\nhttps://developers.facebook.com/apps/${app_id}/instant-games/hosting/`
    )
  }
}
