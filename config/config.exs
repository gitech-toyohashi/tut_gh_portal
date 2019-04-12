# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :tut_gh_portal,
  ecto_repos: [TutGhPortal.Repo]

# Configures the endpoint
config :tut_gh_portal, TutGhPortalWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "uqg8sj37k+PfUG3B2VBhWGdC7ifKKXumgJplhe35i9ZbR06lp7pXNq67gqs99t2P",
  render_errors: [view: TutGhPortalWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: TutGhPortal.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
