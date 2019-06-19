class Api::CatsController < ApplicationController
  before_action :authenticate_user!


  def index
    render json: User.random_cat(current_user.liked_cats)
  end

  def update
    current_user.liked_cats << params[:id].to_i
    current_user.save
  end

  def down_vote

    current_user.disliked_cats << params[:id].to_i
    current_user.save
    render json: User.disliked(current_user.disliked_cats)
  end

  def my_cats
    render json: User.liked(current_user.liked_cats)
  end

  

end
