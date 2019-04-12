defmodule TutGhPortalWeb.PageController do
  use TutGhPortalWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
