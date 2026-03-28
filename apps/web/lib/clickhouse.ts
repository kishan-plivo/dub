import { createClient } from "@clickhouse/client";

// Ensure environment variables are defined or fall back to defaults
const host = process.env.CLICKHOUSE_HOST || "localhost";
const port = process.env.CLICKHOUSE_PORT || "8124";
const username = process.env.CLICKHOUSE_USER || "default";
const password = process.env.CLICKHOUSE_PASSWORD || "";
const database = process.env.CLICKHOUSE_DATABASE || "default";

// Basic ClickHouse client configuration using HTTP protocol
// For production, consider connection pooling and other settings
export const clickhouse = createClient({
  host: `http://${host}:${port}`,
  username: username,
  password: password,
  database: database,
  // Recommended settings from @clickhouse/client documentation:
  // Keep the TCP connection alive between requests
  keep_alive: {
    enabled: true,
    // Adjust as needed
    idle_socket_ttl: 15_000,
  },
  // Compression settings can improve performance for large datasets
  compression: {
    response: true,
    request: true,
  },
  // You might need to adjust query timeouts
  // request_timeout: 30_000,
});

console.log(
  `ClickHouse client configured for host: http://${host}:${port}, database: ${database}`,
);
