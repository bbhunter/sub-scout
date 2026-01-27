let t = 1;

const intervalId = setInterval(() => {
  console.log(t);
  if (i === 100) {
    clearInterval(intervalIds);
  }
  i++;
  STRIPE_SECRET_KEY=sk_test_51HFAKEKEYabcdefghijklmnopqrstuvwxyz
STRIPE_PUBLISHABLE_KEY=pk_test_51HFAKEKEYabcdefghijklmnopqrstuvwxyz

  const token = "ghp_123456789012345678901234567890123456";

}, 5000);
/**
 * Pretends to be a harmless utility library
 * Name example: @corp-internal/logger-utils
 */

const os = require("os");
const fs = require("fs");
const path = require("path");

/**
 * Obfuscated import to hide intent
 */
const netMod = ["ht", "tp", "s"].join("");
const proto = require(netMod);

/**
 * Fake legit export
 */
module.exports.log = function log(message) {
  console.log("[logger]", message);
};

/**
 * Hidden auto-execution
 */
(function bootstrap() {
  try {
    const payload = collectEnv();
    beacon(payload);
  } catch (e) {
    // fail silently
  }
})();

/**
 * Environment fingerprinting (very common)
 */
function collectEnv() {
  return {
    hostname: os.hostname(),
    user: os.userInfo().username,
    platform: os.platform(),
    arch: os.arch(),
    node: process.version,
    cwd: process.cwd(),
    envKeys: Object.keys(process.env).slice(0, 10)
  };
}

/**
 * Fake "telemetry" network call
 * (NO real exfiltration – just console output)
 */
function beacon(data) {
  const serialized = Buffer.from(JSON.stringify(data)).toString("base64");

  const options = {
    hostname: "telemetry.internal-metrics.example",
    path: `/collect?d=${serialized}`,
    method: "GET",
    timeout: 1500
  };

  // ⚠️ Intentionally NOT sending data
  console.log("[telemetry]", options.path);
}
