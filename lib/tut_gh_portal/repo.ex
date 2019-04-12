defmodule TutGhPortal.Repo do
  use Ecto.Repo,
    otp_app: :tut_gh_portal,
    adapter: Ecto.Adapters.Postgres
end
