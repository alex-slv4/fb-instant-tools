import * as https from 'https'
import {Command, flags} from '@oclif/command'

export default class Token extends Command {
  static description = 'Generates facebook upload token';

  static flags = {
    help: flags.help({char: 'h'}),
  };

  static args = [
    {name: 'id', description: 'App id'},
    {
      name: 'secret',
      description: 'App secret',
    },
  ];

  async run() {
    const {args} = this.parse(Token)
    const {id, secret} = args

    const secretIsUndefined = typeof secret === 'undefined'

    if (typeof id === 'undefined' && secretIsUndefined) {
      return this._help()
    }
    if (secretIsUndefined) {
      return this.error('App secret is undefined')
    }
    try {
      const result = await this.facebookGraph(
        `/oauth/access_token?client_id=${id}&client_secret=${secret}&grant_type=client_credentials`
      )
      if (result.accessToken) {
        this.log(result.accessToken)
      } else {
        this.error(JSON.stringify(result))
      }
    } catch (error) {
      this.error(error)
    }
  }

  private async facebookGraph(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: 'graph.facebook.com',
        port: 443,
        path,
        method: 'GET',
      }
      let body = ''
      const req = https.request(options, res => {
        res.on('data', (chunk: Buffer) => {
          body += chunk
        })
        res.on('end', () => resolve(JSON.parse(body)))
      })

      req.on('error', error => {
        reject(error)
      })

      req.end()
    })
  }
}
