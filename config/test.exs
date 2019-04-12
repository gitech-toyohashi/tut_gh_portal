use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :tut_gh_portal, TutGhPortalWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :tut_gh_portal, TutGhPortal.Repo,
  username: "postgres",
  password: "postgres",
  database: "tut_gh_portal_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
