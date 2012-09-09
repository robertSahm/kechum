class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :project
      t.string :brand
      t.string :type_of
      t.string :director
      t.string :url
      t.text :description
      t.string :permalink

      t.timestamps
    end
  end
end
