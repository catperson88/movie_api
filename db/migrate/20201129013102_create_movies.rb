class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
       t.string :title, null: false
       t.integer :thumbs_up
       t.integer :thumbs_down
    end
  end
end
