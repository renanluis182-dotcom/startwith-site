import { spawn } from "node:child_process";

const rawArgs = process.argv.slice(2);
let host = "0.0.0.0";
let port = "3000";

for (let index = 0; index < rawArgs.length; index += 1) {
  const argument = rawArgs[index];

  if (argument === "--host" || argument === "-H") {
    host = rawArgs[index + 1] ?? host;
    index += 1;
  } else if (argument === "--port" || argument === "-p") {
    port = rawArgs[index + 1] ?? port;
    index += 1;
  }
}

const child = spawn("next", ["dev", "-H", host, "-p", port], {
  stdio: "inherit",
  shell: process.platform === "win32",
});

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  process.exit(code ?? 1);
});
