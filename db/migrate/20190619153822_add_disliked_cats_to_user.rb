class AddDislikedCatsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :disliked_cats, :text
  end
end
