import { Command, flags } from "@oclif/command";
import axios from "axios";

export default class Token extends Command {
  static description = "Generates facebook upload token";

  static flags = {
    help: flags.help({ char: "h" }),
  };

  static args = [
    { name: "id", description: "App id", required: true },
    {
      name: "secret",
      description: "App secret",
      required: true,
    },
  ];

  async run() {
    const { args } = this.parse(Token);
    const { id, secret } = args;
    const result = await axios.get(
      `https://graph.facebook.com/oauth/access_token?client_id=${id}&client_secret=${secret}&grant_type=client_credentials`
    );
    const { access_token } = result.data;
    this.log(access_token);
  }
}
