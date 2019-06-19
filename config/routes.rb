Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'


  namespace :api do
    resources :cats, only: [:index, :update]
    get 'my_cats', to: 'cats#my_cats'
    get "down_vote/", to: "cats#down_vote"
    put "down_vote/:id", to: "cats#down_vote"
  end
end
