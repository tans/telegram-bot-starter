/* tslint:disable */

import { webhookCallback } from "grammy";
import bot from "../bot";

// export const config = {
//   runtime: "edge",
// };

export default webhookCallback(bot, "http");
