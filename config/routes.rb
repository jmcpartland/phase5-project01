Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  
  resources :posts, only: [:index, :show, :create, :destroy]

  # Defines the root path route ("/")
  # root "articles#index"
end
